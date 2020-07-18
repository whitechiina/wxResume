// pages/blog/blog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getstart();
  },
 
  // start数量统计
  getstart() {
    var that = this;
    wx.request({
      url: 'https://api.github.com/users/whitechiina/repos?page=1',
      success: function (res) { //请求成功
        console.log(res)
        that.setData({
          list: res.data
        })
      }
    })
  }
})