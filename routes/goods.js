var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/test', function(req, res, next) {

  //数据来自数据库 MySQL  MongoDB
  var list = [
    {goods_id:1234,goods_name:"IphoneX1111",goods_price:123.45},
    {goods_id:2345,goods_name:"IphoneX2222",goods_price:123.45},
    {goods_id:4567,goods_name:"IphoneX3333",goods_price:123.45},
    {goods_id:5678,goods_name:"IphoneX4444",goods_price:123.45},
    {goods_id:7890,goods_name:"IphoneX5555",goods_price:123.45},
  ];

  res.send(list);
});

/**
 * 首页商品列表
 */
router.get('/home', function(req, res, next) {

  //数据来自数据库 MySQL  MongoDB
  var data = {
    errno : 0,
    msg: 'ok',
    data: {
      list: [   //商品列表
        {goods_id:1234,goods_name:"IphoneX1111",goods_price:123.45},
        {goods_id:2345,goods_name:"IphoneX2222",goods_price:123.45},
        {goods_id:4567,goods_name:"IphoneX3333",goods_price:123.45},
        {goods_id:5678,goods_name:"IphoneX4444",goods_price:123.45},
        {goods_id:7890,goods_name:"IphoneX5555",goods_price:123.45},
        {goods_id:9999,goods_name:"IphoneX6666",goods_price:123.45},
      ],
      slider: [   //轮播图
        {id:123,src:'/img/banner1.png',href:'http://www.baidu.com'},
        {id:234,src:'/img/banner2.png',href:'http://www.baidu.com'},
        {id:345,src:'/img/banner3.png',href:'http://www.baidu.com'},
        {id:456,src:'/img/banner4.png',href:'http://www.baidu.com'},
      ]
    }
  };

  res.send(data);
});

module.exports = router;
