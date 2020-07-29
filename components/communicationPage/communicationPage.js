// components/communicationPage/communicationPage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'默认值',
      observer:function(newVal,oldVal){  //检测跟踪页面传递过来的值，和组件的默认值
        console.log(newVal,oldVal);
      }
    }
  },
  externalClasses:['titleclass'],
  options:{
    multipleSlots:true
  },

  /**
   * 组件的初始数据
   */
  data: {
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //3、组件向外传递事件
    handleIncrement(){
      this.triggerEvent('increment',{name:'test'})
    },
    //4、页面直接调用组件修改数据/方法
    increment(num){
      this.setData({counter:this.data.counter + num});
    }
  }
})
