// pages/userInfo/userInfo.js
var config = require('../../utils/config.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null
  },
  goPhone() {
    wx.navigateTo({
      url: './phone/phone',
    })
  },
  goEmail() {
    wx.navigateTo({
      url: './email/email',
    })
  },
  goUsername() {
    wx.navigateTo({
      url: './username/username',
    })
  },
  getUser() {
    var that = this
    wx.request({
      url: config.host + 'appUser/getUser',
      data: {
        id: app.globalData.userInfo.id,
        mark: app.globalData.userInfo.mark,
        mark_id: app.globalData.userInfo.mark_id
      },
      success(res) {
        if (res.data !== -1) {
          that.setData({
            userInfo: res.data[0]
          })
          app.globalData.userInfo = res.data[0]
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUser()
    this.setData({
      userInfo: app.globalData.userInfo
    })
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

  }
})