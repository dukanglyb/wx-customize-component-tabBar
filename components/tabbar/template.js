const tabBar = {
  "color": "#666666",
  "selectedColor": "#FD820A",
  "backgroundColor": "#FFF",
  "list": [
    {
      "active": true,
      "pagePath": "/pages/index/index",
      "iconPath": "/images/tabbaricon/index.png",
      "selectedIconPath": "/images/tabbaricon/index2.png",
      "text": "首页"
    },
    {
      "active": false,
      "pagePath": "/pages/news/news",
      "iconPath": "/images/tabbaricon/toutiao.png",
      "selectedIconPath": "/images/tabbaricon/toutiao2.png",
      "text": "头条"
    },
    {
      "active": false,
      "pagePath": "/pages/news/news",
      "iconPath": "/images/tabbaricon/saoyisao3.png",
      "selectedIconPath": "/images/tabbaricon/saoyisao3.png",
      "text": "",
      "isScanit": true
    },
    {
      "active": false,
      "pagePath": "/pages/tasks/tasks",
      "iconPath": "/images/tabbaricon/renwu.png",
      "selectedIconPath": "/images/tabbaricon/renwu2.png",
      "text": "任务"
    },
    {
      "active": false,
      "pagePath": "/pages/mine/mine",
      "iconPath": "/images/tabbaricon/wode.png",
      "selectedIconPath": "/images/tabbaricon/wode2.png",
      "text": "我的"
    }
  ]
}

module.exports = tabBar