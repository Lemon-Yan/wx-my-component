// pages/extend/communicationInsertA/communicationInsert.js
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

  insert() {
    let self = this;
    wx.navigateTo({
      url: '../test2/test2',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        eventPhone: function (data) {
          console.log(data)
          self.setData({
            phone: data.phone
          })
        }
      }
    })
  }, 
})