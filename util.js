var _ = require('lodash'),
        SEP = ' / ';

util = {
  getFullName: function (item, separator) {
    if (_.isEmpty(item) || !_.isFunction(item.parent) || !_.isFunction(item.forEachParent)) { return; }

    var chain = [];

    item.forEachParent(function (parent) { chain.unshift(parent.name || parent.id); });

    item.parent() && chain.push(item.name || item.id); // Add the current item only if it is not the collection

    return chain.join(_.isString(separator) ? separator : SEP);
  }
};

module.exports = util;
