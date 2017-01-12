/**
 * Created by LiYan on 2016/12/27.
 * pageItem
 */
var Regular = require('regular');


module.exports = Regular.extend({
    template: require('./pageItem.rgl'),
    name: 'pageItem',
    data: {},
    init: function () {
        var self = this;
    },
    setCurIndex: function (i) {
        var self = this;
        self.data.curIndex = i;
    }
})