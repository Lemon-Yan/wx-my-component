// pages/componentPage/moduel/moduel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [{
      name: '测试',
      type: 'doc'
    },
    {
      name: '测试2',
      type: 'xls'
    },
    {
      name: '测试3',
      type: 'ppt'
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //打开prompt
  openPrompt() {
    this.setData({
      isShowPrompt: true,
      promptTitle: '新建文件夹',
      placeholderTxt: '请输入文件夹名称',
      promptVal: '122'
    })
  },
  //打开底部弹窗
  openActionSheet() {
    console.log(101);
    this.setData({
      isShowActionSheet: true
    })
  },
  //actionSheet
  actionSheetSelectP(e) {
    let tapIndex = e.detail.tapIndex;
    console.log('tapIndex', tapIndex);
  },
  //下载进度
  openDownloadProgress() {
    let i=0; 
    setInterval(() => { 
      this.setData({
        isShowDownload: true,
        progress:i++
      })
    }, 1000);
  },
  //prompt点击确定
  promptConfirm(e) {
    let promptVal = e.detail.promptVal;
    console.log('promptConfirm', promptVal);
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