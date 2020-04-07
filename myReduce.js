Array.prototype.myReduce = function(callback, initialValue) {
	let accum;
	if (!initialValue) {
		accum = this[0];
	} else {
		accum = initialValue;
	}

	for (let i = initialValue ? 0 : 1; i < this.length; i++) {
		accum = callback(accum, this[i], i, this);
	}
	return accum;
};
