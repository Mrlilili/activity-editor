/**
 * Created by LiYan on 2016/12/27.
 * table
 */
var Regular = require('regular');
var pageItem = require('./pageItem');

module.exports = Regular.extend({
    template: require('./table.rgl'),
    name: 'tableItem',
    data: {
        tableType: null,
        dataArray: null,
        curIndex: 0
    },
    init: function () {
        var self = this;
        var _data = self.data;
        var _oData = self.data.tableData;
        var _dataArray = [];
        _data.tableType = _oData.type;
        for (var i = 0; i < _oData.data.length; i += 10) {
            _dataArray.push(_oData.data.slice(i, i + 10))
        }
        _data.dataArray = _dataArray;
        self.$update();
    }
})