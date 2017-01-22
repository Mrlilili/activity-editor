/**
 * Created by LiYan on 2016/12/26.
 * app
 */
var Regular = require('regular');
var Header = require('../component/header/header');
var toolBoxTpl = require('./toolBox.rgl');
module.exports = Regular.extend({
  template: toolBoxTpl,
  data: {},
  name: 'toolBox',
  init: function () {
    var self = this;
    setTimeout(function () {
      self.addDomModule();
    }, 0.5);
  },
  addDomModule: function () {
    new Header();
    this.$update();
  }
});

