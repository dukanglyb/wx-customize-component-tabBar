//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabbar: {},
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
    // 自定义tabBar赋值
    this.setData({
      tabBar: app.globalData.tabBar
    })
    app.editTabbar();
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})