// pages/interface/newworkStatus/newworkStatus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasNetworkType: false
  },

  getNetworkType() {
    const that = this
    wx.getNetworkType({
      success(res) {
        console.log(res)
        that.setData({
          hasNetworkType: true,
          networkType: res.subtype || res.networkType
        })
      }
    })
  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  }
})