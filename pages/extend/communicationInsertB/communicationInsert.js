// pages/extend/communicationInsertB/communicationInsert.js
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
    //向上个页面传值
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit('eventPhone', { phone: phone });
  }, 
})