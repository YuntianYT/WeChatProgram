// pages/company/dateInfo/dateInfo.js
var app = getApp();
var config = require('../../../utils/config.js')
var time = require('../../../utils/utils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fill_date: null,
    exist_date: null,
    valid_date_sta: null,
    valid_date_end: null
  },

  init() {
    var new_fill_date = time.formatTime(app.globalData.companyInfo.fill_date, 'Y/M/D h:m:s')
    var new_exist_date = time.formatTime(app.globalData.companyInfo.exist_date, 'Y/M/D h:m:s')
    var new_valid_date_sta = time.formatTime(app.globalData.companyInfo.valid_date_sta, 'Y/M/D h:m:s')
    var new_valid_date_end = time.formatTime(app.globalData.companyInfo.valid_date_end, 'Y/M/D h:m:s')
    this.setData({
      fill_date: new_fill_date,
      exist_date: new_exist_date,
      valid_date_sta: new_valid_date_sta,
      valid_date_end: new_valid_date_end
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init()
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