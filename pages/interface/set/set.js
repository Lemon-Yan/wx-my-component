// pages/interface/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setting: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getSetting() {
    wx.getSetting({
      success: (res) => {
        console.log(res)
        this.setData({setting: res.authSetting})
      }
    })
  }, 
})