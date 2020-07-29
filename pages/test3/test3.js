// pages/test3/test3.js
let onfire = require('../../utils/onfire.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    onfire.fire('eventPhone',{phone:phone});
  }, 
})