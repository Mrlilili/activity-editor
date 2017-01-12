/**
 * Created by LiYan on 2016/12/26.
 * app
 */
var Regular = require('regular');

var Api = require('../common/api');
var header = require('../common/header');
var rankList = require('./rankList');
var actName = 'wendao2017';
//http://hdzx.g.yy.com/babyact/rank?act=christmas2016&_=1482825675354

module.exports = Regular.extend({
    template: require('./app.rgl'),
    data: {
        loadStatus: 0, // 载入状态：成功 0；载入中 1；失败 2
        rankData: null
    },
    init: function () {
        var self = this;
        var _data = self.data;
        _data.loadStatus = 1;
        self.$update()
        Api.getRankList(actName).then(function (res) {
                if (res.result == 1) {
                    _data.rankData = res.data;
                    _data.loadStatus = 0;

                }else {
                    _data.loadStatus = 2;
                }
            self.$update();
            }
        )
    }
})