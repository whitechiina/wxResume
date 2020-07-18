// pages/blog/blog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    following: 0,
    followers:0,
    start: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHomeList();
    this.getstart();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.attached();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  attached: function() {
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();
    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData({
            starCount: i,
            forksCount: i,
            visitTotal: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData({
          starCount: that.coutNum(3000),
          forksCount: that.coutNum(568),
          visitTotal: that.coutNum(24000)
        })
      }
    }
    wx.hideLoading()
  },
  coutNum: function(e) {
    if (e > 1000 && e < 10000) {
      e = (e / 1000).toFixed(1) + 'K'
    }
    if (e > 10000) {
      e = (e / 10000).toFixed(1) + 'W'
    }
    return e
  },
  
  CopyLink: function(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: res => {
        wx.showToast({
          title: '链接已复制',
          duration: 1000,
        })
      }
    })
  },

  //获取网络数据
  getHomeList() {
    var that = this;
    wx.request({
      url: "https://api.github.com/users/whitechiina",
      success: function (res) { //请求成功
        that.setData({
          following: res.data.following,
          followers: res.data.followers
        })
      },
    })
  },

  // start数量统计
  getstart() {
    var that = this;
    wx.request({
      url: 'https://api.github.com/users/whitechiina/repos?page=1',
      success: function (res) { //请求成功
        let total = 0;
        res.data.forEach(item => {
          total += item.stargazers_count
        })
        that.setData({
          start: total
        })
      }
    })
  }
})