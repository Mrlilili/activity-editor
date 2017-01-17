/**
 * Created by LiYan on 2016/12/26.
 * app
 */
var Regular = require('regular');
var Api = require('../common/api');
var appTpl = require('./app.rgl');
var actName = 'wendao2017';
require('../common/header');
require('./rankList');
// http://hdzx.g.yy.com/babyact/rank?act=christmas2016&_=1482825675354

module.exports = Regular.extend({
  template: appTpl,
  data: {
    loadStatus: 0, // 载入状态：成功 0；载入中 1；失败 2
    rankData: null
  },
  init: function () {
    var self = this;
    var data = self.data;
    data.loadStatus = 1;
    self.$update();
    Api.getRankList(actName).then(function (res) {
      if (res.result === 1) {
        data.rankData = res.data;
        data.loadStatus = 0;
      } else {
        data.loadStatus = 2;
      }
      self.$update();
    }
    );
  }
});
