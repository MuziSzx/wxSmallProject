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
    pictureList: null,
    titles: null
  },
  handleShow: function handleShow() {
    var allData = this.data.column11;
    for (var i = 0; i < allData.length; i++) {
      allData[i].show = false;
    }
    this.setData({
      column11: allData
    });
  },
  maskhide: function maskhide() {
    var allData = this.data.column11;
    for (var i = 0; i < allData.length; i++) {
      allData[i].show = false;
    }
    this.setData({
      column11: allData
    });
  },
  previewImage: function previewImage(e) {
    console.log(e);
    var pictureList = e.currentTarget.dataset.src;
    wx.previewImage({
      current: this.data.wenyi, // 当前显示图片的http链接
      urls: [pictureList] // 需要预览的图片http链接列表
    });
  },
  openPopup: function openPopup(e) {
    // console.log(e)
    var title = e.currentTarget.dataset.title;
    // console.log(this.data.column11);
    var allData = this.data.column11;
    for (var i = 0; i < allData.length; i++) {
      if (title == allData[i].title) {
        allData[i].show = true;
        console.log(allData);
        this.setData({
          column11: allData
        });
      }
    }
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
        status: "1", //status值为1，使用二维码图片地址；status值为2，使用跳转地址,
        show: false
      }, {
        icon_src: "../../img/wenyi.png",
        title: "文艺乎",
        desc: "原来你和我一样，偶尔也会想要安静下来写点什么，或是翻着别人的五味杂陈轻笑人生，在繁杂又枯燥的日子里做着文艺的梦",
        QRcode_src: "https://media.ifanrusercontent.com/user_files/trochili/67/b8/67b846c1128063409dc9906cc2509a555d98b1a8-abca61bf3212ec0eaa196da1248759e725e8b333.jpg",
        app_url: "http://fanyi.baidu.com",
        status: "1",
        show: false
      }, {
        icon_src: "../../img/qiong.png",
        title: "史上最囧挑战Lite",
        desc: "史上最囧的挑战，史上最囧的答题，史上最难的时间",
        QRcode_src: "https://media.ifanrusercontent.com/user_files/trochili/d0/81/d081f66746a1418ca95cf72f36b6f0183b2a0e6a-f4bad74529d3a2590ef0cf8728251a77aa0c0e53.jpg",
        app_url: "http://fanyi.baidu.com",
        status: "1",
        show: false
      }]
    }, {
      column_id: "12",
      content: [{
        icon_src: "http://fanyi.baidu.com/translate?aldt",
        title: "趣味视力表",
        desc: "有趣好玩的视力表，明星视力表",
        QRcode_src: "http://fanyi.baidu.com/translate?a5564sd",
        app_url: "http://fanyi.baidu.com",
        status: "1",
        show: false
      }, {
        icon_src: "http://fanyi.baidu.com/translate?aldt",
        title: "趣味视力表",
        desc: "有趣好玩的视力表，明星视力表",
        QRcode_src: "http://fanyi.baidu.com/translate?a5564sd",
        app_url: "http://fanyi.baidu.com",
        status: "1",
        show: false
      }]
    }];

    // console.log(couul);
    for (var i = 0; i < couul.length; i++) {
      if (couul[i].column_id == "11") {
        // console.log(couul[i].content.title);
        this.setData({
          column11: couul[i].content
        });
      } else if (couul[i].column_id == "12") {
        console.log(couul[i].content);
      } else if (couul[i].column_id == "13") {
        console.log(couul[i].content);
      }
    }
  }
});