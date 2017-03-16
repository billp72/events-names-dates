var uniqueRandomArray = require('unique-random-array');
var eventNames = require('./events.json');

module.exports = {
	all: eventNames,
	random: uniqueRandomArray(eventNames)
}