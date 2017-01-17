/**
 * Created by LiYan on 2017/1/13.
 * headConf
 */
var Regular = require('regular');
var headConfTpl = require('./headConf.rgl');
module.exports = Regular.extend({
  template: headConfTpl,
  name: 'headConf',
  init: function () {
    this.$inject($('#toolContainer')[0], 'bottom');
  }
});
