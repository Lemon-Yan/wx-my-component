// pages/interface/button/button.js
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  handleContact(e) {
    console.log(e.detail)
  },

  handleGetPhoneNumber(e) {
    console.log(e.detail)
  },

  handleGetUserInfo(e) {
    console.log(e.detail)
  },

  handleOpenSetting(e) {
    console.log(e.detail.authSetting)
  },

  handleGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  chooseAddress() {
    wx.chooseAddress({
      success: (res) => {
        console.log(res)
        this.setData({
          addressInfo: res
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  chooseInvoiceTitle() {
    wx.chooseInvoiceTitle({
      success: (res) => {
        console.log(res)
        // this.setData({
        //   type: res.type,
        //   title: res.title,
        //   taxNumber: res.taxNumber,
        //   companyAddress: res.companyAddress,
        //   telephone: res.telephone,
        //   bankName: res.bankName,
        //   bankAccount: res.bankAccount
        // })
      },
      fail: (err) => {
        console.error(err)
      }
    })
  }
})