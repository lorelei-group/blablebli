define(function(require, exports) {
	'use strict';

	function repeat(text, count) {
		return Array(count + 1).join(text);
	}

	exports.repeat = repeat;

});
