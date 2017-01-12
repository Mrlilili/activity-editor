/**
 * Created by LiYan on 2016/12/26.
 * app
 */
var Regular = require('regular');
var $ = require('jquery');
var Header = require('../component/header/header');

module.exports = Regular.extend({
    template: require('./toolBox.rgl'),
    data: {
        headerStatus: 0
    },
    name: 'toolBox',
    init: function () {
        var self = this;
        setTimeout(function(){
            self.addHeader();
        },.5)

    },
    addHeader: function () {
        var heder = new Header();
        this.data.headerStatus = 1;
        this.$update();
    }
})


