//app.js
//模版数据
const tabBarTpl = require('/utils/template.js')
App({
  onLaunch: function () {
    //隐藏系统tabbar
    wx.hideTabBar();
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  editTabbar: function () {
    let _tabbar = this.globalData.tabBar;
    let _currentPages = getCurrentPages();
    let _this = _currentPages[_currentPages.length - 1];
    let _pagePath = _this.route;
    (_pagePath.indexOf('/') != 0) && (_pagePath = '/' + _pagePath);
    for (let i in _tabbar.list) {
      _tabbar.list[i].active = false;
      (_tabbar.list[i].pagePath == _pagePath) && (_tabbar.list[i].active = true);
    }
    _this.setData({
      tabBar: _tabbar
    });
  },
  globalData: {
    userInfo: null,
    tabBar: tabBarTpl
  }
})