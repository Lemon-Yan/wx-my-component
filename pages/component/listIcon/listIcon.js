// pages/componentPage/listIcon/listIcon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myList: [{
      icon: '../../../images/my/money.png',
      title: '钱包',
      tabIndex: 1
    }, {
      icon: '../../../images/my/note.png',
      title: '随手记',
      tabIndex: 2
    }, {
      icon: '../../../images/my/active.png',
      title: '我的活动',
      tabIndex: 3
    }, {
      icon: '../../../images/my/download.png',
      title: 'OK！软件下载',
      tabIndex: 4
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //查看
  see(e) {
    let tabIndex=e.currentTarget.dataset.index;
    console.log(tabIndex)
    wx.showToast({
      title: '功能开发中...',
      icon:'none',
      duration:2000
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})