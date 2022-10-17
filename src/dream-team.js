const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  if (members == null) {
    return false;
  }
  else {
    let array = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string' && members[i] !== ' ') {
      let name = members[i].trim();
      array.push((name[0]).toUpperCase());
    }
  }
  array.sort();
  return array.join('');
}
}

module.exports = {
  createDreamTeam
};
