/**
 * Created by LiYan on 2016/12/28.
 * header
 */
var Regular = require('regular');
var $ = require('jquery');
var editorLayer = require('../editorLayer/app');
//var curPageName = $('body').data('page');
module.exports = Regular.extend({
    template: require('./header.rgl'),
    name: 'header',
    data: {
        domHeight: 1032,
        bgImgUrl: './assets/img/common/header-bg.jpg'
    },
    init: function () {
        this.$inject(document.getElementById('pageBox'));
        var editorLayerCom = null;
        $(this.$refs.outerNode).hover(function () {
            var self = this;
            editorLayerCom = new editorLayer({
                data: {
                    injectDom: self

                }
            });
        }, function () {
            editorLayerCom.destroyThis();
        });


    }
    //jumpHref: function (type) {
    //    if (type != curPageName) {
    //        location.href = './' + type + '.html';
    //    }
    //}
})