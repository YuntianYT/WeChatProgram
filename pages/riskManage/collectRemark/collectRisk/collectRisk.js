// pages/riskManage/collectRemark/collectRisk/collectRisk.js
var config = require('../../../../utils/config.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    model: null,
    harmful: null,
    results: null,
    treeData: null
  },
  getResults() {
    var that = this
    wx.request({
      url: config.host + 'appRisk/selectAllByRiskCode',
      data: {
        risk_code: that.data.model.risk_code
      },
      success(res) {
        that.setData({
          results: res.data
        })
      }
    })
  },
  getRiskTree() {
    var that = this
    wx.request({
      url: config.host + 'appHarmful/listTree',
      data: {
        riskId: that.data.model.id
      },
      success(res) {
        that.setData({
          treeData: res.data[0]
        })
      }
    })
  },
  goAddRiskHarmful() {
    var treeData = JSON.stringify(this.data.treeData)
    wx.navigateTo({
      url: '../../riskData/addRiskHarmful?treeData=' + treeData,
    })
  },
  goAddRiskConse() {
    wx.navigateTo({
      url: '../../riskData/addRiskConse'
    })
  },
  goAddRiskEval(e) {
    var para = JSON.stringify(e.target.dataset.item)
    wx.navigateTo({
      url: '../../riskData/addRiskEval?para=' + para
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var model = JSON.parse(options.model)
    this.setData({
      model: model,
      harmful: model.harmful
    })
    var reg = new RegExp('</br>', 'g')
    if (this.data.harmful!=null){
      this.setData({
        harmful : this.data.harmful.replace(reg, '\n')
      })
    }
    this.getResults()
    this.getRiskTree()
    
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