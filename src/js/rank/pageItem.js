/**
 * Created by LiYan on 2016/12/27.
 * pageItem
 */
var Regular = require('regular');
var pageItemTpl = require('./pageItem.rgl');

module.exports = Regular.extend({
  template: pageItemTpl,
  name: 'pageItem',
  data: {},
  init: function () {
  },
  setCurIndex: function (i) {
    var self = this;
    self.data.curIndex = i;
  }
});
