'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    current11: 0,
    current: 0,
    items4: ['../../img/swiper1.png', '../../img/swiper2.png', '../../img/swiper3.png'],
    show5: false,
    show6: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    quwei: '../../img/quwei.png',
    wenyifu: '../../img/wenyi.png',
    relation: '../../img/relationship.png',
    quest: '../../img/quest.png',
    qiong: '../../img/qiong.png',
    color: '../../img/color.png',
    imgalist: ['https://media.ifanrusercontent.com/user_files/trochili/bb/84/bb842752479463c573e0b02864469ec23293fdd3-6681daa63a15d8a1c35a60bcdddc2ef16c17285e.jpg'],
    wenyi: 'https://media.ifanrusercontent.com/user_files/trochili/67/b8/67b846c1128063409dc9906cc2509a555d98b1a8-abca61bf3212ec0eaa196da1248759e725e8b333.jpg',
    colorfight: 'https://media.ifanrusercontent.com/user_files/trochili/e4/43/e4432b35b514111d5dc87e131e6abf611d71bf0d-45ec09d70c87667df54ce6cf41682e589a9b90fb.jpg',
    shishan: 'https://media.ifanrusercontent.com/user_files/trochili/83/ae/83ae719c8f87af97107d3f366c6a42f74187c8c4-35536ab36e1721dc4b48ee61b273fc3a68008b9d.jpg',
    renami: 'https://media.ifanrusercontent.com/user_files/trochili/d0/81/d081f66746a1418ca95cf72f36b6f0183b2a0e6a-f4bad74529d3a2590ef0cf8728251a77aa0c0e53.jpg',
    kunhuo: 'https://media.ifanrusercontent.com/user_files/trochili/38/7e/387e909d2649d9097a9f3618167a35548679afce-4cf3408d213bac3771ef180facfdb1e73a9ef9e4.jpg'
  },
  handleShow1: function handleShow1() {
    this.setData({
      show1: false
    });
  },
  handleShow2: function handleShow2() {
    this.setData({
      show2: false
    });
  },
  handleShow3: function handleShow3() {
    this.setData({
      show2: false
    });
  },
  handleShow4: function handleShow4() {
    this.setData({
      show4: false
    });
  },
  handleShow5: function handleShow5() {
    this.setData({
      show5: false
    });
  },
  handleShow6: function handleShow6() {
    this.setData({
      show6: false
    });
  },

  previewImage: function previewImage(e) {
    wx.previewImage({
      current: this.data.imgalist, // 当前显示图片的http链接   
      urls: this.data.imgalist // 需要预览的图片http链接列表   
    });
  },
  previewImage1: function previewImage1(e) {
    wx.previewImage({
      current: this.data.wenyi, // 当前显示图片的http链接   
      urls: ['https://media.ifanrusercontent.com/user_files/trochili/67/b8/67b846c1128063409dc9906cc2509a555d98b1a8-abca61bf3212ec0eaa196da1248759e725e8b333.jpg', 'https://media.ifanrusercontent.com/user_files/trochili/67/b8/67b846c1128063409dc9906cc2509a555d98b1a8-abca61bf3212ec0eaa196da1248759e725e8b333.jpg'] // 需要预览的图片http链接列表   
    });
  },
  previewImage2: function previewImage2(e) {
    wx.previewImage({
      current: this.data.wenyi, // 当前显示图片的http链接   
      urls: ['https://media.ifanrusercontent.com/user_files/trochili/e4/43/e4432b35b514111d5dc87e131e6abf611d71bf0d-45ec09d70c87667df54ce6cf41682e589a9b90fb.jpg', 'https://media.ifanrusercontent.com/user_files/trochili/e4/43/e4432b35b514111d5dc87e131e6abf611d71bf0d-45ec09d70c87667df54ce6cf41682e589a9b90fb.jpg'] // 需要预览的图片http链接列表   
    });
  },
  previewImage3: function previewImage3(e) {
    wx.previewImage({
      current: this.data.wenyi, // 当前显示图片的http链接   
      urls: ['https://media.ifanrusercontent.com/user_files/trochili/83/ae/83ae719c8f87af97107d3f366c6a42f74187c8c4-35536ab36e1721dc4b48ee61b273fc3a68008b9d.jpg', 'https://media.ifanrusercontent.com/user_files/trochili/83/ae/83ae719c8f87af97107d3f366c6a42f74187c8c4-35536ab36e1721dc4b48ee61b273fc3a68008b9d.jpg'] // 需要预览的图片http链接列表   
    });
  },
  previewImage4: function previewImage4(e) {
    wx.previewImage({
      current: this.data.wenyi, // 当前显示图片的http链接   
      urls: ['https://media.ifanrusercontent.com/user_files/trochili/d0/81/d081f66746a1418ca95cf72f36b6f0183b2a0e6a-f4bad74529d3a2590ef0cf8728251a77aa0c0e53.jpg', 'https://media.ifanrusercontent.com/user_files/trochili/d0/81/d081f66746a1418ca95cf72f36b6f0183b2a0e6a-f4bad74529d3a2590ef0cf8728251a77aa0c0e53.jpg'] // 需要预览的图片http链接列表   
    });
  },
  previewImage5: function previewImage5(e) {
    wx.previewImage({
      current: this.data.wenyi, // 当前显示图片的http链接   
      urls: ['https://media.ifanrusercontent.com/user_files/trochili/38/7e/387e909d2649d9097a9f3618167a35548679afce-4cf3408d213bac3771ef180facfdb1e73a9ef9e4.jpg', 'https://media.ifanrusercontent.com/user_files/trochili/38/7e/387e909d2649d9097a9f3618167a35548679afce-4cf3408d213bac3771ef180facfdb1e73a9ef9e4.jpg'] // 需要预览的图片http链接列表   
    });
  },
  openPopup1: function openPopup1(e) {
    var show = e.currentTarget.dataset.show;
    this.setData({
      show1: show
    });
  },
  openPopup2: function openPopup2(e) {
    var show = e.currentTarget.dataset.show;
    this.setData({
      show2: show
    });
  },
  openPopup3: function openPopup3(e) {
    var show = e.currentTarget.dataset.show;
    this.setData({
      show3: show
    });
  },
  openPopup4: function openPopup4(e) {
    var show = e.currentTarget.dataset.show;
    this.setData({
      show4: show
    });
  },
  openPopup5: function openPopup5(e) {
    var show = e.currentTarget.dataset.show;
    this.setData({
      show5: show
    });
  },
  openPopup6: function openPopup6(e) {
    var show = e.currentTarget.dataset.show;
    this.setData({
      show6: show
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
        url: '../detail/detail'
      });
    }
  },
  bindchange: function bindchange(e) {
    //轮播图发生改变
    this.setData({
      current: e.detail.current
    });
  }

});