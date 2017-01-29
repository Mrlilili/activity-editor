/**
 * Created by LiYan on 2016/12/26.
 * app
 */
var Regular = require('regular');
var Modular = require('../component/modular/app');
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
    new Modular();
    this.$update();
  }
});

