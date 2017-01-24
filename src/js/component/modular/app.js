/**
 * Created by LiYan on 2016/12/28.
 * header
 */
var Regular = require('regular');
var $ = require('jquery');
var EditorLayer = require('../editorLayer/app');
var headerTpl = require('./app.rgl');
// var curPageName = $('body').data('page');
module.exports = Regular.extend({
  template: headerTpl,
  // name: 'modular',
  data: {
    domHeight: 1032,
    bgImgUrl: './assets/img/common/header-bg.jpg'
  },
  init: function () {
    var EditorLayerCom = null;
    var moduleDom = this.$refs.outerNode;
    this.$inject(document.getElementById('pageBox'));
    $(moduleDom).hover(function () {
      var self = this;
      if ($(moduleDom).children('#editorLayer').length === 0) {
        EditorLayerCom = new EditorLayer({
          data: {
            injectDom: self
          }
        });
      }
    }, function () {
      EditorLayerCom.destroyThis();
    });
  }
});
