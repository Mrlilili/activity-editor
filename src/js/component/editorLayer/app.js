/**
 * Created by LiYan on 2016/12/28.
 * header
 */
var Regular = require('regular');
var appTpl = require('./app.rgl');
var editorToolsControl = require('../editorTools/editorToolsControl');

module.exports = Regular.extend({
  template: appTpl,
  name: 'editorLayer',
  init: function () {
    this.$inject(this.data.injectDom);
  },
  destroyThis: function () {
    this.destroy();
  },
  openEditTool: function () {
    editorToolsControl.openTool();
  }

});
