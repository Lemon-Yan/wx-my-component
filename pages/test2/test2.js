// pages/test2/test2.js 
let onfire = require('../../utils/onfire.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   //绑定事件，名为eventPhone的事件发生时触发
   onfire.on('eventPhone', e => {
    console.log(e);
    this.setData({
      phone: e.phone
    })
  })
  },

  bindPhone(e) {
    let phone = e.detail.value;
    console.log(phone);
    this.setData({
      phone
    })
  },

  setPhone() {
    let phone = this.data.phone;
    console.log(phone);
    wx.navigateBack({
      delta: 1
    }) 
  },

  insert() {
    let self = this;
    wx.navigateTo({
      url: '../test3/test3', 
    })
  },
})