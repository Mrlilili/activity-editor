var Regular = require('regular');
//var Modal = require('./modal');


module.exports = Regular.extend({

    template: require('./modal.alert.rgl'),

    config: function (data) {

    },

    data: {},

    init: function () {
        this.$inject(document.getElementById('pageBox'));

    },


});