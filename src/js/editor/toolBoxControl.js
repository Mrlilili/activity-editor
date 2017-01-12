/**
 * Created by LiYan on 2017/1/12.
 * toolBoxControl
 */

var Regular = require('regular');
var $ = require('jquery');
module.exports = Regular.extend({
    template: require('./toolBoxControl.rgl'),
    name:'toolBoxControl',
    init:function(){},
    changeToolBoxStatus: function () {
        var self = this;
        var _data = self.data;
        _data.toolBoxStatus = _data.toolBoxStatus == 1 ? 2 : 1;
        self.$update();
    }
})



