//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //被点击首页导航菜单索引
    currnetIndexNav: 0,
    //首页导航数据
    navList:['首页','最新消息','图像识别', '目标检测','人脸识别','语音识别','语音克隆', ],
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 点击首页导航按钮
  activeNav(e){
    // console.log(e.target.dataset.index)
    this.setData({
      currnetIndexNav: e.target.dataset.index
    })
  },

  // //获取首页导航数据
  // getnavList(){
  //   let that=this;
  //   //利用小程序内置发送请求方法
  //   wx.request({
  //     url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
  //     success(res){
  //       // console.log(res);
  //       if(res.data.code===0){
  //         that.setData({
  //           navList:res.data.data.navList
  //         })
  //       }
  //     }
  //   })
  // },

  // onLoad:function(options){
  //   //获取首页导航数据
  //   this.getnavList();
  // },

  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})

// Page({})
// App({

//   /**
//    * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
//    */
//   onLaunch: function () {
    
//   },

//   /**
//    * 当小程序启动，或从后台进入前台显示，会触发 onShow
//    */
//   onShow: function (options) {
    
//   },

//   /**
//    * 当小程序从前台进入后台，会触发 onHide
//    */
//   onHide: function () {
    
//   },

//   /**
//    * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
//    */
//   onError: function (msg) {
    
//   }
// })
