//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    logs: [],
    tabBar: {}
  },
  onLoad: function (options) {
    this.setData({
      tabBar: app.globalData.tabBar
    })
    app.editTabbar();
  }
})
