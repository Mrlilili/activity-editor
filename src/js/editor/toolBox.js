/**
 * Created by LiYan on 2016/12/26.
 * app
 */
var Regular = require('regular');
var Header = require('../component/header/header');
var toolBoxTpl = require('./toolBox.rgl');
module.exports = Regular.extend({
  template: toolBoxTpl,
  data: {
    headerStatus: 0
  },
  name: 'toolBox',
  init: function () {
    var self = this;
    setTimeout(function () {
      self.addHeader();
    }, 0.5);
  },
  addHeader: function () {
    new Header();
    this.data.headerStatus = 1;
    this.$update();
  }
});

