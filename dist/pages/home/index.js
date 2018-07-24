"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    listNames: ["暂无", "暂无", "暂无"],
    current11: 0,
    current: 0,
    items4: ["../../img/swiper1.png", "../../img/swiper2.png", "../../img/swiper3.png"],
    column11: null,
    show: false,
    quwei: "../../img/quwei.png",
    wenyifu: "../../img/wenyi.png",
    relation: "../../img/relationship.png",
    quest: "../../img/quest.png",
    qiong: "../../img/qiong.png",
    color: "../../img/color.png",
    imgalist: ["https://media.ifanrusercontent.com/user_files/trochili/bb/84/bb842752479463c573e0b02864469ec23293fdd3-6681daa63a15d8a1c35a60bcdddc2ef16c17285e.jpg"],
    wenyi: "https://media.ifanrusercontent.com/user_files/trochili/67/b8/67b846c1128063409dc9906cc2509a555d98b1a8-abca61bf3212ec0eaa196da1248759e725e8b333.jpg",
    colorfight: "https://media.ifanrusercontent.com/user_files/trochili/e4/43/e4432b35b514111d5dc87e131e6abf611d71bf0d-45ec09d70c87667df54ce6cf41682e589a9b90fb.jpg",
    shishan: "https://media.ifanrusercontent.com/user_files/trochili/83/ae/83ae719c8f87af97107d3f366c6a42f74187c8c4-35536ab36e1721dc4b48ee61b273fc3a68008b9d.jpg",
    renami: "https://media.ifanrusercontent.com/user_files/trochili/d0/81/d081f66746a1418ca95cf72f36b6f0183b2a0e6a-f4bad74529d3a2590ef0cf8728251a77aa0c0e53.jpg",
    kunhuo: "https://media.ifanrusercontent.com/user_files/trochili/38/7e/387e909d2649d9097a9f3618167a35548679afce-4cf3408d213bac3771ef180facfdb1e73a9ef9e4.jpg"
  },

  handleShow: function handleShow() {
    this.setData({
      show: false
    });
  },

  // previewImage: function(e) {
  //     console.log(this.data.column11),
  //   wx.previewImage({
  //     current: this.data.wenyi, // 当前显示图片的http链接

  //     urls: [
  //       pictureList,
  //       pictureList
  //       // "https://media.ifanrusercontent.com/user_files/trochili/d0/81/d081f66746a1418ca95cf72f36b6f0183b2a0e6a-f4bad74529d3a2590ef0cf8728251a77aa0c0e53.jpg"
  //     ] // 需要预览的图片http链接列表
  //   });
  // },
  openPopup: function openPopup(e) {
    var show = e.currentTarget.dataset.show;
    this.setData({
      show: show
    });
  },
  handleChange11: function handleChange11(e) {
    var index = e.detail.index;
    this.setData({
      current11: index
    });
  },
  handleContentChange11: function handleContentChange11(e) {
    var current = e.detail.current;
    this.setData({
      current11: current
    });
  },

  swipclick: function swipclick(e) {
    //点击图片触发事件
    console.log(this.data.current);
    if (this.data.current == "0") {
      wx.navigateTo({
        url: "../detail/detail"
      });
    }
  },
  bindchange: function bindchange(e) {
    //轮播图发生改变
    this.setData({
      current: e.detail.current
    });
  },
  onShow: function onShow(e) {
    var list = [{
      column_name: "工具",
      column_id: "11"
    }, {
      column_name: "电商",
      column_id: "12"
    }, {
      column_name: "游戏",
      column_id: "13"
    }];

    this.setData({
      listNames: list
    });
    var couul = [{
      column_id: "11",
      content: [{
        icon_src: "../../img/quwei.png",
        title: "趣味视力表",
        desc: "有趣好玩的视力表，明星视力表",
        QRcode_src: "https://media.ifanrusercontent.com/user_files/trochili/bb/84/bb842752479463c573e0b02864469ec23293fdd3-6681daa63a15d8a1c35a60bcdddc2ef16c17285e.jpg", //二维码图片地址
        app_url: "http://fanyi.baidu.com", //跳转地址
        status: "1" //status值为1，使用二维码图片地址；status值为2，使用跳转地址
      }, {
        icon_src: "../../img/wenyi.png",
        title: "文艺乎",
        desc: "原来你和我一样，偶尔也会想要安静下来写点什么，或是翻着别人的五味杂陈轻笑人生，在繁杂又枯燥的日子里做着文艺的梦",
        QRcode_src: "https://media.ifanrusercontent.com/user_files/trochili/67/b8/67b846c1128063409dc9906cc2509a555d98b1a8-abca61bf3212ec0eaa196da1248759e725e8b333.jpg",
        app_url: "http://fanyi.baidu.com",
        status: "1"
      }]
    }, {
      column_id: "12",
      content: [{
        icon_src: "http://fanyi.baidu.com/translate?aldt",
        title: "趣味视力表",
        desc: "有趣好玩的视力表，明星视力表",
        QRcode_src: "http://fanyi.baidu.com/translate?a5564sd",
        app_url: "http://fanyi.baidu.com",
        status: "1"
      }, {
        icon_src: "http://fanyi.baidu.com/translate?aldt",
        title: "趣味视力表",
        desc: "有趣好玩的视力表，明星视力表",
        QRcode_src: "http://fanyi.baidu.com/translate?a5564sd",
        app_url: "http://fanyi.baidu.com",
        status: "1"
      }]
    }];

    console.log(couul);
    for (var i = 0; i < couul.length; i++) {
      if (couul[i].column_id == "11") {
        console.log(couul[i].content);
        this.setData({
          column11: couul[i].content
          // pictureList:couul[i].content.QRcode_src
        });
      } else if (couul[i].column_id == "12") {
        console.log(couul[i].content);
      } else if (couul[i].column_id == "13") {
        console.log(couul[i].content);
      }
    }
  }
});