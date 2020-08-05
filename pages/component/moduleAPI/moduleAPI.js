// pages/component/moduleAPI/moduleAPI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
    modalHidden2: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  actionSheetTap() {
    wx.showActionSheet({
      itemList: ['item1', 'item2', 'item3', 'item4'],
      success(e) {
        console.log(e.tapIndex)
      }
    })
  },

  modalTap() {
    wx.showModal({
      title: '弹窗标题',
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      showCancel: false,
      confirmText: '确定'
    })
  },
  noTitlemodalTap() {
    wx.showModal({
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      confirmText: '确定',
      cancelText: '取消'
    })
  }
})