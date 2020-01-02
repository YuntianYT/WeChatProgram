// pages/riskManage/riskData/addRiskEval.js
var config = require('../../../utils/config.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: null,
    lecDetail: null,
    matrixDetail:null,
    risk_measures:null
  },
  getInitData() {
    var that = this
    if (this.data.result.method == 1){
      wx.request({
        url: config.host + 'appLecDetails/queryEvalDetail',
        data: {
          riskId: that.data.result.id,
        },
        success(res) {
          that.setData({
            lecDetail: res.data[0]
          })
        }
      })
    }
    if (this.data.result.method == 2){
      wx.request({
        url: config.host + 'appMatrixDetails/queryEvalDetail',
        data: {
          riskId: that.data.result.id,
        },
        success(res) {
          that.setData({
            matrixDetail: res.data[0]
          })
        }
      })
    }
 
  },
  goAddControllerMeasure() {
    wx.navigateTo({
      url: './addControllerMeasure',
    })
  },
  goAddRiskEvalModal() {
    wx.navigateTo({
      url: './addRiskEvalModal',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var result = JSON.parse(options.para)
    this.setData({
      result: result,
      risk_measures: result.risk_measures
    })
    var reg = new RegExp('</br>', 'g')
    if (this.data.risk_measures != null) {
      this.setData({
        risk_measures: this.data.risk_measures.replace(reg, '\n')
      })
    }
    this.getInitData()
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