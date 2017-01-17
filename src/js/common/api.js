var dataType = 'jsonp';
var timeout = 15000;
var url = 'http://hdzx.g.yy.com/babyact/';


var request = function (opt) {
  return $.ajax({
    dataType: dataType,
    timeout: timeout,
    url: /^http/.test(opt.url) ? opt.url : url + opt.url,
    data: opt.data || null
  });
};


module.exports = {
    // 榜单数据
  getRankList: function (actName) {
    return request({
      url: 'rank',
      data: {
        act: actName
      }
    });
  }


};
