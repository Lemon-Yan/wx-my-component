// pages/extend/communicationBackA/communicationBack.js
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

  insert(){
   wx.navigateTo({
     url: '../communicationBackB/communicationBack',
   })
  },  
})