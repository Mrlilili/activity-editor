var Regular = require('regular');
var ModalAlert = require('./modal.alert.rgl');

module.exports = Regular.extend({

  template: ModalAlert,

  config: function () {

  },

  data: {},

  init: function () {
    this.$inject(document.getElementById('pageBox'));
  }


});
