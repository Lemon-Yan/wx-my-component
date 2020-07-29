// pages/extend/communicationJsB/communicationJs.js
let onfire=require('../../../utils/onfire.js');
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

  bindPhone(e){
   let phone=e.detail.value;
   console.log(phone);
   this.setData({
     phone
   })
  },

  setPhone(){
   let phone=this.data.phone;
   console.log(phone);
   // 触发名为eventPhone的事件，并且携带变量值。
   onfire.fire('eventPhone',{phone:phone});
   wx.navigateBack({
     delta: 1
   })
  },
 
})