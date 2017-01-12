/**
 * Created by LiYan on 2016/12/28.
 * header
 */
var Regular = require('regular');
var $ = require('jquery');
//var curPageName = $('body').data('page');
module.exports = Regular.extend({
    template: require('./header.rgl'),
    name: 'header',
    //data: {
    //    curPageName: curPageName
    //},
    init: function () {
        this.$inject(document.getElementById('pageBox'));
    }
    //jumpHref: function (type) {
    //    if (type != curPageName) {
    //        location.href = './' + type + '.html';
    //    }
    //}
})