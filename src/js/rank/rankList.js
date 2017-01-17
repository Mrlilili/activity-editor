/**
 * Created by LiYan on 2016/12/27.
 * rankList
 */
var Regular = require('regular');
var rankListTpl = require('./rankList.rgl');
// var tableItem = require('./table');
// var pageItem = require('./pageItem');
// var testData = require('../data/rankListData.json');
require('./bestItem');
module.exports = Regular.extend({
  template: rankListTpl,
  name: 'rankList',
  data: {
    // rankData: null
  },
  init: function () {
    // var self = this;
    //
    // self.data.rankData = testData.data;
    //
    // self.$update();
  }
});
