/**
 * Created by LiYan on 2016/12/28.
 * header
 */
var Regular = require('regular');
var $ = require('jquery');
var EditorLayer = require('../editorLayer/app');
var headerTpl = require('./header.rgl');
// var curPageName = $('body').data('page');
module.exports = Regular.extend({
  template: headerTpl,
  name: 'header',
  data: {
    domHeight: 1032,
    bgImgUrl: './assets/img/common/header-bg.jpg'
  },
  init: function () {
    var EditorLayerCom = null;
    this.$inject(document.getElementById('pageBox'));
    $(this.$refs.outerNode).hover(function () {
      var self = this;
      EditorLayerCom = new EditorLayer({
        data: {
          injectDom: self

        }
      });
    }, function () {
      EditorLayerCom.destroyThis();
    });
  }
});
