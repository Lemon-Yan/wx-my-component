// components/prompt/prompt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShowPrompt: {
      type: Boolean,
      value: false
    },
    promptTitle: {
      type: String,
      value: ''
    },
    placeholderTxt: {
      type: String,
      value: ''
    },
    promptVal: {
      type: String,
      value: ''
    } 
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLength20: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取输入的值
    promptInput(e) {
      let inputVal = e.detail.value;
      // console.log(inputVal);
      //不能超过20字
      if (inputVal.length > 20) {
        this.setData({
          isLength20: true
        })
      } else {
        this.setData({
          promptVal: inputVal,
          isLength20: false
        })
      }
    },
    //取消
    promptCancel() {
      this.setData({
        isShowPrompt: false
      })
    },
    //确定
    promptConfirm() {
      let promptVal = this.data.promptVal,
        isLength20 = this.data.isLength20,
        placeholderTxt=this.data.placeholderTxt;
      // console.log(promptVal);
      //不能超过20字
      if (isLength20) {
        return false;
      }
      if (promptVal) {
        this.setData({
          isShowPrompt: false
        })
        //把值传回调用页面中
        this.triggerEvent('promptConfirmTri',{promptVal}); 
      } else {
        wx.showToast({
          title: placeholderTxt,
          icon: 'none',
          duration: 2000
        })
      }
    }
  }
})