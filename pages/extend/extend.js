// pages/extend/extend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isListChild: false,
    isSlideChild: false,
    listArr: [{
      title: '页面扩展',
      checked: false,
      child: [{
        title: "沉浸式效果",
        page: './fullScreen/fullScreen'
      },
      {
        title: "点击跳到导航位置-锚点",
        page: './toNav/toNav'
      },{
        title: "聊天界面",
        page: './chat/chat'
      }]
    }, {
      title: '页面与组件',
      checked: false,
      child: [{
        title: "页面与页面之间通信-第三方js",
        page: './communicationJsA/communicationJs',
      },{
        title: "页面与页面之间通信-返回",
        page: './communicationBackA/communicationBack',
      },{
        title: "页面与页面之间通信-进入页面",
        page: './communicationBackA/communicationBack',
      },{
        title: "页面与组件",
        page: './componentAndPage/componentAndPage',
      }]
    },{
      title: '功能扩展',
      checked: false,
      child: [{
        title: "功能扩展",
        page: '',
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
})