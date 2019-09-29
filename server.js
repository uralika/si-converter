const express = require('express');
const morgan = require('morgan');
const replaceString = require('replace-string');
const exactMath = require('exact-math');
const _ = require('lodash');
const conversions = require('./utils/conversions');
const {precise} = require('./utils/helpers');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.listen(port, () => {
	console.log(`App listening on port ${port}!`);
});

app.get('/units/si', (req, res) => {
	const units = req.query.units;
	let unitName = units;
	let multiplicationFactor = units;

	if (!units || typeof(units) !== 'string') {
		return res.send({
			error: 'Please enter a supported units input.'
		}).status(400);
	}

	_.forEach(conversions, (conversion, key) => {
		unitName = replaceString(unitName, key, conversion.unit);
		multiplicationFactor = replaceString(multiplicationFactor, key, String(conversion.factor));
	});

	exactMath.formula(multiplicationFactor, ({error, number}) => {
		if (error) {
			return res.send({
				error: error.message
			}).status(400);
		}

		return res.send({
			'unit_name': unitName,
			'multiplication_factor': precise(number)
		}).status(200);
	});
});

// Root redirects to a sample request.
app.get('/', (req, res) => {
	res.redirect('/units/si?units=degree/minute');
});

// Default response for any other requests.
app.use('*', (req, res) => {
	res.send({
		error: 'don\'t have what you\'re looking for :('
	}).status(404).end();
});
