// pages/interface/systemInfo/systemInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    systemInfo: {}
  },
  getSystemInfo() {
    const that = this
    wx.getSystemInfo({
      success(res) {
        that.setData({
          systemInfo: res
        })
      }
    })
  }
   
})