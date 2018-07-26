"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    listNames: null, //导航列表
    current11: 0,
    current: 0, //轮播图的
    items4: ["../../img/swiper1.png", "../../img/swiper2.png", "../../img/swiper3.png"], //轮播图
    colume: null,
    column11: null, //列表data
    column12: null,
    column13: null,
    pictureList: null, //二维码
    titles: null //标题
  },
  handleShow: function handleShow(e) {
    var allData = this.data.column;
    for (var i = 0; i < allData.length; i++) {
      var ids = allData[i].content;
      for (var j = 0; j < ids.length; j++) {
        ids[j].show = false;
      }
    }
    this.setData({
      column: allData
    });
  },
  //弹框点击x号触发的事件（让所有的show变为false，即所有的弹框都是隐藏，防止下次弹出时有两个为true）
  maskhide: function maskhide() {
    var allData = this.data.column;
    for (var i = 0; i < allData.length; i++) {
      var ids = allData[i].content;
      for (var j = 0; j < ids.length; j++) {
        ids[j].show = false;
      }
    }
    this.setData({
      column: allData
    });
  },
  //弹框点击mask遮罩层触发的事件（让所有的show变为false，即所有的弹框都是隐藏，防止下次弹出时有两个为true）
  previewImage: function previewImage(e) {
    console.log(e);
    var pictureList = e.currentTarget.dataset.src;
    wx.previewImage({
      current: this.data.wenyi, // 当前显示图片的http链接
      urls: [pictureList] // 需要预览的图片http链接列表
    });
  },
  openPopup: function openPopup(e) {
    //  console.log(e);
    var id = e.currentTarget.dataset.title;
    // console.log(id);
    var allData = this.data.column;
    // console.log(allData);
    for (var i = 0; i < allData.length; i++) {
      var ids = allData[i].content;
      for (var j = 0; j < ids.length; j++) {
        if (id == ids[j].id) {
          ids[j].show = true;
          // console.log(allData);
          this.setData({
            column: allData
          });
        }
      }
    }
  },
  //点击事件，判断相同title的弹框显示出来 把data里的show 改为true
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
    if (this.data.current == "1") {
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
    var _this = this;

    wx.request({
      url: 'https://mipro.quapp.cn/mini/menu/list',
      data: {
        "type": "1"
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function success(res) {
        //  console.log(res.data.data);
        var list = res.data.data;
        _this.setData({
          listNames: list
        });
      },
      fail: function fail(res) {
        wx.showToast({
          title: '获取列表失败，请稍后重试',
          icon: 'none',
          duration: 2000
        });
      }
    });
    wx.request({
      url: 'https://mipro.quapp.cn/mini/content/list  ',
      data: {
        "type": "2"
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function success(res) {
        //  console.log(res.data.data);
        var couul = res.data.data;
        _this.setData({
          column: couul
        });
        // console.log(couul);
        for (var i = 0; i < couul.length; i++) {
          if (couul[i].column_id == "11") {
            // console.log(couul[i].content.title);
            _this.setData({
              column11: couul[i].content
            });
          } else if (couul[i].column_id == "12") {
            // console.log(couul[i].content);
            _this.setData({
              column12: couul[i].content
            });
          } else if (couul[i].column_id == "13") {
            // console.log(couul[i].content);
            _this.setData({
              column13: couul[i].content
            });
          }
        }
      },
      fail: function fail(res) {
        wx.showToast({
          title: '获取列表失败，请稍后重试',
          icon: 'none',
          duration: 2000
        });
      }
    });
  }
});