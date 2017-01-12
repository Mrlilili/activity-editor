var Regular = require('regular');
var $ = require('jquery');

var dom = Regular.dom;

//var _ = require('common/helper');

module.exports = Regular.extend({

  name: 'modal',

  template: require('./modal.rgl'),

  config: function (data) {

  },

  init: function () {


    this.$inject(document.getElementById('pageBox'));


  }

});