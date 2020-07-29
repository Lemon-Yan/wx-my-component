// pages/extend/toNav/toNav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ["list0", "list1", "list2", "list3", "list4", "list5", "list6", "list7", "list8", "list9", "list10", "list11", "list12", "list13", "list14", "list15", "list16", "list17", "list18", "list19", "list20", "list21", "list22", "list23", "list24", "list25", "list26", "list27", "list28", "list29"],
    toView: 'eeede'
  },
  jumpTo: function (e) {
    // 获取标签元素上自定义的 data-opt 属性的值 
    //原文地址：https://blog.csdn.net/h357650113/article/details/78383175?utm_source=debugrun&utm_medium=referral
    let target = e.currentTarget.dataset.opt;
    this.setData({
      toView: target
    })
  },
})