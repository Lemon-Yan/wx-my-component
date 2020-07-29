// pages/extend/communicationJS/communicationJs.js
let onfire = require('../../../utils/onfire.js');
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
    //绑定事件，名为eventPhone的事件发生时触发
    onfire.on('eventPhone', e => {
      console.log(e);
      this.setData({
        phone: e.phone
      })
    })
  },

  insert() {
    wx.navigateTo({
      url: '../communicationJsB/communicationJs',
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //取消事件绑定
    onfire.un('eventPhone');
  },
})