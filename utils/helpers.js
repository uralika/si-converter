module.exports = {
	precise: (num, sigDigits = 14) => {
		return Number.parseFloat((num).toPrecision(sigDigits));
	}
};
