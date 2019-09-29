const conversions = {
	'minute': {
		unit: 's',
		factor: 60
	},
	'min': {
		unit: 's',
		factor: 60
	},
	'hour': {
		unit: 's',
		factor: 3600
	},
	'hectare': {
		unit: 'm²',
		factor: 10000
	},
	'day': {
		unit: 's',
		factor: 86400
	},
	'degree': {
		unit: 'rad',
		factor: Math.PI / 180
	},
	'°': {
		unit: 'rad',
		factor: Math.PI / 180
	},
	'‘': {
		unit: 'rad',
		factor: Math.PI / 10800
	},
	'second': {
		unit: 'rad',
		factor: Math.PI / 648000
	},
	'“': {
		unit: 'rad',
		factor: Math.PI / 648000
	},
	'ha': {
		unit: 'm²',
		factor: 10000
	},
	'litre': {
		unit: 'm³',
		factor: 0.001
	},
	'L': {
		unit: 'm³',
		factor: 0.001
	},
	'tonne': {
		unit: 'kg',
		factor: 1000
	},
	't': {
		unit: 'kg',
		factor: 1000
	},
	'h': {
		unit: 's',
		factor: 3600
	}
};

module.exports = conversions;
