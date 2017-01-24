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
  data: {
    state: 0 // 0:非编辑中 1：编辑中
  },
  init: function () {
    var self = this;
    // 注册销毁事件
    this.$on({
      close: self.destroy
    });
    this.$inject(this.data.injectDom);
  },
  destroyThis: function () {
    this.$emit('close');
  },
  openEditTool: function () {
    var data = this.data;
    editorToolsControl.openTool();
    data.state = 1;
    this.$off('close');
  }

});
