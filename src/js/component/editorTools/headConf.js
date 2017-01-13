/**
 * Created by LiYan on 2017/1/13.
 * headConf
 */
var Regular = require('regular');

module.exports = Regular.extend({
    template: require('./headConf.rgl'),
    name: 'headConf',
    init: function () {
        this.$inject($('#toolContainer')[0],'bottom')
    }
})