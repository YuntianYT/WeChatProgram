// pages/userInfo/email/email.js
var config = require('../../../utils/config.js')

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    email: null
  },
  emailInput: function (event) {
    this.setData({
      email: event.detail.value
    })
  },
  updateEmail(){
    wx.request({
      url: config.host + 'appUser/updateUserInfo',
      data: {
        id: app.globalData.userInfo.id,
        key: 'email',
        value: this.data.email
      },
      success(res) {
        if(res.data!==0){
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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