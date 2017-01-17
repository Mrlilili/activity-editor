var Regular = require('regular');
var modalTpl = require('./modal.rgl');
// var dom = Regular.dom;

// var _ = require('common/helper');

module.exports = Regular.extend({

  name: 'modal',

  template: modalTpl,

  config: function () {

  },

  init: function () {
    this.$inject(document.getElementById('pageBox'));
  }

});
