// pages/changePassword/changePassword.js
var config = require('../../utils/config.js')
import WxValidate from '../../utils/WxValidate.js'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldPasswd: null,
    newPasswd: null,
    againPasswd: null
  },
  oldPasswordInput(event){
    this.setData({
      oldPasswd: event.detail.value
    })
  },
  newPasswordInput(event) {
    this.setData({
      newPasswd: event.detail.value
    })
  },
  againPasswordInput(event) {
    this.setData({
      againPasswd: event.detail.value
    })
  },
  checkOldPasswd(){
    var that = this
    wx.request({
      url: config.host + 'appUser/isTruePwd',
      data: {
        id: app.globalData.userInfo.id,
        password: that.data.oldPasswd
      },
      success(res) {
       if(res.data==1){
         that.changePasswd()
        }
        else{
         wx.showToast({
           title: '旧密码输入错误',
           icon: 'none',
         })
        }
      }
    })
  },
  changePasswd() {
    var that = this
    wx.request({
      url: config.host + 'appUser/updateUserPwd',
      data: {
        id: app.globalData.userInfo.id,
        password: that.data.newPasswd
      },
      success(res) {
        if (res.data !==null) {
          wx.showToast({
            title: '修改成功'
          })
        }
      }
    })
  },
  submit(){
    if (this.data.oldPasswd == null || this.data.oldPasswd.length==0){
      wx.showToast({
        title: '旧密码不能为空',
        icon: 'none',
      })
    }
    else {
      if (this.data.newPasswd !== this.data.againPasswd) {
        wx.showToast({
          title: '两次密码输入不一致',
          icon: 'none',
        })
      }
      else if (this.data.newPasswd == null && this.data.againPasswd == null){
        wx.showToast({
          title: '请输入新密码',
          icon: 'none',
        })
      }
      else {
        if (this.data.newPasswd.length < 6){
          wx.showToast({
            title: '新密码长度应大于6位',
            icon: 'none',
          })
        }
        else {
          this.checkOldPasswd()
          
        }
      }
    }
    
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