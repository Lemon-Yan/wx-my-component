// pages/interface/interface.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isListChild: false,
    isSlideChild: false,
    listArr: [{
      title: '授权',
      checked: false,
      child: [{
        title: "登录授权",
        page: '../interfacePage/login/login'
      },
      {
        title: "分享",
        page: '../interfacePage/share/share'
      },
      {
        title: "列表项-图标2",
        page: '../componentPage/listIcon2/listIcon2'
      },
      {
        title: "列表项-左滑删除",
        page: '../componentPage/listSlide/listSlide'
      }]
    }, {
      title: '常用功能',
      checked: false,
      child: [{
        title: "打开图片、文档",
        page: '../componentPage/slideImage/slideImage',
      },
      {
        title: "滑动组件",
        page: ''
      }]
    },{
      title:"模态弹窗",
      checked:false,
      child:[{
        title:'模态弹窗',
        page:'../componentPage/module/module'
      }]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //点击展开列表项
  slideList(e) {
    let listIndex = e.currentTarget.dataset.index,
      listArr = this.data.listArr;
    listArr[listIndex].checked = !listArr[listIndex].checked;
    // console.log('listIndex', listIndex);
    // console.log('listArr', listArr);
    this.setData({
      listArr
    })
  },
  //打开列表页
  listPage(e) {
    let page = e.currentTarget.dataset.page;
    console.log(page);
    if (page) {
      wx.navigateTo({
        url: page
      })
    }
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