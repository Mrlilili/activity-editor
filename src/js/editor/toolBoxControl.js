/**
 * Created by LiYan on 2017/1/12.
 * toolBoxControl
 */

var Regular = require('regular');
var toolBoxControlTpl = require('./toolBoxControl.rgl');
module.exports = Regular.extend({
  template: toolBoxControlTpl,
  name: 'toolBoxControl',
  init: function () {},
  changeToolBoxStatus: function () {
    var self = this;
    var data = self.data;
    data.toolBoxStatus = data.toolBoxStatus === 1 ? 2 : 1;
    self.$update();
  }
});

