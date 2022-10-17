const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  let seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  if (date == null) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date) || date.toString() == Date.prototype.toString.call(new Date())) {
    throw new Error('Invalid date!');
  } else {
    return seasons[date.getMonth()];
  }
}

module.exports = {
  getSeason
};
