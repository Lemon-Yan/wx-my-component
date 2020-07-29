// pages/extend/communicationBackB/communicationBack.js
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
   let pages = getCurrentPages(); 
   let pageA = pages[pages.length - 2]; 
   pageA.setData({
     phone: phone
   }) 
   wx.navigateBack({
     delta: 1
   })
  }, 
   
})