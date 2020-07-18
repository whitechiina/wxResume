//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    wx.request({
      url: '',
      // url: 'https://api.github.com/users/jackchen0120/repos',
      // url: 'https://api.douban.com/v2/movie/subject/30261964?apikey=0df993c66c0c636e29ecbb5344252a4a',
      header: {
        "content-type": "json"
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
})
