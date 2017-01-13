/**
 * Created by LiYan on 2016/12/28.
 * header
 */
var Regular = require('regular');
var $ = require('jquery');
var editorToolsControl = require('../editorTools/editorToolsControl')
//var curPageName = $('body').data('page');
module.exports = Regular.extend({
    template: require('./app.rgl'),
    name: 'editorLayer',
    //data: {

    //},
    init: function () {
        this.$inject(this.data.injectDom);
    },
    destroyThis: function () {
        this.destroy();

    },
    openEditTool: function () {
        editorToolsControl.openTool()

    }

})