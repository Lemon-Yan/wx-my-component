// pages/component/toast/toast.js
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

  toast1Tap() {
    wx.showToast({
      title: '默认'
    })
  },

  toast2Tap() {
    wx.showToast({
      title: 'duration 3000',
      duration: 3000
    })
  },

  toast3Tap() {
    wx.showToast({
      title: 'loading',
      icon: 'loading',
      duration: 5000
    })
  },

  hideToast() {
    wx.hideToast()
  } 
})