// components/actionSheet/actionSheet.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShowActionSheet: {
      type: Boolean,
      value: false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    actionSheetArr: [{
        name: '回复',
        openType: ''
      },
      {
        name: '分享',
        openType: 'share'
      },
      {
        name: '重命名',
        openType: ''
      },
      {
        name: '移动到',
        openType: ''
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //选择某一项
    actionSheetSelect(e) {
      let tapIndex = e.currentTarget.dataset.index;
      this.setData({
        isShowActionSheet: false
      })
      this.triggerEvent('actionSheetSelectP', {
        tapIndex: tapIndex
      });
    },
    //取消
    actionSheetCancel() {
      this.setData({
        isShowActionSheet: false
      })
    }
  }
})