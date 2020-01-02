// pages/riskManage/riskData/addRiskEvalModal.js
var config = require('../../../utils/config.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    array: ['lec评价方法', '矩阵评价方法'],
    accidentResult: null,
    accidentResultIndex: null,
    frequency: null,
    frequencyIndex: null,
    peopleExpose: null,
    peopleExposeIndex: null,
    possibility: null,
    possibilityIndex: null,
    severity: null,
    severityIndex: null
  },
  getAccientResult() {
    var that = this
    wx.request({
      url: config.host + 'appAccidentResult/queryAllAccidentResult',
      success(res) {
        var accidentResult = []
        res.data.forEach(v=>{
          accidentResult.push(v.name)
        })
        that.setData({
          accidentResult: accidentResult
        })
      }
    })
  },
  getFrequency() {
    var that = this
    wx.request({
      url: config.host + 'appFrequency/queryAllFrequency',
      success(res) {
        var frequency = []
        res.data.forEach(v => {
          frequency.push(v.name)
        })
        that.setData({
          frequency: frequency
        })
      }
    })
  },
  getPeopleExpose() {
    var that = this
    wx.request({
      url: config.host + 'appPeople/queryAllPeopleExpose',
      success(res) {
        var peopleExpose = []
        res.data.forEach(v => {
          peopleExpose.push(v.name)
        })
        that.setData({
          peopleExpose: peopleExpose
        })
      }
    })
  },
  getPossibility() {
    var that = this
    wx.request({
      url: config.host + 'appPossibilityEval/queryAllPossibility',
      success(res) {
        var possibility = []
        res.data.forEach(v => {
          possibility.push(v.grade)
        })
        that.setData({
          possibility: possibility
        })
      }
    })
  },
  getSeverity() {
    var that = this
    wx.request({
      url: config.host + 'appSeverityEval/queryAllSeverity',
      success(res) {
        var severity = []
        res.data.forEach(v => {
          severity.push(v.grade)
        })
        that.setData({
          severity: severity
        })
      }
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  init() {
    this.getAccientResult()
    this.getFrequency()
    this.getPeopleExpose()
    this.getPossibility()
    this.getSeverity()
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