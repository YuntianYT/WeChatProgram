// pages/riskManage/companyRisk/companyRisk.js
var config = require('../../../utils/config.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: null,
    dayList: null,
    monthList: null
  },
  getRiskList() {
    var that = this
    wx.request({
      url: config.host + 'appRisk/getAll',
      data: {
        elementCode: '',
        elementName: '',
        endTime: '',
        entpid: app.globalData.companyInfo.id,
        mark: 0,
        orderBy: 1,
        pageNo: 0,
        pageSize: 0,
        startTime: '',
        userCode: '',
        userName: ''
      },
      success(res) {
        that.setData({
          list: res.data.data
        })
      }
    })
  },
  //获取今天的列表
  getDayRiskList() {
    var that = this
    wx.request({
      url: config.host + 'appRisk/getAll',
      data: {
        elementCode: '',
        elementName: '',
        endTime: new Date().getTime() - new Date().getTime() % (1000 * 60 * 60 * 24),
        entpid: app.globalData.companyInfo.id,
        mark: 0,
        orderBy: 1,
        pageNo: 0,
        pageSize: 0,
        startTime: new Date().getTime() - new Date().getTime() % (1000 * 60 * 60 * 24),
        userCode: '',
        userName: ''
      },
      success(res) {
        that.setData({
          dayList: res.data.data
        })
      }
    })
  },
  //获取本月的列表
  getMonthRiskList() {
    var now = new Date(); //当前日期
    var nowYear = now.getFullYear(); //当前年
    var nowMonth = now.getMonth(); //月
    var monthStartDate = new Date(nowYear, nowMonth, 1);//本月开始日期
    var monthEndDate = new Date(nowYear, nowMonth, 31);//本月结束日期
    var that = this
    wx.request({
      url: config.host + 'appRisk/getAll',
      data: {
        elementCode: '',
        elementName: '',
        endTime: monthEndDate.getTime(),
        entpid: app.globalData.companyInfo.id,
        mark: 0,
        orderBy: 1,
        pageNo: 0,
        pageSize: 0,
        startTime: monthStartDate.getTime(),
        userCode: '',
        userName: ''
      },
      success(res) {
        that.setData({
          monthList: res.data.data
        })
      }
    })
  },
  goCollectRisk(e) {
    var model = JSON.stringify(e.currentTarget.dataset.item)
    wx.navigateTo({
      url: '../collectRemark/collectRisk/collectRisk?model=' + model,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRiskList()
    this.getDayRiskList()
    this.getMonthRiskList()

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