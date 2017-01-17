/**
 * Created by LiYan on 2016/12/27.
 * table
 */
var Regular = require('regular');
var tableTpl = require('./table.rgl');
require('./pageItem');
module.exports = Regular.extend({
  template: tableTpl,
  name: 'tableItem',
  data: {
    tableType: null,
    dataArray: null,
    curIndex: 0
  },
  init: function () {
    var self = this;
    var data = self.data;
    var tableData = self.data.tableData;
    var dataArray = [];
    var i;
    data.tableType = tableData.type;
    for (i = 0; i < tableData.data.length; i += 10) {
      dataArray.push(tableData.data.slice(i, i + 10));
    }
    data.dataArray = dataArray;
    self.$update();
  }
});
