Array.prototype.myMap = function(func) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		result.push(func(this[i], i, this));
	}
	return result;
};
