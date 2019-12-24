// pages/login/login.js
var config=require('../../utils/config.js')

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: 'shatoujiedao01',
    password: 123456
  },

  usernameInput: function (event) {
    this.setData({
      username: event.detail.value
    })
  },
  passwordInput: function (event) {
    this.setData({
      password: event.detail.value
    })
  },
  loginBtnClick: function () {
    var that = this
    wx.request({
      url: config.host + 'appUser/login',
      data: {
        account: this.data.username,
        pwd: this.data.password,
        user_roles_id: 2
      },
      success(res) {
        if(res.data!==-1){
          wx.redirectTo({ url: "../wxDrawer/index" })
          app.globalData.userInfo = res.data
          that.getUser()
          that.getCompanyInfo()
        }
        else {
          that.showToast()
        }
      }
    })
  },
  getUser() {
    wx.request({
      url: config.host + 'appUser/getUser',
      data: {
        id: app.globalData.userInfo.id,
        mark: app.globalData.userInfo.mark,
        mark_id: app.globalData.userInfo.mark_id
      },
      success(res) {
        if (res.data !== -1) {
          app.globalData.userInfo = res.data[0]
        }
      }
    })
  },
  getCompanyInfo() {
    wx.request({
      url: config.host + 'appCompany/getCompanyInfo',
      data: {
        id: app.globalData.userInfo.id,
        mark: app.globalData.userInfo.mark,
        mark_id: app.globalData.userInfo.mark_id
      },
      success(res) {
        if (res.data !== -1) {
          app.globalData.companyInfo = res.data[0]
        }
      }
    })
  },
  showToast(){
    this.toast.showToast('用户名或密码错误,请重试',1000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.toast = this.selectComponent('#toast')
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