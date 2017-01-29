/**
 * Created by LiYan on 2017/1/13.
 * headConf
 */
var Regular = require('regular');
var headConfTpl = require('./moduleConf.rgl');
module.exports = Regular.extend({
  template: headConfTpl,
  data: {
    test: 789789
  },
  // name: 'moduleConf',
  init: function () {
    this.name = 'ioio';
    this.$inject($('#toolContainer')[0], 'bottom');
  }
});
