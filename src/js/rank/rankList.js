/**
 * Created by LiYan on 2016/12/27.
 * rankList
 */
var Regular = require('regular');
var bestItem = require('./bestItem');
var tableItem = require('./table');
var pageItem = require('./pageItem');
var testData = {
    "result": 1,
    "info": "success",
    "data": [
        {
            "name": "babyMissionRank",
            "display_name": "宝贝日榜",
            "award_descr": "",
            "type": "baby",
            "show_logo": "1",
            "rank": "1",
            "data": [
                {
                    "ranking": "1",
                    "item_id": "66305483",
                    "item_name": "611微儿：祝祖师爷生日快乐！",
                    "item_value": 611750,
                    "json_data": null,
                    "logo": "http://downhdlogo.yy.com/hdlogo/640640/637/637/30/0066305483/u66305483cPz1WI7Si.png"
                },
                {
                    "ranking": "2",
                    "item_id": "394987451",
                    "item_name": "6829  林　夕。",
                    "item_value": 595746,
                    "json_data": null
                },
                {
                    "ranking": "3",
                    "item_id": "1611389725",
                    "item_name": "６０６７：✿茜  宝✿【无道冠名】",
                    "item_value": 369620,
                    "json_data": null
                },
                {
                    "ranking": "4",
                    "item_id": "1034686514",
                    "item_name": "６８７９ - 樂こ樂๑•只想好好做自己",
                    "item_value": 333270,
                    "json_data": null
                },
                {
                    "ranking": "5",
                    "item_id": "851554415",
                    "item_name": "６１１°✿等  等 杭州 ‹求冠名ღ›",
                    "item_value": 237222,
                    "json_data": null
                },
                {
                    "ranking": "6",
                    "item_id": "1549863162",
                    "item_name": "９０９✦.艾  薇ゝ湖北「战为一厅」",
                    "item_value": 223870,
                    "json_data": null
                },
                {
                    "ranking": "7",
                    "item_id": "139277696",
                    "item_name": "６１１°✿绾  绾 天堂 ‹求冠名ღ›",
                    "item_value": 173482,
                    "json_data": null
                },
                {
                    "ranking": "8",
                    "item_id": "1584367923",
                    "item_name": "６１１°✿今  熙 月球 ‹求冠名ღ›",
                    "item_value": 154260,
                    "json_data": null
                },
                {
                    "ranking": "9",
                    "item_id": "1495493936",
                    "item_name": "９０９✦.小玉儿ゝ长沙「不忘初心」",
                    "item_value": 153182,
                    "json_data": null
                },
                {
                    "ranking": "10",
                    "item_id": "114035499",
                    "item_name": "６８７９ - 尐抹茶。返现招接待",
                    "item_value": 145120,
                    "json_data": null
                },
                {
                    "ranking": "11",
                    "item_id": "3463457",
                    "item_name": "９０９✦.糖 宝ゝ陕西「战为一厅」",
                    "item_value": 137710,
                    "json_data": null
                },
                {
                    "ranking": "12",
                    "item_id": "1149471243",
                    "item_name": "６８７９ - 虎  玖๑•小丫嘛小玖玖",
                    "item_value": 127110,
                    "json_data": null
                },
                {
                    "ranking": "13",
                    "item_id": "331134523",
                    "item_name": "小甜甜",
                    "item_value": 108590,
                    "json_data": null
                },
                {
                    "ranking": "14",
                    "item_id": "1187445167",
                    "item_name": "李天邪：招收优质主播+",
                    "item_value": 104990,
                    "json_data": null
                },
                {
                    "ranking": "15",
                    "item_id": "1489333327",
                    "item_name": "611啾啾：祝祖师爷生日快乐！",
                    "item_value": 98680,
                    "json_data": null
                },
                {
                    "ranking": "16",
                    "item_id": "1639243564",
                    "item_name": "5605－精灵欧尼✿ぐ邂逅浪漫",
                    "item_value": 82970,
                    "json_data": null
                },
                {
                    "ranking": "17",
                    "item_id": "1614305877",
                    "item_name": "１０２°✿欣　欣ゝ山东「求冠名」三厅",
                    "item_value": 78572,
                    "json_data": null
                },
                {
                    "ranking": "18",
                    "item_id": "887729795",
                    "item_name": "9211ˇ兔兔②  我们相爱吧",
                    "item_value": 78370,
                    "json_data": null
                },
                {
                    "ranking": "19",
                    "item_id": "1042612580",
                    "item_name": "9211ˇ优乐美②：28号 活动求支持♥",
                    "item_value": 75310,
                    "json_data": null
                },
                {
                    "ranking": "20",
                    "item_id": "126911491",
                    "item_name": "夏小彤：约战２９号５５６４活动约不约?",
                    "item_value": 74420,
                    "json_data": null
                },
                {
                    "ranking": "21",
                    "item_id": "1325675673",
                    "item_name": "６１１°✿初  心 江苏‹求冠名ღ›",
                    "item_value": 69440,
                    "json_data": null
                },
                {
                    "ranking": "22",
                    "item_id": "1494596456",
                    "item_name": "９０９ 穆桂英ゝ28号晚上厅位战求支持",
                    "item_value": 68836,
                    "json_data": null
                },
                {
                    "ranking": "23",
                    "item_id": "1656766257",
                    "item_name": "5605－♥小米✿邂逅浪漫",
                    "item_value": 64900,
                    "json_data": null
                },
                {
                    "ranking": "24",
                    "item_id": "584744580",
                    "item_name": "\u0001６８７９ - 洛\u0001依๑•柔弱无骨依",
                    "item_value": 62100,
                    "json_data": null
                },
                {
                    "ranking": "25",
                    "item_id": "206927607",
                    "item_name": "\u0001✿5781＇若   雪 ღ宁缺毋滥",
                    "item_value": 58046,
                    "json_data": null
                },
                {
                    "ranking": "26",
                    "item_id": "68584426",
                    "item_name": "６８７９ - 尐七色๑•风轻云淡",
                    "item_value": 56730,
                    "json_data": null
                },
                {
                    "ranking": "27",
                    "item_id": "1487691275",
                    "item_name": "９０９✦.水  凌ゝ山东「谁来冠名」",
                    "item_value": 53680,
                    "json_data": null
                },
                {
                    "ranking": "28",
                    "item_id": "1936363",
                    "item_name": "9211ˇ沈朵：生命在于闹腾",
                    "item_value": 53650,
                    "json_data": null
                },
                {
                    "ranking": "29",
                    "item_id": "211901349",
                    "item_name": "９2ι⒈ˇｋBoss②：返点招收接待ＭＭ",
                    "item_value": 53630,
                    "json_data": null
                },
                {
                    "ranking": "30",
                    "item_id": "909268448",
                    "item_name": "\u0001６８７９ - 宁❤心๑•心若向阳~！",
                    "item_value": 52684,
                    "json_data": null
                },
                {
                    "ranking": "31",
                    "item_id": "1070846464",
                    "item_name": "4806-卿　玖๓卖身过任务i❤",
                    "item_value": 52220,
                    "json_data": null
                },
                {
                    "ranking": "32",
                    "item_id": "305803596",
                    "item_name": "１４１１-艾情情✿招收接待",
                    "item_value": 50680,
                    "json_data": null
                },
                {
                    "ranking": "33",
                    "item_id": "1631541235",
                    "item_name": "８０２-杨晓鱼ღ成都๑๑我爱花花❀",
                    "item_value": 46660,
                    "json_data": null
                },
                {
                    "ranking": "34",
                    "item_id": "1587439589",
                    "item_name": "６１１°✿夏  夏 66  ‹梦冠名ღ›",
                    "item_value": 44750,
                    "json_data": null
                },
                {
                    "ranking": "35",
                    "item_id": "1592006279",
                    "item_name": "偏执",
                    "item_value": 41420,
                    "json_data": null
                },
                {
                    "ranking": "36",
                    "item_id": "198998466",
                    "item_name": "✦３８０３の小逗逗ღ嗯哼.~新宝求罩",
                    "item_value": 40790,
                    "json_data": null
                },
                {
                    "ranking": "37",
                    "item_id": "1615023076",
                    "item_name": "8 6 7°☀安妮☀",
                    "item_value": 39630,
                    "json_data": null
                },
                {
                    "ranking": "38",
                    "item_id": "2418773",
                    "item_name": "\u0001８ooo-小太阳ᖭི༏ᖫ",
                    "item_value": 37840,
                    "json_data": null
                },
                {
                    "ranking": "39",
                    "item_id": "1606433020",
                    "item_name": "８０２-呆   蓉ღ浙江๑๑秘密女神",
                    "item_value": 37386,
                    "json_data": null
                },
                {
                    "ranking": "40",
                    "item_id": "251755401",
                    "item_name": "６８７９ - 暖暖暖๑•只收圣诞礼物",
                    "item_value": 36940,
                    "json_data": null
                },
                {
                    "ranking": "41",
                    "item_id": "755179908",
                    "item_name": "６８７９ - 哦　№๑•球横幅冠名",
                    "item_value": 36350,
                    "json_data": null
                },
                {
                    "ranking": "42",
                    "item_id": "1229515247",
                    "item_name": "7376✪安  娜-成都‹求冠名ღ›",
                    "item_value": 36090,
                    "json_data": null
                },
                {
                    "ranking": "43",
                    "item_id": "1628868010",
                    "item_name": "９０９✦.X  曼ゝ广东「战为一厅」",
                    "item_value": 36040,
                    "json_data": null
                },
                {
                    "ranking": "44",
                    "item_id": "307959760",
                    "item_name": "８ooo-周云云ᖭི༏ᖫ风里雨里感谢有你",
                    "item_value": 35930,
                    "json_data": null
                },
                {
                    "ranking": "45",
                    "item_id": "619773081",
                    "item_name": "９０９✦.婉 儿ゝ广东「战为一厅」",
                    "item_value": 35430,
                    "json_data": null
                },
                {
                    "ranking": "46",
                    "item_id": "85733728",
                    "item_name": "丫丫",
                    "item_value": 35090,
                    "json_data": null
                },
                {
                    "ranking": "47",
                    "item_id": "88639291",
                    "item_name": "８ooo-雨雨雨ᖭི༏ᖫ风里雨里感谢有你",
                    "item_value": 35070,
                    "json_data": null
                },
                {
                    "ranking": "48",
                    "item_id": "72971041",
                    "item_name": "4806-淡淡淡๓ 不是缘就是劫✰.",
                    "item_value": 34840,
                    "json_data": null
                },
                {
                    "ranking": "49",
                    "item_id": "1513787253",
                    "item_name": "８０２-森宝宝ღ福建๑๑开心就好❀",
                    "item_value": 34620,
                    "json_data": null
                },
                {
                    "ranking": "50",
                    "item_id": "1596464102",
                    "item_name": "6062阿言:谁会真心守护我",
                    "item_value": 32820,
                    "json_data": null
                },
                {
                    "ranking": "51",
                    "item_id": "1596381719",
                    "item_name": "６０６７：✿千  寻✿【求 冠 名】",
                    "item_value": 32400,
                    "json_data": null
                },
                {
                    "ranking": "52",
                    "item_id": "159069756",
                    "item_name": "5605๑๑&amp;hearts;芸叶",
                    "item_value": 31790,
                    "json_data": null
                },
                {
                    "ranking": "53",
                    "item_id": "826073687",
                    "item_name": "爱笑ლ等风来等你来",
                    "item_value": 31360,
                    "json_data": null
                },
                {
                    "ranking": "54",
                    "item_id": "1280866391",
                    "item_name": "６１１°✿欣  欣  苏州‹求冠名ღ›",
                    "item_value": 30960,
                    "json_data": null
                },
                {
                    "ranking": "55",
                    "item_id": "1617303110",
                    "item_name": "８０２-样   样๑๑河南๑๑天涯海角",
                    "item_value": 30770,
                    "json_data": null
                },
                {
                    "ranking": "56",
                    "item_id": "1611671543",
                    "item_name": "611莉娜：祝祖师爷生日快乐！",
                    "item_value": 30262,
                    "json_data": null
                },
                {
                    "ranking": "57",
                    "item_id": "1486599808",
                    "item_name": "4806-姗　姗๓ 1999圣诞礼盒卡红",
                    "item_value": 29460,
                    "json_data": null
                },
                {
                    "ranking": "58",
                    "item_id": "1614351935",
                    "item_name": "淼淼",
                    "item_value": 29186,
                    "json_data": null
                },
                {
                    "ranking": "59",
                    "item_id": "133890870",
                    "item_name": "６１１✿彤  彤 广西 （求冠名）",
                    "item_value": 29100,
                    "json_data": null
                },
                {
                    "ranking": "60",
                    "item_id": "924851831",
                    "item_name": "６１１✿可爱纯 安徽 找奶爸",
                    "item_value": 28350,
                    "json_data": null
                },
                {
                    "ranking": "61",
                    "item_id": "1594115674",
                    "item_name": "6  1 1`✿小瑜：巴黎”‹求冠名ღ",
                    "item_value": 28220,
                    "json_data": null
                },
                {
                    "ranking": "62",
                    "item_id": "1624620636",
                    "item_name": "4806-蜜　蜜๓ 1999圣诞礼盒卡红",
                    "item_value": 27740,
                    "json_data": null
                },
                {
                    "ranking": "63",
                    "item_id": "1531579256",
                    "item_name": "６１１°✿初  音  等风 ‹也等你›",
                    "item_value": 27080,
                    "json_data": null
                },
                {
                    "ranking": "64",
                    "item_id": "141114823",
                    "item_name": "9211ˇ蓝朵✿②：欧巴我们相爱吧",
                    "item_value": 27076,
                    "json_data": null
                },
                {
                    "ranking": "65",
                    "item_id": "849405707",
                    "item_name": "8 6 7✿沐子✿我就是我~",
                    "item_value": 26800,
                    "json_data": null
                },
                {
                    "ranking": "66",
                    "item_id": "533675648",
                    "item_name": "５６８６-- 安  然¡懂与陪伴就好",
                    "item_value": 26750,
                    "json_data": null
                },
                {
                    "ranking": "67",
                    "item_id": "614518314",
                    "item_name": "8000-涵宝宝   有人疼才显得多么出众!",
                    "item_value": 25600,
                    "json_data": null
                },
                {
                    "ranking": "68",
                    "item_id": "1679842829",
                    "item_name": "4806-六　月๓ 新人请多关照哟！！！",
                    "item_value": 25300,
                    "json_data": null
                },
                {
                    "ranking": "69",
                    "item_id": "1374743021",
                    "item_name": "８ooo-诱 诱う香菇 抱抱我好么",
                    "item_value": 24504,
                    "json_data": null
                },
                {
                    "ranking": "70",
                    "item_id": "336689950",
                    "item_name": "8000-小萌袖",
                    "item_value": 24400,
                    "json_data": null
                },
                {
                    "ranking": "71",
                    "item_id": "1497326227",
                    "item_name": "６１１°✿奶  茶 银河 ‹求冠名ღ›",
                    "item_value": 24130,
                    "json_data": null
                },
                {
                    "ranking": "72",
                    "item_id": "1439767402",
                    "item_name": "６８７９ - 妍　汐๑•华天哥冠名呀",
                    "item_value": 23310,
                    "json_data": null
                },
                {
                    "ranking": "73",
                    "item_id": "1554109277",
                    "item_name": "９０９ 叶小镁ゝ28号晚上厅位战求支持",
                    "item_value": 22760,
                    "json_data": null
                },
                {
                    "ranking": "74",
                    "item_id": "1573679784",
                    "item_name": "7376✪洋 洋-成都 求包养 求守护",
                    "item_value": 22570,
                    "json_data": null
                },
                {
                    "ranking": "75",
                    "item_id": "774787376",
                    "item_name": "饭饭；与世无争",
                    "item_value": 21770,
                    "json_data": null
                },
                {
                    "ranking": "76",
                    "item_id": "356012555",
                    "item_name": "✿5781＇乖小宝ღ",
                    "item_value": 21680,
                    "json_data": null
                },
                {
                    "ranking": "77",
                    "item_id": "1666826171",
                    "item_name": "６１１°✿顾萌  武汉‹求冠名›",
                    "item_value": 21470,
                    "json_data": null
                },
                {
                    "ranking": "78",
                    "item_id": "1730203",
                    "item_name": "５６８６-- 幼  可¡感谢一路有你",
                    "item_value": 20810,
                    "json_data": null
                },
                {
                    "ranking": "79",
                    "item_id": "1548638454",
                    "item_name": "９０９✦. 晴宝宝ゝ成都【战为二厅】",
                    "item_value": 20800,
                    "json_data": null
                },
                {
                    "ranking": "80",
                    "item_id": "221324267",
                    "item_name": "５１２０＂　楽楽：由语气独家冠名",
                    "item_value": 20520,
                    "json_data": null
                },
                {
                    "ranking": "81",
                    "item_id": "1614633661",
                    "item_name": "美美",
                    "item_value": 19592,
                    "json_data": null
                },
                {
                    "ranking": "82",
                    "item_id": "6093704",
                    "item_name": "\u0001６８７９ - Ｃat",
                    "item_value": 19420,
                    "json_data": null
                },
                {
                    "ranking": "83",
                    "item_id": "1391638029",
                    "item_name": "611梦迪：感谢麟爸力挺3厅！",
                    "item_value": 19360,
                    "json_data": null
                },
                {
                    "ranking": "84",
                    "item_id": "409695916",
                    "item_name": "９０９✦.乔  妹ゝ杭州「求冠名啊」",
                    "item_value": 19080,
                    "json_data": null
                },
                {
                    "ranking": "85",
                    "item_id": "1003398045",
                    "item_name": "921⒈ˇ妖酒酒②：欧巴.我们相爱吧",
                    "item_value": 18806,
                    "json_data": null
                },
                {
                    "ranking": "86",
                    "item_id": "644112979",
                    "item_name": "\u0001\u0001 \u0001\u0001\u0001๑ˊ三岁訫;ۣว",
                    "item_value": 17682,
                    "json_data": null
                },
                {
                    "ranking": "87",
                    "item_id": "1675417210",
                    "item_name": "６１１°✿君  君 宁 波 ‹求冠名›",
                    "item_value": 17500,
                    "json_data": null
                },
                {
                    "ranking": "88",
                    "item_id": "177806092",
                    "item_name": "\u0001８ooo-悅   悅ღ26号活动求支持",
                    "item_value": 17420,
                    "json_data": null
                },
                {
                    "ranking": "89",
                    "item_id": "19848914",
                    "item_name": "７１００７尐呆宝：⒈嗰朲安静的做自己",
                    "item_value": 17410,
                    "json_data": null
                },
                {
                    "ranking": "90",
                    "item_id": "633443415",
                    "item_name": "9211ˇ暖心②：欧巴我们相爱吧",
                    "item_value": 17184,
                    "json_data": null
                },
                {
                    "ranking": "91",
                    "item_id": "307430736",
                    "item_name": "９６４２-雪姐✿新货求宠",
                    "item_value": 17140,
                    "json_data": null
                },
                {
                    "ranking": "92",
                    "item_id": "146664414",
                    "item_name": "9211ˇ筱梦①：欧巴•我们相爱吧♥",
                    "item_value": 16940,
                    "json_data": null
                },
                {
                    "ranking": "93",
                    "item_id": "222569812",
                    "item_name": "９０９✦.贝  贝ゝ东北「没钱也宠你",
                    "item_value": 16886,
                    "json_data": null
                },
                {
                    "ranking": "94",
                    "item_id": "1548973112",
                    "item_name": "611西西：祝祖师爷生日快乐！",
                    "item_value": 16680,
                    "json_data": null
                },
                {
                    "ranking": "95",
                    "item_id": "62655051",
                    "item_name": "【唯】  艾雪 （求守护我）",
                    "item_value": 16504,
                    "json_data": null
                },
                {
                    "ranking": "96",
                    "item_id": "619583042",
                    "item_name": "⒌１⒊６ぐ 甜  甜❀非凡非凡",
                    "item_value": 16310,
                    "json_data": null
                },
                {
                    "ranking": "97",
                    "item_id": "502881143",
                    "item_name": "\u0001５５６４✦圆圆☣",
                    "item_value": 16264,
                    "json_data": null
                },
                {
                    "ranking": "98",
                    "item_id": "1062033334",
                    "item_name": "611陈楚楚：祖师爷生日快乐！",
                    "item_value": 16160,
                    "json_data": null
                },
                {
                    "ranking": "99",
                    "item_id": "646067556",
                    "item_name": "２5８2-小微恙ღ如不相见，便不相恋✰",
                    "item_value": 15850,
                    "json_data": null
                },
                {
                    "ranking": "100",
                    "item_id": "349921136",
                    "item_name": "初  心",
                    "item_value": 15720,
                    "json_data": null
                }
            ]
        },
        {
            "name": "babyRank_1",
            "display_name": "宝贝誓榜",
            "award_descr": "",
            "type": "baby",
            "show_logo": "1",
            "rank": "2",
            "data": [
                {
                    "ranking": "1",
                    "item_id": "1548973112",
                    "item_name": "611西西：祝祖师爷生日快乐！",
                    "item_value": 9530540,
                    "json_data": null,
                    "logo": "http://hdzx.g.yy.com/images/user.jpg"
                },
                {
                    "ranking": "2",
                    "item_id": "1611389725",
                    "item_name": "６０６７：✿茜  宝✿【无道冠名】",
                    "item_value": 6694670,
                    "json_data": null
                },
                {
                    "ranking": "3",
                    "item_id": "66305483",
                    "item_name": "611微儿：祝祖师爷生日快乐！",
                    "item_value": 5883670,
                    "json_data": null
                },
                {
                    "ranking": "4",
                    "item_id": "1549863162",
                    "item_name": "９０９✦.艾  薇ゝ湖北「战为一厅」",
                    "item_value": 3549946,
                    "json_data": null
                },
                {
                    "ranking": "5",
                    "item_id": "356520365",
                    "item_name": "冷爺_ 6829",
                    "item_value": 1889062,
                    "json_data": null
                },
                {
                    "ranking": "6",
                    "item_id": "1648386482",
                    "item_name": "６１１°✿千  寻 合肥 ‹伴侣ღ›",
                    "item_value": 1743784,
                    "json_data": null
                },
                {
                    "ranking": "7",
                    "item_id": "67406834",
                    "item_name": "８０２-热  忱ღ江南๑๑浪漫樱花❀",
                    "item_value": 1606278,
                    "json_data": null
                },
                {
                    "ranking": "8",
                    "item_id": "3463457",
                    "item_name": "９０９✦.糖 宝ゝ陕西「战为一厅」",
                    "item_value": 1522098,
                    "json_data": null
                },
                {
                    "ranking": "9",
                    "item_id": "1229515247",
                    "item_name": "7376✪安  娜-成都‹求冠名ღ›",
                    "item_value": 1420112,
                    "json_data": null
                },
                {
                    "ranking": "10",
                    "item_id": "1497764489",
                    "item_name": "611绮梦：祝枫大腿生日快乐！",
                    "item_value": 1255700,
                    "json_data": null
                },
                {
                    "ranking": "11",
                    "item_id": "1437000159",
                    "item_name": "９０９✦.甜　甜ゝ重庆「战为一厅」",
                    "item_value": 1243422,
                    "json_data": null
                },
                {
                    "ranking": "12",
                    "item_id": "1615023076",
                    "item_name": "8 6 7°☀安妮☀",
                    "item_value": 1219546,
                    "json_data": null
                },
                {
                    "ranking": "13",
                    "item_id": "748127062",
                    "item_name": "９０９✦.玉兔ゝ山东「战为虞家」",
                    "item_value": 1213644,
                    "json_data": null
                },
                {
                    "ranking": "14",
                    "item_id": "159069756",
                    "item_name": "5605๑๑&amp;hearts;芸叶",
                    "item_value": 1173042,
                    "json_data": null
                },
                {
                    "ranking": "15",
                    "item_id": "6847704",
                    "item_name": "６０６７：✿默  冰✿【默克冠名】",
                    "item_value": 1171390,
                    "json_data": null
                },
                {
                    "ranking": "16",
                    "item_id": "1612485551",
                    "item_name": "611水蜜桃：祝祖师爷生日快乐！",
                    "item_value": 985928,
                    "json_data": null
                },
                {
                    "ranking": "17",
                    "item_id": "305622226",
                    "item_name": "611唇妹：祝祖师爷生日快乐！",
                    "item_value": 937004,
                    "json_data": null
                },
                {
                    "ranking": "18",
                    "item_id": "894901195",
                    "item_name": "611九九：祝祖师爷生日快乐！",
                    "item_value": 903624,
                    "json_data": null
                },
                {
                    "ranking": "19",
                    "item_id": "1584367923",
                    "item_name": "６１１°✿今  熙 月球 ‹求冠名ღ›",
                    "item_value": 888212,
                    "json_data": null
                },
                {
                    "ranking": "20",
                    "item_id": "1639243564",
                    "item_name": "5605－精灵欧尼✿ぐ邂逅浪漫",
                    "item_value": 878224,
                    "json_data": null
                },
                {
                    "ranking": "21",
                    "item_id": "1529571162",
                    "item_name": "９０９✦.巴　拉ゝ武汉",
                    "item_value": 839142,
                    "json_data": null
                },
                {
                    "ranking": "22",
                    "item_id": "1529756261",
                    "item_name": "８０２-NONOღ澳门๑๑ 我爱花花",
                    "item_value": 813044,
                    "json_data": null
                },
                {
                    "ranking": "23",
                    "item_id": "1004545922",
                    "item_name": "兔宝：感谢我麟一路有你！",
                    "item_value": 798666,
                    "json_data": null
                },
                {
                    "ranking": "24",
                    "item_id": "1383010926",
                    "item_name": "６１１✿美  轩  山东 （求冠名ღ）",
                    "item_value": 791580,
                    "json_data": null
                },
                {
                    "ranking": "25",
                    "item_id": "67507851",
                    "item_name": "６１１✿九  尾  山东 （求冠名ღ）",
                    "item_value": 771044,
                    "json_data": null
                },
                {
                    "ranking": "26",
                    "item_id": "1497764505",
                    "item_name": "６１１°✿莱  恩 烟台 ‹求冠名ღ›",
                    "item_value": 757622,
                    "json_data": null
                },
                {
                    "ranking": "27",
                    "item_id": "1562106308",
                    "item_name": "８０２-婷　婷ღ浙江๑๑开开心心❀",
                    "item_value": 719294,
                    "json_data": null
                },
                {
                    "ranking": "28",
                    "item_id": "394987451",
                    "item_name": "6829  林　夕。",
                    "item_value": 709626,
                    "json_data": null
                },
                {
                    "ranking": "29",
                    "item_id": "851554415",
                    "item_name": "６１１°✿等  等 杭州 ‹求冠名ღ›",
                    "item_value": 695812,
                    "json_data": null
                },
                {
                    "ranking": "30",
                    "item_id": "352025302",
                    "item_name": "９０９方　诗ゝ28号晚上厅位战求支持",
                    "item_value": 677490,
                    "json_data": null
                },
                {
                    "ranking": "31",
                    "item_id": "849405707",
                    "item_name": "8 6 7✿沐子✿我就是我~",
                    "item_value": 663538,
                    "json_data": null
                },
                {
                    "ranking": "32",
                    "item_id": "1614305877",
                    "item_name": "１０２°✿欣　欣ゝ山东「求冠名」三厅",
                    "item_value": 640292,
                    "json_data": null
                },
                {
                    "ranking": "33",
                    "item_id": "1639418694",
                    "item_name": "６１１✿七 月   宁波  （求冠名）",
                    "item_value": 636858,
                    "json_data": null
                },
                {
                    "ranking": "34",
                    "item_id": "3035317",
                    "item_name": "９０９✦.wi　 fiゝ江西「战为二厅」",
                    "item_value": 625674,
                    "json_data": null
                },
                {
                    "ranking": "35",
                    "item_id": "1494596456",
                    "item_name": "９０９ 穆桂英ゝ28号晚上厅位战求支持",
                    "item_value": 612398,
                    "json_data": null
                },
                {
                    "ranking": "36",
                    "item_id": "1640319782",
                    "item_name": "蜜　茶。  我被冷爷爷干了",
                    "item_value": 585734,
                    "json_data": null
                },
                {
                    "ranking": "37",
                    "item_id": "61093317",
                    "item_name": "９０９✦.沫   沫ゝ长沙「不忘初心」",
                    "item_value": 559650,
                    "json_data": null
                },
                {
                    "ranking": "38",
                    "item_id": "1057165431",
                    "item_name": "7376✪昂　昂-成都（求陪伴）",
                    "item_value": 559030,
                    "json_data": null
                },
                {
                    "ranking": "39",
                    "item_id": "1497168965",
                    "item_name": "６１１°✿苏  苏 山东 ‹求冠名›",
                    "item_value": 556456,
                    "json_data": null
                },
                {
                    "ranking": "40",
                    "item_id": "173805008",
                    "item_name": "611兔兔：平安夜快乐！明晚八点选美大赛",
                    "item_value": 553716,
                    "json_data": null
                },
                {
                    "ranking": "41",
                    "item_id": "226429494",
                    "item_name": "６８2９小紫马",
                    "item_value": 543310,
                    "json_data": null
                },
                {
                    "ranking": "42",
                    "item_id": "1631541235",
                    "item_name": "８０２-杨晓鱼ღ成都๑๑我爱花花❀",
                    "item_value": 537402,
                    "json_data": null
                },
                {
                    "ranking": "43",
                    "item_id": "1383103839",
                    "item_name": "６１１✿瑜  熙  山东 （求冠名ღ）",
                    "item_value": 529842,
                    "json_data": null
                },
                {
                    "ranking": "44",
                    "item_id": "66165890",
                    "item_name": "5605－心情✿25号圣诞制服狂欢夜～",
                    "item_value": 529440,
                    "json_data": null
                },
                {
                    "ranking": "45",
                    "item_id": "618656922",
                    "item_name": "611星妹：感谢麟爸力挺3厅！",
                    "item_value": 498052,
                    "json_data": null
                },
                {
                    "ranking": "46",
                    "item_id": "1383100789",
                    "item_name": "６１１&deg;✿欣  芮  新乡 ",
                    "item_value": 496850,
                    "json_data": null
                },
                {
                    "ranking": "47",
                    "item_id": "1611390042",
                    "item_name": "６０６７：✿布  丁✿【求冠名】",
                    "item_value": 494210,
                    "json_data": null
                },
                {
                    "ranking": "48",
                    "item_id": "1391366571",
                    "item_name": "６１１°✿七  七 福建 ‹求冠名ღ›",
                    "item_value": 474614,
                    "json_data": null
                },
                {
                    "ranking": "49",
                    "item_id": "1571933536",
                    "item_name": "９０９✦.甜  心ゝ陕西「战为一厅」",
                    "item_value": 467954,
                    "json_data": null
                },
                {
                    "ranking": "50",
                    "item_id": "130789727",
                    "item_name": "6829  冷　芯。",
                    "item_value": 466212,
                    "json_data": null
                },
                {
                    "ranking": "51",
                    "item_id": "924851831",
                    "item_name": "６１１✿可爱纯 安徽 找奶爸",
                    "item_value": 466180,
                    "json_data": null
                },
                {
                    "ranking": "52",
                    "item_id": "1167711867",
                    "item_name": "９０９北　鼻ゝ28号晚上厅位战求支持",
                    "item_value": 463290,
                    "json_data": null
                },
                {
                    "ranking": "53",
                    "item_id": "1614633661",
                    "item_name": "美美",
                    "item_value": 462370,
                    "json_data": null
                },
                {
                    "ranking": "54",
                    "item_id": "346585384",
                    "item_name": "９０９✦.薇  薇ゝ湖北「战为一厅」",
                    "item_value": 446286,
                    "json_data": null
                },
                {
                    "ranking": "55",
                    "item_id": "1531579256",
                    "item_name": "６１１°✿初  音  等风 ‹也等你›",
                    "item_value": 445722,
                    "json_data": null
                },
                {
                    "ranking": "56",
                    "item_id": "1547376541",
                    "item_name": "宝儿：祝老变态生日快乐！艳遇无边！",
                    "item_value": 418466,
                    "json_data": null
                },
                {
                    "ranking": "57",
                    "item_id": "1554109277",
                    "item_name": "９０９ 叶小镁ゝ28号晚上厅位战求支持",
                    "item_value": 417190,
                    "json_data": null
                },
                {
                    "ranking": "58",
                    "item_id": "1680773799",
                    "item_name": "611皮妹：祝祖师爷生日快乐！",
                    "item_value": 409590,
                    "json_data": null
                },
                {
                    "ranking": "59",
                    "item_id": "1504387238",
                    "item_name": "６１１°✿萱  儿 算了 ‹求冠名ღ›",
                    "item_value": 400460,
                    "json_data": null
                },
                {
                    "ranking": "60",
                    "item_id": "222569812",
                    "item_name": "９０９✦.贝  贝ゝ东北「没钱也宠你",
                    "item_value": 381644,
                    "json_data": null
                },
                {
                    "ranking": "61",
                    "item_id": "1223581190",
                    "item_name": "９０９✦.大  乔ゝ湖北「战为一厅」",
                    "item_value": 381550,
                    "json_data": null
                },
                {
                    "ranking": "62",
                    "item_id": "223391353",
                    "item_name": "【唯】  艾琪 （迷失方向）",
                    "item_value": 379600,
                    "json_data": null
                },
                {
                    "ranking": "63",
                    "item_id": "1655451230",
                    "item_name": "5605－月月 ✿邂逅浪漫",
                    "item_value": 377260,
                    "json_data": null
                },
                {
                    "ranking": "64",
                    "item_id": "62655051",
                    "item_name": "【唯】  艾雪 （求守护我）",
                    "item_value": 366734,
                    "json_data": null
                },
                {
                    "ranking": "65",
                    "item_id": "1495493936",
                    "item_name": "９０９✦.小玉儿ゝ长沙「不忘初心」",
                    "item_value": 363978,
                    "json_data": null
                },
                {
                    "ranking": "66",
                    "item_id": "1656765442",
                    "item_name": "5605－畅畅 ✿邂逅浪漫",
                    "item_value": 353686,
                    "json_data": null
                },
                {
                    "ranking": "67",
                    "item_id": "1587439589",
                    "item_name": "６１１°✿夏  夏 66  ‹梦冠名ღ›",
                    "item_value": 351706,
                    "json_data": null
                },
                {
                    "ranking": "68",
                    "item_id": "1126062163",
                    "item_name": "蜜语：祝老变态生日快乐！艳遇无边",
                    "item_value": 351174,
                    "json_data": null
                },
                {
                    "ranking": "69",
                    "item_id": "1504140687",
                    "item_name": "６１１°✿高  甜 武汉 ‹求冠名ღ›",
                    "item_value": 335318,
                    "json_data": null
                },
                {
                    "ranking": "70",
                    "item_id": "181354204",
                    "item_name": "９０９小　咪ゝ28号晚上厅位战求支持",
                    "item_value": 333326,
                    "json_data": null
                },
                {
                    "ranking": "71",
                    "item_id": "1451820294",
                    "item_name": "９０９❤. K   Cゝ韩国「战为四厅」",
                    "item_value": 322260,
                    "json_data": null
                },
                {
                    "ranking": "72",
                    "item_id": "1204704297",
                    "item_name": "６１１°✿鹿  鹿  里约 ‹求冠名ღ›",
                    "item_value": 314948,
                    "json_data": null
                },
                {
                    "ranking": "73",
                    "item_id": "1599741781",
                    "item_name": "8 6 7❀小诺诺❀求过月底任务",
                    "item_value": 314070,
                    "json_data": null
                },
                {
                    "ranking": "74",
                    "item_id": "1487691275",
                    "item_name": "９０９✦.水  凌ゝ山东「谁来冠名」",
                    "item_value": 310072,
                    "json_data": null
                },
                {
                    "ranking": "75",
                    "item_id": "333386286",
                    "item_name": "611最可爱的九命",
                    "item_value": 304482,
                    "json_data": null
                },
                {
                    "ranking": "76",
                    "item_id": "616226582",
                    "item_name": "6062浠浠",
                    "item_value": 302618,
                    "json_data": null
                },
                {
                    "ranking": "77",
                    "item_id": "1584473878",
                    "item_name": "６０６７：✿阿  乐✿【求冠名】",
                    "item_value": 297992,
                    "json_data": null
                },
                {
                    "ranking": "78",
                    "item_id": "1632999600",
                    "item_name": "8 6 7°☀安静☀辽宁",
                    "item_value": 292872,
                    "json_data": null
                },
                {
                    "ranking": "79",
                    "item_id": "1614351935",
                    "item_name": "淼淼",
                    "item_value": 288192,
                    "json_data": null
                },
                {
                    "ranking": "80",
                    "item_id": "1569794846",
                    "item_name": "９０９✦.樱  桃ゝ山东「暴君樱桃」",
                    "item_value": 286466,
                    "json_data": null
                },
                {
                    "ranking": "81",
                    "item_id": "1645409891",
                    "item_name": "5605๑๑♥廿  雲»深圳ぐ邂逅浪漫",
                    "item_value": 284228,
                    "json_data": null
                },
                {
                    "ranking": "82",
                    "item_id": "1504259380",
                    "item_name": "7376✪安  静-成都‹求冠名ღ›",
                    "item_value": 275178,
                    "json_data": null
                },
                {
                    "ranking": "83",
                    "item_id": "1611671543",
                    "item_name": "611莉娜：祝祖师爷生日快乐！",
                    "item_value": 273492,
                    "json_data": null
                },
                {
                    "ranking": "84",
                    "item_id": "165783354",
                    "item_name": "187-团",
                    "item_value": 273348,
                    "json_data": null
                },
                {
                    "ranking": "85",
                    "item_id": "1383107030",
                    "item_name": "６１１✿昱  霏  山东 （ 求冠名）",
                    "item_value": 258390,
                    "json_data": null
                },
                {
                    "ranking": "86",
                    "item_id": "1655957884",
                    "item_name": "iu",
                    "item_value": 258100,
                    "json_data": null
                },
                {
                    "ranking": "87",
                    "item_id": "79326468",
                    "item_name": "９０９✦.朵宝宝ゝ四川南充 求宠幸求陪伴",
                    "item_value": 247100,
                    "json_data": null
                },
                {
                    "ranking": "88",
                    "item_id": "1600483527",
                    "item_name": "文静",
                    "item_value": 246604,
                    "json_data": null
                },
                {
                    "ranking": "89",
                    "item_id": "1555149704",
                    "item_name": "９０９✦.吃货柚ゝ❤里「回老家了」",
                    "item_value": 227580,
                    "json_data": null
                },
                {
                    "ranking": "90",
                    "item_id": "1596381719",
                    "item_name": "６０６７：✿千  寻✿【求 冠 名】",
                    "item_value": 223944,
                    "json_data": null
                },
                {
                    "ranking": "91",
                    "item_id": "1632667445",
                    "item_name": "９０９✦.怯梦【要抱抱】",
                    "item_value": 222548,
                    "json_data": null
                },
                {
                    "ranking": "92",
                    "item_id": "1647516044",
                    "item_name": "８０２-琦  宝ღ安徽๑๑新年快乐❀",
                    "item_value": 221312,
                    "json_data": null
                },
                {
                    "ranking": "93",
                    "item_id": "1497462125",
                    "item_name": "９０９❤.曼宝28号晚上厅位战求老板支持",
                    "item_value": 215950,
                    "json_data": null
                },
                {
                    "ranking": "94",
                    "item_id": "1372131758",
                    "item_name": "８０２-萌　宝ღ上海๑๑萌萌哒哒❀",
                    "item_value": 215864,
                    "json_data": null
                },
                {
                    "ranking": "95",
                    "item_id": "61524550",
                    "item_name": "6062唯唯:求巴掌 求守护~",
                    "item_value": 214056,
                    "json_data": null
                },
                {
                    "ranking": "96",
                    "item_id": "1614351738",
                    "item_name": "１０２°✿明　希ゝ江苏「求冠名」三厅",
                    "item_value": 211986,
                    "json_data": null
                },
                {
                    "ranking": "97",
                    "item_id": "6607077",
                    "item_name": "９０９✦. 添 添 ゝ「执行副会」",
                    "item_value": 210000,
                    "json_data": null
                },
                {
                    "ranking": "98",
                    "item_id": "1035023315",
                    "item_name": "611萌儿：祝祖师爷生日快乐！",
                    "item_value": 207882,
                    "json_data": null
                },
                {
                    "ranking": "99",
                    "item_id": "1655394779",
                    "item_name": "5605－梦妮 ✿邂逅浪漫",
                    "item_value": 206940,
                    "json_data": null
                },
                {
                    "ranking": "100",
                    "item_id": "1645969592",
                    "item_name": "8 6 7°✿晴子✿常州",
                    "item_value": 206202,
                    "json_data": null
                }
            ]
        },
        {
            "name": "babyRank_2",
            "display_name": "宝贝心榜",
            "award_descr": "",
            "type": "baby",
            "show_logo": "1",
            "rank": "3",
            "data": [
                {
                    "ranking": "1",
                    "item_id": "114035499",
                    "item_name": "６８７９ - 尐抹茶。返现招接待",
                    "item_value": 4285278,
                    "json_data": null,
                    "logo": "http://downhdlogo.yy.com/hdlogo/640640/147/147/03/0114035499/u114035499VSHBBNV0.png"
                },
                {
                    "ranking": "2",
                    "item_id": "71757106",
                    "item_name": "８ooo-夏韵＂有我在、别怕ღ",
                    "item_value": 3604378,
                    "json_data": null
                },
                {
                    "ranking": "3",
                    "item_id": "16562251",
                    "item_name": "9211ˇ悦悦①：欧巴我们相爱吧",
                    "item_value": 2376800,
                    "json_data": null
                },
                {
                    "ranking": "4",
                    "item_id": "1000488276",
                    "item_name": "5781清　甜 ❧ 感恩一路有你们",
                    "item_value": 1957410,
                    "json_data": null
                },
                {
                    "ranking": "5",
                    "item_id": "1034686514",
                    "item_name": "６８７９ - 樂こ樂๑•只想好好做自己",
                    "item_value": 1748900,
                    "json_data": null
                },
                {
                    "ranking": "6",
                    "item_id": "72971041",
                    "item_name": "4806-淡淡淡๓ 不是缘就是劫✰.",
                    "item_value": 1600202,
                    "json_data": null
                },
                {
                    "ranking": "7",
                    "item_id": "166084654",
                    "item_name": "9211ˇ\u0006潇潇①：欧巴我们相爱吧",
                    "item_value": 1592508,
                    "json_data": null
                },
                {
                    "ranking": "8",
                    "item_id": "645773407",
                    "item_name": "9211ˇ乖哟①：欧巴我们相爱吧",
                    "item_value": 1579290,
                    "json_data": null
                },
                {
                    "ranking": "9",
                    "item_id": "456209754",
                    "item_name": "\u0001８ooo-乐乐乐ღ爱你爱你就爱你",
                    "item_value": 1435128,
                    "json_data": null
                },
                {
                    "ranking": "10",
                    "item_id": "2418773",
                    "item_name": "\u0001８ooo-小太阳ᖭི༏ᖫ",
                    "item_value": 1258706,
                    "json_data": null
                },
                {
                    "ranking": "11",
                    "item_id": "636100889",
                    "item_name": "2582小白狐ღ高返现招收全职接待私聊我",
                    "item_value": 1074850,
                    "json_data": null
                },
                {
                    "ranking": "12",
                    "item_id": "723587832",
                    "item_name": "2582筱筱叶ღ高返现招收全职接待私聊我",
                    "item_value": 1021650,
                    "json_data": null
                },
                {
                    "ranking": "13",
                    "item_id": "307959760",
                    "item_name": "８ooo-周云云ᖭི༏ᖫ风里雨里感谢有你",
                    "item_value": 1016838,
                    "json_data": null
                },
                {
                    "ranking": "14",
                    "item_id": "489144090",
                    "item_name": "５５６４✦婼琳  ：久伴可好ღ",
                    "item_value": 965400,
                    "json_data": null
                },
                {
                    "ranking": "15",
                    "item_id": "1276489791",
                    "item_name": "８ooo-冷姑娘ᖭི༏ᖫ爱你们哟~ ",
                    "item_value": 949608,
                    "json_data": null
                },
                {
                    "ranking": "16",
                    "item_id": "88639291",
                    "item_name": "８ooo-雨雨雨ᖭི༏ᖫ风里雨里感谢有你",
                    "item_value": 931678,
                    "json_data": null
                },
                {
                    "ranking": "17",
                    "item_id": "1624620636",
                    "item_name": "4806-蜜　蜜๓ 1999圣诞礼盒卡红",
                    "item_value": 809598,
                    "json_data": null
                },
                {
                    "ranking": "18",
                    "item_id": "1149661640",
                    "item_name": "８ooo-温  暖ว",
                    "item_value": 777770,
                    "json_data": null
                },
                {
                    "ranking": "19",
                    "item_id": "839549781",
                    "item_name": "８ooo-情人沫ᖭི༏ᖫ风里雨里感谢有你",
                    "item_value": 761672,
                    "json_data": null
                },
                {
                    "ranking": "20",
                    "item_id": "1439767402",
                    "item_name": "６８７９ - 妍　汐๑•华天哥冠名呀",
                    "item_value": 738590,
                    "json_data": null
                },
                {
                    "ranking": "21",
                    "item_id": "233636092",
                    "item_name": "７６８６薇薇：枫哥独家冠名",
                    "item_value": 736840,
                    "json_data": null
                },
                {
                    "ranking": "22",
                    "item_id": "1486599808",
                    "item_name": "4806-姗　姗๓ 1999圣诞礼盒卡红",
                    "item_value": 724928,
                    "json_data": null
                },
                {
                    "ranking": "23",
                    "item_id": "614518314",
                    "item_name": "8000-涵宝宝   有人疼才显得多么出众!",
                    "item_value": 690296,
                    "json_data": null
                },
                {
                    "ranking": "24",
                    "item_id": "1149471243",
                    "item_name": "６８７９ - 虎  玖๑•小丫嘛小玖玖",
                    "item_value": 616870,
                    "json_data": null
                },
                {
                    "ranking": "25",
                    "item_id": "126911491",
                    "item_name": "夏小彤：约战２９号５５６４活动约不约?",
                    "item_value": 607570,
                    "json_data": null
                },
                {
                    "ranking": "26",
                    "item_id": "1000605534",
                    "item_name": "梨落我一直都在愿你一切都好",
                    "item_value": 558960,
                    "json_data": null
                },
                {
                    "ranking": "27",
                    "item_id": "1376122909",
                    "item_name": "８ooo-花℃Ｃ``26号活动求支持",
                    "item_value": 536926,
                    "json_data": null
                },
                {
                    "ranking": "28",
                    "item_id": "80256647",
                    "item_name": "傾月.ღ27号晚8点活动求支持！",
                    "item_value": 536404,
                    "json_data": null
                },
                {
                    "ranking": "29",
                    "item_id": "1150523113",
                    "item_name": "\u0001８ooo-大夕๑",
                    "item_value": 517782,
                    "json_data": null
                },
                {
                    "ranking": "30",
                    "item_id": "1502500442",
                    "item_name": "７６３６-小稚亓๓ 阿尔郎强势冠名",
                    "item_value": 487440,
                    "json_data": null
                },
                {
                    "ranking": "31",
                    "item_id": "534274786",
                    "item_name": "６１３９－啊ゝ萍：带薪招接待",
                    "item_value": 484092,
                    "json_data": null
                },
                {
                    "ranking": "32",
                    "item_id": "4741197",
                    "item_name": "4806-大熊貓๓ 如此苍白无力",
                    "item_value": 474446,
                    "json_data": null
                },
                {
                    "ranking": "33",
                    "item_id": "1084336518",
                    "item_name": "❥７６３９    丫头♫゛哇塞了",
                    "item_value": 468990,
                    "json_data": null
                },
                {
                    "ranking": "34",
                    "item_id": "1644569847",
                    "item_name": "８ooo-纯  猪ღ橘花老姐冠名",
                    "item_value": 463980,
                    "json_data": null
                },
                {
                    "ranking": "35",
                    "item_id": "342501600",
                    "item_name": "【魔域】梨落：6139、",
                    "item_value": 463822,
                    "json_data": null
                },
                {
                    "ranking": "36",
                    "item_id": "1042612580",
                    "item_name": "9211ˇ优乐美②：28号 活动求支持♥",
                    "item_value": 448334,
                    "json_data": null
                },
                {
                    "ranking": "37",
                    "item_id": "68584426",
                    "item_name": "６８７９ - 尐七色๑•风轻云淡",
                    "item_value": 444092,
                    "json_data": null
                },
                {
                    "ranking": "38",
                    "item_id": "584744580",
                    "item_name": "\u0001６８７９ - 洛\u0001依๑•柔弱无骨依",
                    "item_value": 417590,
                    "json_data": null
                },
                {
                    "ranking": "39",
                    "item_id": "1070846464",
                    "item_name": "4806-卿　玖๓卖身过任务i❤",
                    "item_value": 415582,
                    "json_data": null
                },
                {
                    "ranking": "40",
                    "item_id": "655725472",
                    "item_name": "８ooo-林熙儿。",
                    "item_value": 411746,
                    "json_data": null
                },
                {
                    "ranking": "41",
                    "item_id": "909268448",
                    "item_name": "\u0001６８７９ - 宁❤心๑•心若向阳~！",
                    "item_value": 407274,
                    "json_data": null
                },
                {
                    "ranking": "42",
                    "item_id": "64206392",
                    "item_name": "4806喵小污",
                    "item_value": 387994,
                    "json_data": null
                },
                {
                    "ranking": "43",
                    "item_id": "432801021",
                    "item_name": "✿5781＇凌啊ღ",
                    "item_value": 387180,
                    "json_data": null
                },
                {
                    "ranking": "44",
                    "item_id": "1193421133",
                    "item_name": "4806-小灵儿๓洋葱゛❤",
                    "item_value": 386878,
                    "json_data": null
                },
                {
                    "ranking": "45",
                    "item_id": "211901349",
                    "item_name": "９2ι⒈ˇｋBoss②：返点招收接待ＭＭ",
                    "item_value": 382158,
                    "json_data": null
                },
                {
                    "ranking": "46",
                    "item_id": "533482545",
                    "item_name": "5781啾啾小可爱ღ",
                    "item_value": 373306,
                    "json_data": null
                },
                {
                    "ranking": "47",
                    "item_id": "1003398045",
                    "item_name": "921⒈ˇ妖酒酒②：欧巴.我们相爱吧",
                    "item_value": 357686,
                    "json_data": null
                },
                {
                    "ranking": "48",
                    "item_id": "187372055",
                    "item_name": "８ooo-YoYo＂安静的陪伴",
                    "item_value": 341410,
                    "json_data": null
                },
                {
                    "ranking": "49",
                    "item_id": "480852055",
                    "item_name": "６８７９ - 尐流氓๑•做最好的自己",
                    "item_value": 340844,
                    "json_data": null
                },
                {
                    "ranking": "50",
                    "item_id": "1235441720",
                    "item_name": "２5８2-静　静.感谢不离不弃",
                    "item_value": 319160,
                    "json_data": null
                },
                {
                    "ranking": "51",
                    "item_id": "923436784",
                    "item_name": "✿5781＇妮  妮☀你还能跳出来咬我？",
                    "item_value": 306730,
                    "json_data": null
                },
                {
                    "ranking": "52",
                    "item_id": "420911925",
                    "item_name": "６８７９ - ➋雪呀๑•",
                    "item_value": 305766,
                    "json_data": null
                },
                {
                    "ranking": "53",
                    "item_id": "177806092",
                    "item_name": "\u0001８ooo-悅   悅ღ26号活动求支持",
                    "item_value": 300698,
                    "json_data": null
                },
                {
                    "ranking": "54",
                    "item_id": "94083284",
                    "item_name": "✿5781＇蛋蛋❀最爱不过回忆跟班",
                    "item_value": 288260,
                    "json_data": null
                },
                {
                    "ranking": "55",
                    "item_id": "887729795",
                    "item_name": "9211ˇ兔兔②  我们相爱吧",
                    "item_value": 287548,
                    "json_data": null
                },
                {
                    "ranking": "56",
                    "item_id": "410592482",
                    "item_name": "\u0001５５６４✦夏小曼：好冷啊！！",
                    "item_value": 277220,
                    "json_data": null
                },
                {
                    "ranking": "57",
                    "item_id": "494578740",
                    "item_name": "７６３６-蜜蜜✿求个守护~",
                    "item_value": 276760,
                    "json_data": null
                },
                {
                    "ranking": "58",
                    "item_id": "533675648",
                    "item_name": "５６８６-- 安  然¡懂与陪伴就好",
                    "item_value": 272090,
                    "json_data": null
                },
                {
                    "ranking": "59",
                    "item_id": "879415884",
                    "item_name": "７６３６-傻大啦❤陪伴便是最好的承诺",
                    "item_value": 271200,
                    "json_data": null
                },
                {
                    "ranking": "60",
                    "item_id": "1672818874",
                    "item_name": "２5８2-小断翅 1999的梦",
                    "item_value": 267890,
                    "json_data": null
                },
                {
                    "ranking": "61",
                    "item_id": "80632574",
                    "item_name": "８ooo-伊小婉 ✈26号活动求支持",
                    "item_value": 262704,
                    "json_data": null
                },
                {
                    "ranking": "62",
                    "item_id": "66071914",
                    "item_name": "【魔域】球球：♂ 狼爺 专属用球",
                    "item_value": 261570,
                    "json_data": null
                },
                {
                    "ranking": "63",
                    "item_id": "1642799861",
                    "item_name": "\u0001　９６４２-娜娜✿独家记忆",
                    "item_value": 258440,
                    "json_data": null
                },
                {
                    "ranking": "64",
                    "item_id": "99699147",
                    "item_name": "9211ˇ黛妹妹①：欧巴•我们相爱吧♥",
                    "item_value": 251360,
                    "json_data": null
                },
                {
                    "ranking": "65",
                    "item_id": "356012555",
                    "item_name": "✿5781＇乖小宝ღ",
                    "item_value": 247640,
                    "json_data": null
                },
                {
                    "ranking": "66",
                    "item_id": "755179908",
                    "item_name": "６８７９ - 哦　№๑•球横幅冠名",
                    "item_value": 246230,
                    "json_data": null
                },
                {
                    "ranking": "67",
                    "item_id": "156248219",
                    "item_name": "８ooo-小睫毛ღ26号活动求支持",
                    "item_value": 243336,
                    "json_data": null
                },
                {
                    "ranking": "68",
                    "item_id": "14947434",
                    "item_name": "4806-芽　芽๓劳资素个好菇凉",
                    "item_value": 235932,
                    "json_data": null
                },
                {
                    "ranking": "69",
                    "item_id": "1021933477",
                    "item_name": "\u0001８ooo-尐尐曦❤关注26晚八点活动",
                    "item_value": 227840,
                    "json_data": null
                },
                {
                    "ranking": "70",
                    "item_id": "453610304",
                    "item_name": "６８７９ - ２　希๑•65后冠过任务",
                    "item_value": 224254,
                    "json_data": null
                },
                {
                    "ranking": "71",
                    "item_id": "336266381",
                    "item_name": "快叫我老婆",
                    "item_value": 216370,
                    "json_data": null
                },
                {
                    "ranking": "72",
                    "item_id": "1078914014",
                    "item_name": "90605-阿离❀我比安妮萌好多",
                    "item_value": 215630,
                    "json_data": null
                },
                {
                    "ranking": "73",
                    "item_id": "12139837",
                    "item_name": "【魔域】诺 涵：谁可以久伴不离",
                    "item_value": 212230,
                    "json_data": null
                },
                {
                    "ranking": "74",
                    "item_id": "1003673721",
                    "item_name": "９６４２- 婉 秋【亲帮过任务】",
                    "item_value": 212020,
                    "json_data": null
                },
                {
                    "ranking": "75",
                    "item_id": "1367117038",
                    "item_name": "２5８2-小紫狐ღ我有一双爱笑哒眼睛。",
                    "item_value": 210830,
                    "json_data": null
                },
                {
                    "ranking": "76",
                    "item_id": "1455324070",
                    "item_name": "青  兰：爱唱歌的小花儿。~",
                    "item_value": 210250,
                    "json_data": null
                },
                {
                    "ranking": "77",
                    "item_id": "331134523",
                    "item_name": "小甜甜",
                    "item_value": 209650,
                    "json_data": null
                },
                {
                    "ranking": "78",
                    "item_id": "970791183",
                    "item_name": "✿5781＇未 央ღ好气哦还要保持微笑",
                    "item_value": 206610,
                    "json_data": null
                },
                {
                    "ranking": "79",
                    "item_id": "197542613",
                    "item_name": "萌尐芸：我就点草那个二百逼装不起的熊猫",
                    "item_value": 190820,
                    "json_data": null
                },
                {
                    "ranking": "80",
                    "item_id": "881160986",
                    "item_name": "２5８2-小持持ღ爱谁谁",
                    "item_value": 189240,
                    "json_data": null
                },
                {
                    "ranking": "81",
                    "item_id": "599555315",
                    "item_name": "❥３８０３の小傻熙ღ留下来才是最好的！",
                    "item_value": 183374,
                    "json_data": null
                },
                {
                    "ranking": "82",
                    "item_id": "251755401",
                    "item_name": "６８７９ - 暖暖暖๑•只收圣诞礼物",
                    "item_value": 179910,
                    "json_data": null
                },
                {
                    "ranking": "83",
                    "item_id": "525437545",
                    "item_name": "超级无敌尐嘚瑟！",
                    "item_value": 178050,
                    "json_data": null
                },
                {
                    "ranking": "84",
                    "item_id": "879436408",
                    "item_name": "4806-君　拂๓ 愿你笑靥如花❤ི",
                    "item_value": 170644,
                    "json_data": null
                },
                {
                    "ranking": "85",
                    "item_id": "630942945",
                    "item_name": "5 5 6 4✦米尛琪：以后的以后",
                    "item_value": 169800,
                    "json_data": null
                },
                {
                    "ranking": "86",
                    "item_id": "219742755",
                    "item_name": "６８７９ - 阿  糜๑•时间酝酿人心",
                    "item_value": 166990,
                    "json_data": null
                },
                {
                    "ranking": "87",
                    "item_id": "88549211",
                    "item_name": "9211ˇ酒窝②：欧巴，我们相爱吧。",
                    "item_value": 165280,
                    "json_data": null
                },
                {
                    "ranking": "88",
                    "item_id": "146664414",
                    "item_name": "9211ˇ筱梦①：欧巴•我们相爱吧♥",
                    "item_value": 159362,
                    "json_data": null
                },
                {
                    "ranking": "89",
                    "item_id": "108221811",
                    "item_name": "\u0001６８７９ - 小姨妈",
                    "item_value": 157724,
                    "json_data": null
                },
                {
                    "ranking": "90",
                    "item_id": "186648066",
                    "item_name": "5781 若兮:吓得宝宝天线都掉了",
                    "item_value": 156320,
                    "json_data": null
                },
                {
                    "ranking": "91",
                    "item_id": "459942660",
                    "item_name": "\u0001５５６４✦紫  月：宝宝求过任务！",
                    "item_value": 150620,
                    "json_data": null
                },
                {
                    "ranking": "92",
                    "item_id": "645067971",
                    "item_name": "\u0001５５６４✦☭６９：只想一份安稳。。",
                    "item_value": 148960,
                    "json_data": null
                },
                {
                    "ranking": "93",
                    "item_id": "367948136",
                    "item_name": "9211ˇ：失意①：你最珍贵,",
                    "item_value": 145630,
                    "json_data": null
                },
                {
                    "ranking": "94",
                    "item_id": "646067556",
                    "item_name": "２5８2-小微恙ღ如不相见，便不相恋✰",
                    "item_value": 145380,
                    "json_data": null
                },
                {
                    "ranking": "95",
                    "item_id": "424635603",
                    "item_name": "\u0001✿5781＇昕児ღ傻瓜不难过",
                    "item_value": 143252,
                    "json_data": null
                },
                {
                    "ranking": "96",
                    "item_id": "1936363",
                    "item_name": "9211ˇ沈朵：生命在于闹腾",
                    "item_value": 141546,
                    "json_data": null
                },
                {
                    "ranking": "97",
                    "item_id": "206927607",
                    "item_name": "\u0001✿5781＇若   雪 ღ宁缺毋滥",
                    "item_value": 141206,
                    "json_data": null
                },
                {
                    "ranking": "98",
                    "item_id": "362030418",
                    "item_name": "７６８６- 静伊：信者得爱",
                    "item_value": 138480,
                    "json_data": null
                },
                {
                    "ranking": "99",
                    "item_id": "198998466",
                    "item_name": "✦３８０３の小逗逗ღ嗯哼.~新宝求罩",
                    "item_value": 134050,
                    "json_data": null
                },
                {
                    "ranking": "100",
                    "item_id": "286368204",
                    "item_name": "傾城.ღ",
                    "item_value": 131580,
                    "json_data": null
                }
            ]
        },
        {
            "name": "channelRank_1",
            "display_name": "公会誓榜",
            "award_descr": "",
            "type": "channel",
            "show_logo": "1",
            "rank": "5",
            "data": [
                {
                    "ranking": "1",
                    "item_id": "49018709",
                    "item_name": "611",
                    "item_value": "37908870",
                    "json_data": null,
                    "logo": "http://downhdlogo.yy.com/applogo/session/60/60/01/0049018709/s49018709VCJNOXDhI.jpg"
                },
                {
                    "ranking": "2",
                    "item_id": "66957779",
                    "item_name": "909",
                    "item_value": "19693500",
                    "json_data": null
                },
                {
                    "ranking": "3",
                    "item_id": "12908397",
                    "item_name": "6067",
                    "item_value": "9047280",
                    "json_data": null
                },
                {
                    "ranking": "4",
                    "item_id": "102445",
                    "item_name": "802",
                    "item_value": "6556024",
                    "json_data": null
                },
                {
                    "ranking": "5",
                    "item_id": "79699285",
                    "item_name": "5605",
                    "item_value": "5140630",
                    "json_data": null
                },
                {
                    "ranking": "6",
                    "item_id": "68793353",
                    "item_name": "6829",
                    "item_value": "4905232",
                    "json_data": null
                },
                {
                    "ranking": "7",
                    "item_id": "18711102",
                    "item_name": "867",
                    "item_value": "3659626",
                    "json_data": null
                },
                {
                    "ranking": "8",
                    "item_id": "34027875",
                    "item_name": "7376",
                    "item_value": "2992470",
                    "json_data": null
                },
                {
                    "ranking": "9",
                    "item_id": "10285639",
                    "item_name": "102",
                    "item_value": "1972518",
                    "json_data": null
                },
                {
                    "ranking": "10",
                    "item_id": "92776527",
                    "item_name": "6062",
                    "item_value": "1830012",
                    "json_data": null
                },
                {
                    "ranking": "11",
                    "item_id": "1165169",
                    "item_name": "187",
                    "item_value": "365758",
                    "json_data": null
                }
            ]
        },
        {
            "name": "channelRank_2",
            "display_name": "公会心榜",
            "award_descr": "",
            "type": "channel",
            "show_logo": "1",
            "rank": "6",
            "data": [
                {
                    "ranking": "1",
                    "item_id": "29079076",
                    "item_name": "8000",
                    "item_value": "15516974",
                    "json_data": null,
                    "logo": "http://downhdlogo.yy.com/applogo/session/60/60/07/0029079076/s29079076ErmH_K7Ju.jpg"
                },
                {
                    "ranking": "2",
                    "item_id": "88980579",
                    "item_name": "6879",
                    "item_value": "10565506",
                    "json_data": null
                },
                {
                    "ranking": "3",
                    "item_id": "58822598",
                    "item_name": "9211",
                    "item_value": "8644190",
                    "json_data": null
                },
                {
                    "ranking": "4",
                    "item_id": "39546311",
                    "item_name": "5781",
                    "item_value": "5585522",
                    "json_data": null
                },
                {
                    "ranking": "5",
                    "item_id": "29408038",
                    "item_name": "4806",
                    "item_value": "5568680",
                    "json_data": null
                },
                {
                    "ranking": "6",
                    "item_id": "48060645",
                    "item_name": "2582",
                    "item_value": "3494590",
                    "json_data": null
                },
                {
                    "ranking": "7",
                    "item_id": "154489740",
                    "item_name": "5564",
                    "item_value": "2510464",
                    "json_data": null
                },
                {
                    "ranking": "8",
                    "item_id": "80938691",
                    "item_name": "6139",
                    "item_value": "2023576",
                    "json_data": null
                },
                {
                    "ranking": "9",
                    "item_id": "40440103",
                    "item_name": "7636",
                    "item_value": "1739160",
                    "json_data": null
                },
                {
                    "ranking": "10",
                    "item_id": "23404557",
                    "item_name": "9642",
                    "item_value": "1409922",
                    "json_data": null
                },
                {
                    "ranking": "11",
                    "item_id": "40189555",
                    "item_name": "3803",
                    "item_value": "1393160",
                    "json_data": null
                },
                {
                    "ranking": "12",
                    "item_id": "18091255",
                    "item_name": "7686",
                    "item_value": "1259510",
                    "json_data": null
                },
                {
                    "ranking": "13",
                    "item_id": "66863273",
                    "item_name": "5686",
                    "item_value": "564914",
                    "json_data": null
                },
                {
                    "ranking": "14",
                    "item_id": "91964335",
                    "item_name": "3067",
                    "item_value": "451450",
                    "json_data": null
                },
                {
                    "ranking": "15",
                    "item_id": "21106866",
                    "item_name": "3609",
                    "item_value": "402880",
                    "json_data": null
                },
                {
                    "ranking": "16",
                    "item_id": "88555714",
                    "item_name": "4673",
                    "item_value": "272430",
                    "json_data": null
                },
                {
                    "ranking": "17",
                    "item_id": "3268356",
                    "item_name": "5120",
                    "item_value": "271180",
                    "json_data": null
                },
                {
                    "ranking": "18",
                    "item_id": "86559001",
                    "item_name": "56866",
                    "item_value": "249320",
                    "json_data": null
                },
                {
                    "ranking": "19",
                    "item_id": "51368821",
                    "item_name": "5414",
                    "item_value": "238130",
                    "json_data": null
                },
                {
                    "ranking": "20",
                    "item_id": "80233994",
                    "item_name": "6861",
                    "item_value": "232400",
                    "json_data": null
                },
                {
                    "ranking": "21",
                    "item_id": "22887784",
                    "item_name": "1898",
                    "item_value": "156610",
                    "json_data": null
                },
                {
                    "ranking": "22",
                    "item_id": "31995761",
                    "item_name": "7639",
                    "item_value": "126820",
                    "json_data": null
                },
                {
                    "ranking": "23",
                    "item_id": "23236831",
                    "item_name": "23236831",
                    "item_value": "121440",
                    "json_data": null
                },
                {
                    "ranking": "24",
                    "item_id": "55265665",
                    "item_name": "48332",
                    "item_value": "120110",
                    "json_data": null
                },
                {
                    "ranking": "25",
                    "item_id": "92667907",
                    "item_name": "9767",
                    "item_value": "115480",
                    "json_data": null
                },
                {
                    "ranking": "26",
                    "item_id": "12583200",
                    "item_name": "5923",
                    "item_value": "114430",
                    "json_data": null
                },
                {
                    "ranking": "27",
                    "item_id": "46046233",
                    "item_name": "71007",
                    "item_value": "112120",
                    "json_data": null
                },
                {
                    "ranking": "28",
                    "item_id": "10781065",
                    "item_name": "6606",
                    "item_value": "107230",
                    "json_data": null
                },
                {
                    "ranking": "29",
                    "item_id": "79455079",
                    "item_name": "3646",
                    "item_value": "84000",
                    "json_data": null
                },
                {
                    "ranking": "30",
                    "item_id": "10319580",
                    "item_name": "6056",
                    "item_value": "80690",
                    "json_data": null
                },
                {
                    "ranking": "31",
                    "item_id": "84541537",
                    "item_name": "14761",
                    "item_value": "79370",
                    "json_data": null
                },
                {
                    "ranking": "32",
                    "item_id": "60372528",
                    "item_name": "3058",
                    "item_value": "78872",
                    "json_data": null
                },
                {
                    "ranking": "33",
                    "item_id": "75209546",
                    "item_name": "600130",
                    "item_value": "74880",
                    "json_data": null
                },
                {
                    "ranking": "34",
                    "item_id": "54998431",
                    "item_name": "8323",
                    "item_value": "68120",
                    "json_data": null
                },
                {
                    "ranking": "35",
                    "item_id": "93221197",
                    "item_name": "41898",
                    "item_value": "50680",
                    "json_data": null
                },
                {
                    "ranking": "36",
                    "item_id": "18973234",
                    "item_name": "57120",
                    "item_value": "48780",
                    "json_data": null
                },
                {
                    "ranking": "37",
                    "item_id": "61397266",
                    "item_name": "27544",
                    "item_value": "37200",
                    "json_data": null
                },
                {
                    "ranking": "38",
                    "item_id": "71612899",
                    "item_name": "6387",
                    "item_value": "37040",
                    "json_data": null
                },
                {
                    "ranking": "39",
                    "item_id": "69815418",
                    "item_name": "90617",
                    "item_value": "33960",
                    "json_data": null
                },
                {
                    "ranking": "40",
                    "item_id": "78846222",
                    "item_name": "4686",
                    "item_value": "27320",
                    "json_data": null
                },
                {
                    "ranking": "41",
                    "item_id": "83345690",
                    "item_name": "239656",
                    "item_value": "23850",
                    "json_data": null
                },
                {
                    "ranking": "42",
                    "item_id": "61830212",
                    "item_name": "5318",
                    "item_value": "19610",
                    "json_data": null
                },
                {
                    "ranking": "43",
                    "item_id": "76370690",
                    "item_name": "79710",
                    "item_value": "19120",
                    "json_data": null
                },
                {
                    "ranking": "44",
                    "item_id": "14110252",
                    "item_name": "2061",
                    "item_value": "18920",
                    "json_data": null
                },
                {
                    "ranking": "45",
                    "item_id": "36154309",
                    "item_name": "3920",
                    "item_value": "18760",
                    "json_data": null
                },
                {
                    "ranking": "46",
                    "item_id": "56790779",
                    "item_name": "301742",
                    "item_value": "18410",
                    "json_data": null
                },
                {
                    "ranking": "47",
                    "item_id": "91985978",
                    "item_name": "282700",
                    "item_value": "13740",
                    "json_data": null
                },
                {
                    "ranking": "48",
                    "item_id": "39303668",
                    "item_name": "1411",
                    "item_value": "12880",
                    "json_data": null
                },
                {
                    "ranking": "49",
                    "item_id": "51655529",
                    "item_name": "308098",
                    "item_value": "11340",
                    "json_data": null
                },
                {
                    "ranking": "50",
                    "item_id": "26620264",
                    "item_name": "145880",
                    "item_value": "9320",
                    "json_data": null
                }
            ]
        },
        {
            "name": "playerRank",
            "display_name": "土豪总榜",
            "award_descr": "",
            "type": "player",
            "show_logo": "1",
            "rank": "7",
            "data": [
                {
                    "ranking": "1",
                    "item_id": "378444825",
                    "item_name": "嘘~低调",
                    "item_value": 6346236,
                    "json_data": null,
                    "logo": "http://hdzx.g.yy.com/images/user.jpg"
                },
                {
                    "ranking": "2",
                    "item_id": "1565263825",
                    "item_name": "捣蛋小分队Y群20095289",
                    "item_value": 6034416,
                    "json_data": null
                },
                {
                    "ranking": "3",
                    "item_id": "121371640",
                    "item_name": "橘✿花",
                    "item_value": 4532964,
                    "json_data": null
                },
                {
                    "ranking": "4",
                    "item_id": "3929489",
                    "item_name": "【611烦家】烦小烦",
                    "item_value": 4429290,
                    "json_data": null
                },
                {
                    "ranking": "5",
                    "item_id": "1615927006",
                    "item_name": "い安尐笨ر\u0001",
                    "item_value": 3787200,
                    "json_data": null
                },
                {
                    "ranking": "6",
                    "item_id": "396283748",
                    "item_name": "火：唯爱西西",
                    "item_value": 3498646,
                    "json_data": null
                },
                {
                    "ranking": "7",
                    "item_id": "878592274",
                    "item_name": "念你。星晴",
                    "item_value": 2926714,
                    "json_data": null
                },
                {
                    "ranking": "8",
                    "item_id": "1679888118",
                    "item_name": "我老公",
                    "item_value": 2653968,
                    "json_data": null
                },
                {
                    "ranking": "9",
                    "item_id": "675059551",
                    "item_name": "帅麟",
                    "item_value": 1993320,
                    "json_data": null
                },
                {
                    "ranking": "10",
                    "item_id": "59916420",
                    "item_name": "神秘人",
                    "item_value": 1900940,
                    "json_data": null
                },
                {
                    "ranking": "11",
                    "item_id": "722533664",
                    "item_name": "Yy伴侣给你带来的精彩丶",
                    "item_value": 1872250,
                    "json_data": null
                },
                {
                    "ranking": "12",
                    "item_id": "193407306",
                    "item_name": "Ｋｒａｚｙ",
                    "item_value": 1499528,
                    "json_data": null
                },
                {
                    "ranking": "13",
                    "item_id": "186607772",
                    "item_name": "゛大香蕉゛",
                    "item_value": 1484100,
                    "json_data": null
                },
                {
                    "ranking": "14",
                    "item_id": "1145618434",
                    "item_name": "冂冂",
                    "item_value": 1384550,
                    "json_data": null
                },
                {
                    "ranking": "15",
                    "item_id": "198103264",
                    "item_name": "你瞅啥：独守安娜",
                    "item_value": 1308390,
                    "json_data": null
                },
                {
                    "ranking": "16",
                    "item_id": "236364474",
                    "item_name": "Ｋ老师（守护糖宝）",
                    "item_value": 1287120,
                    "json_data": null
                },
                {
                    "ranking": "17",
                    "item_id": "89187233",
                    "item_name": "✿嬛嬛♬ ℡",
                    "item_value": 1261080,
                    "json_data": null
                },
                {
                    "ranking": "18",
                    "item_id": "1564882",
                    "item_name": "书生  秒完活动 就封刀  说到做到",
                    "item_value": 1169100,
                    "json_data": null
                },
                {
                    "ranking": "19",
                    "item_id": "62007457",
                    "item_name": "唯爱黙冰 默氏夫妇",
                    "item_value": 1162090,
                    "json_data": null
                },
                {
                    "ranking": "20",
                    "item_id": "1675882885",
                    "item_name": "钱包那么小。哪都去不了",
                    "item_value": 1118520,
                    "json_data": null
                },
                {
                    "ranking": "21",
                    "item_id": "1444196251",
                    "item_name": "＂战逗宸ღ",
                    "item_value": 1116800,
                    "json_data": null
                },
                {
                    "ranking": "22",
                    "item_id": "1663681615",
                    "item_name": "枫林  唯爱乐乐",
                    "item_value": 1048640,
                    "json_data": null
                },
                {
                    "ranking": "23",
                    "item_id": "1641884827",
                    "item_name": "兽.",
                    "item_value": 1036550,
                    "json_data": null
                },
                {
                    "ranking": "24",
                    "item_id": "3660707",
                    "item_name": "蒙奇.D.路飞",
                    "item_value": 976338,
                    "json_data": null
                },
                {
                    "ranking": "25",
                    "item_id": "118779900",
                    "item_name": "欧阳 我是一个男神",
                    "item_value": 960590,
                    "json_data": null
                },
                {
                    "ranking": "26",
                    "item_id": "13732105",
                    "item_name": "２5８2-五   号ღ年轻时代最好的记忆",
                    "item_value": 947280,
                    "json_data": null
                },
                {
                    "ranking": "27",
                    "item_id": "1500521614",
                    "item_name": "杨辉",
                    "item_value": 937820,
                    "json_data": null
                },
                {
                    "ranking": "28",
                    "item_id": "516175296",
                    "item_name": "若瞳❤唯爱婼琳",
                    "item_value": 922070,
                    "json_data": null
                },
                {
                    "ranking": "29",
                    "item_id": "1534616712",
                    "item_name": "新生❥无微不至",
                    "item_value": 905420,
                    "json_data": null
                },
                {
                    "ranking": "30",
                    "item_id": "1653324498",
                    "item_name": "⛔K r a z y 伟㊣惊雷",
                    "item_value": 903234,
                    "json_data": null
                },
                {
                    "ranking": "31",
                    "item_id": "20848908",
                    "item_name": "❥.甜+つ~雅　透 ❧ 甜家三周年快乐",
                    "item_value": 900000,
                    "json_data": null
                },
                {
                    "ranking": "32",
                    "item_id": "65331522",
                    "item_name": "你在吗",
                    "item_value": 863790,
                    "json_data": null
                },
                {
                    "ranking": "33",
                    "item_id": "13238522",
                    "item_name": "口香糖ว",
                    "item_value": 729050,
                    "json_data": null
                },
                {
                    "ranking": "34",
                    "item_id": "692688155",
                    "item_name": "DJᕗ&hearts;恋情到老",
                    "item_value": 722680,
                    "json_data": null
                },
                {
                    "ranking": "35",
                    "item_id": "1451813211",
                    "item_name": "骑猪的&封凌云",
                    "item_value": 714530,
                    "json_data": null
                },
                {
                    "ranking": "36",
                    "item_id": "1619446629",
                    "item_name": "这号要积分",
                    "item_value": 699940,
                    "json_data": null
                },
                {
                    "ranking": "37",
                    "item_id": "604865704",
                    "item_name": "如果我是DJ你会爱我吗？（不要马甲）",
                    "item_value": 680290,
                    "json_data": null
                },
                {
                    "ranking": "38",
                    "item_id": "167839434",
                    "item_name": "《无聊》๓๓๓๓๓๓๓๓๓๓๓๓我只挂机",
                    "item_value": 653220,
                    "json_data": null
                },
                {
                    "ranking": "39",
                    "item_id": "14808109",
                    "item_name": "ミ（≧枫≦）づ哥",
                    "item_value": 651820,
                    "json_data": null
                },
                {
                    "ranking": "40",
                    "item_id": "1640487376",
                    "item_name": "【猴窝】六 爷  （为情而来）",
                    "item_value": 593370,
                    "json_data": null
                },
                {
                    "ranking": "41",
                    "item_id": "7226948",
                    "item_name": "5605-蒙奇奇",
                    "item_value": 590840,
                    "json_data": null
                },
                {
                    "ranking": "42",
                    "item_id": "1345357909",
                    "item_name": "◕.◕̅̅ 可爱新",
                    "item_value": 587970,
                    "json_data": null
                },
                {
                    "ranking": "43",
                    "item_id": "116466198",
                    "item_name": "句号 ⊱乖入我❤⊰",
                    "item_value": 570622,
                    "json_data": null
                },
                {
                    "ranking": "44",
                    "item_id": "60866840",
                    "item_name": "陈洋",
                    "item_value": 560980,
                    "json_data": null
                },
                {
                    "ranking": "45",
                    "item_id": "22051209",
                    "item_name": "句号 ⊱乖入我❤⊰",
                    "item_value": 550810,
                    "json_data": null
                },
                {
                    "ranking": "46",
                    "item_id": "1101397047",
                    "item_name": "❥℃c+ 木枫 丶爱我会伤了你！",
                    "item_value": 520010,
                    "json_data": null
                },
                {
                    "ranking": "47",
                    "item_id": "2030896",
                    "item_name": "豪帥",
                    "item_value": 503600,
                    "json_data": null
                },
                {
                    "ranking": "48",
                    "item_id": "565069553",
                    "item_name": "29241-临城【正能量】",
                    "item_value": 497220,
                    "json_data": null
                },
                {
                    "ranking": "49",
                    "item_id": "1354821488",
                    "item_name": "【611烦家】鱼 果",
                    "item_value": 490610,
                    "json_data": null
                },
                {
                    "ranking": "50",
                    "item_id": "1354346420",
                    "item_name": "大浪独守一人只为彤",
                    "item_value": 483960,
                    "json_data": null
                },
                {
                    "ranking": "51",
                    "item_id": "206676071",
                    "item_name": "华天哥   ◖天道勤酬◗吃土",
                    "item_value": 473280,
                    "json_data": null
                },
                {
                    "ranking": "52",
                    "item_id": "497746781",
                    "item_name": "龍→「纵横四海」 、无道＂ゅ",
                    "item_value": 470610,
                    "json_data": null
                },
                {
                    "ranking": "53",
                    "item_id": "206484870",
                    "item_name": "κiζs 至尊♂狼爺",
                    "item_value": 450290,
                    "json_data": null
                },
                {
                    "ranking": "54",
                    "item_id": "674734773",
                    "item_name": "橘子先生",
                    "item_value": 450160,
                    "json_data": null
                },
                {
                    "ranking": "55",
                    "item_id": "7846194",
                    "item_name": "﹏╮　幕後情人ᖭི༏ᖫ一起滚床单",
                    "item_value": 443910,
                    "json_data": null
                },
                {
                    "ranking": "56",
                    "item_id": "1091310842",
                    "item_name": "丫 头",
                    "item_value": 438080,
                    "json_data": null
                },
                {
                    "ranking": "57",
                    "item_id": "1653773500",
                    "item_name": "（Qi）°－阿尔郎＂",
                    "item_value": 430000,
                    "json_data": null
                },
                {
                    "ranking": "58",
                    "item_id": "853833845",
                    "item_name": "\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001",
                    "item_value": 427530,
                    "json_data": null
                },
                {
                    "ranking": "59",
                    "item_id": "1541071847",
                    "item_name": "情调",
                    "item_value": 426490,
                    "json_data": null
                },
                {
                    "ranking": "60",
                    "item_id": "89205609",
                    "item_name": "CEO：611感谢一路有你",
                    "item_value": 421142,
                    "json_data": null
                },
                {
                    "ranking": "61",
                    "item_id": "1142895842",
                    "item_name": "\u0001Cold．＂小饭团",
                    "item_value": 420160,
                    "json_data": null
                },
                {
                    "ranking": "62",
                    "item_id": "1674979333",
                    "item_name": "生日快乐龅牙涵",
                    "item_value": 419950,
                    "json_data": null
                },
                {
                    "ranking": "63",
                    "item_id": "223824023",
                    "item_name": "神",
                    "item_value": 401820,
                    "json_data": null
                },
                {
                    "ranking": "64",
                    "item_id": "128623529",
                    "item_name": "冷爺_",
                    "item_value": 398990,
                    "json_data": null
                },
                {
                    "ranking": "65",
                    "item_id": "1630906406",
                    "item_name": "做我暖宝宝!",
                    "item_value": 393330,
                    "json_data": null
                },
                {
                    "ranking": "66",
                    "item_id": "72215001",
                    "item_name": "初恋：祝愿大家节日快乐",
                    "item_value": 365080,
                    "json_data": null
                },
                {
                    "ranking": "67",
                    "item_id": "108633758",
                    "item_name": "【猴窝】九  爷  （猴窝黑粉）",
                    "item_value": 363860,
                    "json_data": null
                },
                {
                    "ranking": "68",
                    "item_id": "9523550",
                    "item_name": "迷失 ⊱乖入我❤⊰",
                    "item_value": 363660,
                    "json_data": null
                },
                {
                    "ranking": "69",
                    "item_id": "875250405",
                    "item_name": "真豬奶茶゛",
                    "item_value": 360500,
                    "json_data": null
                },
                {
                    "ranking": "70",
                    "item_id": "139045372",
                    "item_name": "情&义",
                    "item_value": 353920,
                    "json_data": null
                },
                {
                    "ranking": "71",
                    "item_id": "1460918525",
                    "item_name": "✿阿泽♬ ℡",
                    "item_value": 351200,
                    "json_data": null
                },
                {
                    "ranking": "72",
                    "item_id": "1504286415",
                    "item_name": "0.0",
                    "item_value": 349900,
                    "json_data": null
                },
                {
                    "ranking": "73",
                    "item_id": "69243301",
                    "item_name": "球球 心情烦躁，别理我。",
                    "item_value": 349620,
                    "json_data": null
                },
                {
                    "ranking": "74",
                    "item_id": "15046261",
                    "item_name": "蓝",
                    "item_value": 346770,
                    "json_data": null
                },
                {
                    "ranking": "75",
                    "item_id": "1570154732",
                    "item_name": "靳 。",
                    "item_value": 339870,
                    "json_data": null
                },
                {
                    "ranking": "76",
                    "item_id": "111401612",
                    "item_name": "混  混     『非黄勿上』断刷",
                    "item_value": 339812,
                    "json_data": null
                },
                {
                    "ranking": "77",
                    "item_id": "1557040923",
                    "item_name": "L丶好厉害",
                    "item_value": 323700,
                    "json_data": null
                },
                {
                    "ranking": "78",
                    "item_id": "1457199024",
                    "item_name": "单",
                    "item_value": 322050,
                    "json_data": null
                },
                {
                    "ranking": "79",
                    "item_id": "4288512",
                    "item_name": "TT",
                    "item_value": 319750,
                    "json_data": null
                },
                {
                    "ranking": "80",
                    "item_id": "691280203",
                    "item_name": "夜",
                    "item_value": 319170,
                    "json_data": null
                },
                {
                    "ranking": "81",
                    "item_id": "119290316",
                    "item_name": "諨宝宝",
                    "item_value": 317090,
                    "json_data": null
                },
                {
                    "ranking": "82",
                    "item_id": "104632523",
                    "item_name": "兮情锅",
                    "item_value": 317010,
                    "json_data": null
                },
                {
                    "ranking": "83",
                    "item_id": "846029089",
                    "item_name": "潇！",
                    "item_value": 313030,
                    "json_data": null
                },
                {
                    "ranking": "84",
                    "item_id": "1311346564",
                    "item_name": "简单就好、",
                    "item_value": 299980,
                    "json_data": null
                },
                {
                    "ranking": "85",
                    "item_id": "532307668",
                    "item_name": "索林劥，",
                    "item_value": 298170,
                    "json_data": null
                },
                {
                    "ranking": "86",
                    "item_id": "1565559323",
                    "item_name": "丶sister๓淡",
                    "item_value": 297290,
                    "json_data": null
                },
                {
                    "ranking": "87",
                    "item_id": "1615909044",
                    "item_name": "金山祝6829开业大吉",
                    "item_value": 296836,
                    "json_data": null
                },
                {
                    "ranking": "88",
                    "item_id": "463517320",
                    "item_name": "TiMi",
                    "item_value": 292800,
                    "json_data": null
                },
                {
                    "ranking": "89",
                    "item_id": "1358742598",
                    "item_name": "余额不足（守护苏苏）",
                    "item_value": 292760,
                    "json_data": null
                },
                {
                    "ranking": "90",
                    "item_id": "1437461370",
                    "item_name": "稚久",
                    "item_value": 292430,
                    "json_data": null
                },
                {
                    "ranking": "91",
                    "item_id": "80545117",
                    "item_name": "猴  子ღ",
                    "item_value": 285440,
                    "json_data": null
                },
                {
                    "ranking": "92",
                    "item_id": "1190632772",
                    "item_name": "┃丐帮┃ˇ啊二",
                    "item_value": 284992,
                    "json_data": null
                },
                {
                    "ranking": "93",
                    "item_id": "108634980",
                    "item_name": "霸王学习机",
                    "item_value": 279940,
                    "json_data": null
                },
                {
                    "ranking": "94",
                    "item_id": "62136573",
                    "item_name": "Ｋｒａｚｙ  T 爷",
                    "item_value": 276902,
                    "json_data": null
                },
                {
                    "ranking": "95",
                    "item_id": "437944219",
                    "item_name": " ☂ ╰孙大大‭ゝ‬",
                    "item_value": 275940,
                    "json_data": null
                },
                {
                    "ranking": "96",
                    "item_id": "7737139",
                    "item_name": "阿板",
                    "item_value": 272844,
                    "json_data": null
                },
                {
                    "ranking": "97",
                    "item_id": "80610163",
                    "item_name": "芙蓉王ღ\u0001",
                    "item_value": 269562,
                    "json_data": null
                },
                {
                    "ranking": "98",
                    "item_id": "494835340",
                    "item_name": "VV",
                    "item_value": 268010,
                    "json_data": null
                },
                {
                    "ranking": "99",
                    "item_id": "108605668",
                    "item_name": "阿念",
                    "item_value": 267430,
                    "json_data": null
                },
                {
                    "ranking": "100",
                    "item_id": "1144845394",
                    "item_name": "【独钟】",
                    "item_value": 263020,
                    "json_data": null
                }
            ]
        },
        {
            "name": "taskFinishRank",
            "display_name": "公会任务榜",
            "award_descr": "",
            "type": "channel",
            "show_logo": "1",
            "rank": "8",
            "data": [
                {
                    "ranking": 1,
                    "item_id": 10941502,
                    "item_name": "10941502",
                    "item_value": 5678,
                    "json_data": null,
                    "logo": "http://hdzx.g.yy.com/images/channel.png"
                },
                {
                    "ranking": 2,
                    "item_id": 48335080,
                    "item_name": "37660",
                    "item_value": 3637,
                    "json_data": null
                },
                {
                    "ranking": 3,
                    "item_id": 26203224,
                    "item_name": "26203224",
                    "item_value": 2230,
                    "json_data": null
                },
                {
                    "ranking": 4,
                    "item_id": 84311811,
                    "item_name": "4923",
                    "item_value": 1680,
                    "json_data": null
                },
                {
                    "ranking": 5,
                    "item_id": 85438768,
                    "item_name": "203526",
                    "item_value": 449,
                    "json_data": null
                },
                {
                    "ranking": 6,
                    "item_id": 1801517,
                    "item_name": "1801517",
                    "item_value": 154,
                    "json_data": null
                },
                {
                    "ranking": 7,
                    "item_id": 74410884,
                    "item_name": "74410884",
                    "item_value": 151,
                    "json_data": null
                },
                {
                    "ranking": 8,
                    "item_id": 5156605,
                    "item_name": "5156605",
                    "item_value": 93,
                    "json_data": null
                },
                {
                    "ranking": 9,
                    "item_id": 48060645,
                    "item_name": "2582",
                    "item_value": 77,
                    "json_data": null
                },
                {
                    "ranking": 10,
                    "item_id": 29408038,
                    "item_name": "4806",
                    "item_value": 62,
                    "json_data": null
                },
                {
                    "ranking": 11,
                    "item_id": 32798367,
                    "item_name": "32798367",
                    "item_value": 54,
                    "json_data": null
                },
                {
                    "ranking": 12,
                    "item_id": 66957779,
                    "item_name": "909",
                    "item_value": 17,
                    "json_data": null
                },
                {
                    "ranking": 13,
                    "item_id": 29079076,
                    "item_name": "8000",
                    "item_value": 12,
                    "json_data": null
                },
                {
                    "ranking": 14,
                    "item_id": 35282188,
                    "item_name": "35282188",
                    "item_value": 11,
                    "json_data": null
                },
                {
                    "ranking": 15,
                    "item_id": 54998431,
                    "item_name": "8323",
                    "item_value": 9,
                    "json_data": null
                },
                {
                    "ranking": 16,
                    "item_id": 49018709,
                    "item_name": "611",
                    "item_value": 5,
                    "json_data": null
                },
                {
                    "ranking": 17,
                    "item_id": 10781065,
                    "item_name": "6606",
                    "item_value": 4,
                    "json_data": null
                },
                {
                    "ranking": 18,
                    "item_id": 41183379,
                    "item_name": "41183379",
                    "item_value": 2,
                    "json_data": null
                },
                {
                    "ranking": 19,
                    "item_id": 39980824,
                    "item_name": "39980824",
                    "item_value": 2,
                    "json_data": null
                },
                {
                    "ranking": 20,
                    "item_id": 39167669,
                    "item_name": "39167669",
                    "item_value": 2,
                    "json_data": null
                },
                {
                    "ranking": 21,
                    "item_id": 10815177,
                    "item_name": "10815177",
                    "item_value": 2,
                    "json_data": null
                },
                {
                    "ranking": 22,
                    "item_id": 91013131,
                    "item_name": "91013131",
                    "item_value": 1,
                    "json_data": null
                },
                {
                    "ranking": 23,
                    "item_id": 88980579,
                    "item_name": "6879",
                    "item_value": 1,
                    "json_data": null
                },
                {
                    "ranking": 24,
                    "item_id": 40440103,
                    "item_name": "7636",
                    "item_value": 1,
                    "json_data": null
                },
                {
                    "ranking": 25,
                    "item_id": 38542939,
                    "item_name": "5561",
                    "item_value": 1,
                    "json_data": null
                },
                {
                    "ranking": 26,
                    "item_id": 28338864,
                    "item_name": "28338864",
                    "item_value": 1,
                    "json_data": null
                },
                {
                    "ranking": 27,
                    "item_id": 22923067,
                    "item_name": "3036",
                    "item_value": 1,
                    "json_data": null
                },
                {
                    "ranking": 28,
                    "item_id": 22887784,
                    "item_name": "1898",
                    "item_value": 1,
                    "json_data": null
                },
                {
                    "ranking": 29,
                    "item_id": 21563928,
                    "item_name": "21563928",
                    "item_value": 1,
                    "json_data": null
                }
            ]
        }
    ]
}
module.exports = Regular.extend({
    template: require('./rankList.rgl'),
    name:'rankList',
    data: {
        //rankData: null
    },
    init: function () {
        var self = this;
        //
        //self.data.rankData = testData.data;
        //
        //self.$update();

    }
})