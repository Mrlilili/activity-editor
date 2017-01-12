活动页面接口文档
-----------

### 1. 活动排行榜

#### 接口功能

> 获取指定活动的排行榜

#### URL

> [http://hdzx.g.yy.com/babyact/rank](http://hdzx.g.yy.com/babyact/rank)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|排行榜数据|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/babyact/rank?act=winter](http://hdzx.g.yy.com/babyact/rank?act=winter)
```javascript
{
  "result": 1,
  "info": "success",
  "data": [
    {
      award_descr: "",          //排行奖励，该字段暂时没用
      display_name: "宝贝日榜"  //排行榜名字
      name: "babyMissionRank"   //排行榜id
      rank: "1"                 //顺序
      show_logo: "1"            //是否显示第一名的头像
      type: "baby",             //排行榜类型：baby:宝贝 channel:频道 player:土豪 lover:情侣
      data: [
        {
          "ranking":"1",        //排名
          "item_id":"6847704",  //yy uid
          "item_name":"\uff16\uff10\uff16\uff17\uff1a\u273f\u9ed8\u51b0\u273f\u3010\u9ed8\u6c0f\u592b\u5987\u3011",  //昵称
          "item_value":4390900, //积分
          "json_data":null,     //备用的扩展字段
          "logo":"http:\/\/downhdlogo.yy.com\/hdlogo\/640640\/509\/509\/84\/0006847704\/u6847704L9XYHyHUC2.png"  //头像
        }
      ]
    }
  ]
}
```


### 2. 推荐公会

#### 接口功能

> 获取运营在后台配置的推荐公会

#### URL

> [http://hdzx.g.yy.com/channel/getHotList](http://hdzx.g.yy.com/channel/getHotList)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|type|ture|string|推荐类型，具体值找配置这个数据的运营人员要|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|公会列表|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/channel/getHotList?type=2016NY_channel](http://hdzx.g.yy.com/channel/getHotList?type=2016NY_channel)

```javascript
{
  "result": 1,
  "info": "success",
  "data": [
    {
      "asid":"37660",       //短位频道号
      "sid":48335080,       //长位频道号
      "ssid":2552486847,    //子频道号
      "flight_ticket":"yy:\/\/pd-[sid=37660&subid=2552486847]",   //飞机票
      "rank":1,             //排序
      "extra_json":"37660", //
      "tag":"",             //标签
      "baby_uid":null,      //
      "show_popularity":0,  //
      "uid":null,           //
      "logo":"http:\/\/downhdlogo.yy.com\/applogo\/session\/60\/60\/33\/0048335080\/s483350801P5rD9rW9.jpg",  //公会logo
      "name":"\u6211\u4eec\u5c31\u662f \u4e00 \u7fa4 \u7cbe \u795e \u75c5"   //公会昵称
    }
  ]
}
```


### 3. 获取兑换奖品列表

#### 接口功能

> 获取在后台配置的兑奖奖品的列表

#### URL

> [http://hdzx.g.yy.com/exchange/poolinfo](http://hdzx.g.yy.com/exchange/poolinfo)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|奖品列表|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/exchange/poolinfo?act=midautumn2016](http://hdzx.g.yy.com/exchange/poolinfo?act=midautumn2016)

```javascript
{
  "result": 1,
  "info": "success",
  "data": [
    {
      "id":"63",                                            //
      "act_id":"55",                                        //活动id
      "award_id":"\u7f8e\u56fe\u624b\u673a",                //每个奖品的id
      "exchange_award_id":"55#\u7f8e\u56fe\u624b\u673a#1",  //奖品id
      "award_name":"\u7f8e\u56fe\u624b\u673a",              //奖品名称
      "award_display_name":"\u7f8e\u56fe\u624b\u673a*1",    //奖品显示名称
      "award_type":"1",    //奖品类型  1：实物，要填写地址信息 2：普通礼物道具 3：盖章 4：坐骑 5：实物也是结束后发，不填信息 6：其它
      "award_num":"1",                                      //奖品数量
      "total":"1",                                          //奖品份数
      "consume_id":"TID90902554#YB",                        //消耗的道具id
      "consume_num":"30000",                                //消耗的道具数量
      "consume_name":"\u6708\u997c"                         //消耗的道具名称
      "create_time":"2016-09-08 15:13:16",                  //创建时间
      "start_time":"2016-09-07 12:00:00",                   //兑奖开始时间
      "end_time":"2016-11-11 12:00:00",                     //兑奖结束时间
      "descr":null,                                         //描述
      "exchange_frequency":"1",                             //最多兑换次数
      "json_data":"",                                       //扩展字段
      "award_logo_url":"http:\/\/att.bbs.yy.com\/forum\/201609\/08\/151202wg15dztl1rd5trrr.png",  //
      "rank":"1",                                           //顺序
      "award_json_data":null,                               //
    }
  ]
}
```


### 4. 获取我的兑奖记录

#### 接口功能

> 获取我的兑奖记录

#### URL

> [http://hdzx.g.yy.com/exchange/myrecord](http://hdzx.g.yy.com/exchange/myrecord)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|
|num|false|number|获取记录的个数|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|兑奖记录列表|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/exchange/myrecord?act=midautumn2016&num=35](http://hdzx.g.yy.com/exchange/myrecord?act=midautumn2016&num=35)

```javascript
{
  "result": 1,
  "info": "success",
  "data": [
    {
      "id":"1276",                    //记录id
      "act_id":"55",                  //活动id
      "owner_uid":"50014070",         //兑换者uid
      "award_id":"GZDJ_036",          //奖品id
      "award_name":"\u5973\u795e*1",  //奖品名称
      "comment":"\u7528\u6237[50014070]\u5151\u6362[1]\u4e2a[\u5973\u795e]",  //
      "create_time":"2016-09-07 14:46:57",      //创建时间
      "last_update_time":"2016-09-07 14:46:57", //
      "status":"1",                   //
      "json_data":""                  //扩展字段
    }
  ]
}
```


### 5. 获取所有用户的兑奖记录

#### 接口功能

> 获取所有用户的兑奖记录

#### URL

> [http://hdzx.g.yy.com/exchange/recordlist](http://hdzx.g.yy.com/exchange/recordlist)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|
|num|false|number|获取记录的个数|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|兑奖记录列表|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/exchange/recordlist?act=midautumn2016&num=35](http://hdzx.g.yy.com/exchange/recordlist?act=midautumn2016&num=35)

```javascript
{
  "result": 1,
  "info": "success",
  "data": [
    {
      "id":"1276",                    //记录id
      "act_id":"55",                  //活动id
      "owner_uid":"50014070",         //兑换者uid
      "uid":"50014070",               //
      "nick":"宝贝模板-tina玉华",     //昵称
      "award_id":"GZDJ_036",          //奖品id
      "award_name":"\u5973\u795e*1",  //奖品名称
      "comment":"\u7528\u6237[50014070]\u5151\u6362[1]\u4e2a[\u5973\u795e]",  //
      "create_time":"2016-09-07 14:46:57",      //创建时间
      "last_update_time":"2016-09-07 14:46:57", //
      "status":"1",                   //
      "json_data":""                  //扩展字段
    }
  ]
}
```


### 6. 获取用户积分数

#### 接口功能

> 获取用户积分数

#### URL

> [http://hdzx.g.yy.com/exchange/myaccount](http://hdzx.g.yy.com/exchange/myaccount)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|object|积分总数及余额|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/exchange/recordlist?act=midautumn2016](http://hdzx.g.yy.com/exchange/myaccount?act=myaccount)

```javascript
{
  "result": 1,
  "info": "success",
  "data": {
    "balance":0,  //余额
    "point":200   //积分总数
  }
}
```



### 7. 兑奖

#### 接口功能

> 兑奖

#### URL

> [http://hdzx.g.yy.com/exchange/doexchange](http://hdzx.g.yy.com/exchange/doexchange)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|
|exchange_award_id|ture|string|奖品id|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|object||
|insert_id|number|此兑奖记录id|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/exchange/recordlist?act=midautumn2016&exchange_award_id=55#RED_HEART#99](http://hdzx.g.yy.com/exchange/myaccount?act=myaccount&exchange_award_id=55#RED_HEART#99)

```javascript
{
  "result": 1,
  "info": "success",
  "data": {},
  "insert_id": 123,  //此兑奖记录id
}
```


### 8. 填写兑奖后的收货地址

#### 接口功能

> 兑换实物奖品，填写中奖后的收货地址 (此接口好久没用了，使用时要跟佳佳再确认一下参数)

#### URL

> [http://hdzx.g.yy.com/exchange/update](http://hdzx.g.yy.com/exchange/update)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|name|ture|string|收件人名字|
|tel|ture|number|手机号|
|address|ture|string|地址|
|post|ture|number|邮编|
|yyno|ture|number|yy号|
|insert_id|ture|number|记录id|
|hdname|ture|string|活动名称|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|积分总数及余额|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/exchange/update?name=aaa&tel=12345678901&addressaaa&post=123456&insert_id=123&hdname=midautumn2016](http://hdzx.g.yy.com/exchange/update?name=aaa&tel=12345678901&addressaaa&post=123456&insert_id=123&hdname=midautumn2016)

```javascript
{
  "result": 1,
  "info": "success",
  "data": {}
}
```


### 9. 获取抽奖奖品列表

#### 接口功能

> 获取在后台配置的抽奖奖品的列表

#### URL

> [http://hdzx.g.yy.com/lottery/awardinfo](http://hdzx.g.yy.com/lottery/awardinfo)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|奖品列表|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/lottery/awardinfo?act=privilege201609](http://hdzx.g.yy.com/lottery/awardinfo?act=privilege201609)

```javascript
{
  "result": 1,
  "info": "success",
  "data": {
    "award_list": [
      {
        award_id:"90902555#DYX"     //奖品id
        award_name:"蓝心*3"         //奖品名称
        award_type:"3"              //奖品类型 1:实物奖品 2:YY平台虚拟资源 3:道具 4:点卡点券之类
        logo_normal:"http://att.bbs.yy.com/forum/201609/08/184346s785exx80e0xuw2x.png"  //奖品图片
        logo_select:"http://att.bbs.yy.com/forum/201609/08/184346qvvwwxrfdg6woptm.png"  //高亮时的奖品图片
        tips:""                     //
        url:""                      //
      }
    ]
  }
}
```



### 10. 获取抽奖次数

#### 接口功能

> 获取抽奖次数

#### URL

> [http://hdzx.g.yy.com/lottery/chance](http://hdzx.g.yy.com/lottery/chance)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|数据|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/lottery/chance?act=privilege201609](http://hdzx.g.yy.com/lottery/chance?act=privilege201609)

```javascript
{
  "result": 1,
  "info": "success",
  "data": {
    "lottery_chance": 0
  }
}
```


### 11. 抽奖

#### 接口功能

> 抽奖

#### URL

> [http://hdzx.g.yy.com/lottery/draw](http://hdzx.g.yy.com/lottery/draw)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|奖品列表|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/lottery/draw?act=privilege201609](http://hdzx.g.yy.com/lottery/draw?act=privilege201609)

```javascript
{
  "result": 1,
  "info": "success",
  "data": {
    "award_id":"90902532#YYH7",          //奖品id
    "award_lott_id":"2015080600035302",  //记录id
    "award_name":"\u6587\u5316\u886b",   //奖品名字
    "award_type":1                       //奖品类型
  }
}
```


### 12. 获取我的抽奖中奖记录

#### 接口功能

> 获取我的抽奖中奖记录

#### URL

> [http://hdzx.g.yy.com/lottery/myrecords](http://hdzx.g.yy.com/lottery/myrecords)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|抽奖中奖记录列表|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/lottery/myrecords?act=privilege201609](http://hdzx.g.yy.com/lottery/myrecords?act=privilege201609)

```javascript
{
  "result": 1,
  "info": "success",
  "data": [
    {
      "awardName":"\u5973\u795e*1",  //奖品名称
      "create_time":"2016-09-07 14:46:57",      //创建时间
    }
  ]
}
```


### 13. 获取所有用户的抽奖中奖记录

#### 接口功能

> 获取所有用户的抽奖中奖记录

#### URL

> [http://hdzx.g.yy.com/lottery/records](http://hdzx.g.yy.com/lottery/records)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|array|抽奖中奖记录列表|

#### 接口示例

> 地址：[http://hdzx.g.yy.com/lottery/records?act=privilege201609](http://hdzx.g.yy.com/lottery/records?act=privilege201609)

```javascript
{
  "result": 1,
  "info": "success",
  "data": [
    {
      "nick": "aaa",                 //用户昵称
      "awardName":"\u5973\u795e*1",  //奖品名称
      "create_time":"2016-09-07 14:46:57",      //创建时间
    }
  ]
}
```


### 14. 填写抽奖后的收货地址

#### 接口功能

> 填写抽奖中奖后的收货地址

#### URL

> [http://hdzx.g.yy.com/lottery/submituserinfo](http://hdzx.g.yy.com/lottery/submituserinfo)

#### 支持格式

> JSON & JSONP

#### HTTP请求方式

> GET

#### 请求参数

|参数|必选|类型|说明|
|:----- |:-------|:-----|----- |
|act|ture|string|活动名称|
|name|ture|string|收件人名字|
|tel|ture|number|手机号|
|address|ture|string|地址|
|post|ture|number|邮编|
|award_id|ture|string|奖品id|
|award_lott_id|ture|number|记录id|

#### 返回字段

|返回字段|字段类型|说明 |
|:----- |:------|:----------------------------- |
|result|int|返回结果状态。1：请求成功；2：未登录；其它：请求失败。|
|info|string|提示信息|
|data|object|数据| 

#### 接口示例

> 地址：[http://hdzx.g.yy.com/lottery/submituserinfo?act=privilege201609&name=aaa&tel=12345678901&addressaaa&post=123456&award_lott_id=123&award_id=aaa](http://hdzx.g.yy.com/lottery/submituserinfo?act=privilege201609&name=aaa&tel=12345678901&addressaaa&post=123456&award_lott_id=123&award_id=aaa)

```javascript
{
  "result": 1,
  "info": "success",
  "data": {}
}
```