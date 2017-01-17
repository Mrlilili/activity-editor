/**
 * Created by LiYan on 2016/12/27.
 * table
 */
/**
 * Created by LiYan on 2016/12/27.
 * rankList
 */
var Regular = require('regular');
var bestItemTpl = require('./bestItem.rgl');
// var testData = require('../data/testData.json');
module.exports = Regular.extend({
  template: bestItemTpl,
  name: 'bestItem',
  data: {},
  init: function () {
    // var self = this;
  }
});
