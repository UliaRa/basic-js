const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  let resultArray = [];
  let repeat = 0;
  options.hasOwnProperty('repeatTimes') ? repeat += options.repeatTimes : repeat += 1;
  for (let i = 0; i < repeat; i++) {
    let oneResult = [];
    str == null ? oneResult.push('null') : oneResult.push(str);
    let additionResult = [];
    let repeatAdd = 0;
    if (options.hasOwnProperty('additionRepeatTimes')) {
      repeatAdd += options.additionRepeatTimes;
    } else if(options.hasOwnProperty('addition')) {
      repeatAdd += 1;
    }
    for (let j = 0; j < repeatAdd; j++) {
      options.addition == null ? additionResult.push('null') : additionResult.push(options.addition);
    }
    let additionStr;
    if (options.additionSeparator) {
      additionStr = additionResult.join(options.additionSeparator);
    } else {additionStr = additionResult.join('|');}
    oneResult.push(additionStr);
    resultArray.push(oneResult.join(''));
  }
  if (options.separator) {
    return resultArray.join(options.separator);
  } else {return resultArray.join('+');}
}

module.exports = {
  repeater
};
