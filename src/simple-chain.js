const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],

  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.chains.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    value === '' ? this.chains.push('( )') :  value == null ? this.chains.push('( null )') : this.chains.push(`( ${value.toString()} )`);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    if (typeof position !== 'number' || !Number.isInteger(position) || position > this.chains.length || position < 1) {
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    } else { this.chains.splice(position-1, 1); return this;}
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.chains.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    let str = this.chains.join('~~');
    this.chains = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
