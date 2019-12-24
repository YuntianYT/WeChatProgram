// pages/company/featureInfo/featureInfo.js
var app = getApp();
var config = require('../../../utils/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    encotype_infoid: '',
    jaf_regionid: '',
    entp_kindinfoid: '',
    jaf_select_code: '',
    manage_dpt: ''
  },
  getEco_type_info(code){
    var that = this
    wx.request({
      url: config.host + 'appCompany/showEcoType',
      data: {
        eco_code: code
      },
      success(res) {
        that.setData({
          encotype_infoid: that.data.encotype_infoid + '/' + res.data.name
        })
      }
    })
  },
  getProvinces(code){
    var that = this
    wx.request({
      url: config.host + 'appCompany/showJafRegion',
      data: {
        region_code: code
      },
      success(res) {
        that.setData({
          jaf_regionid: that.data.jaf_regionid + '/' + res.data.name
        })
      }
    })
  },
  getentp_kindinfoid(code1, code2) {
    var that = this
    wx.request({
      url: config.host + 'appCompany/showEntp_kind',
      data: {
        entp_code: code1,
        region_code: code2
      },
      success(res) {
        that.setData({
          entp_kindinfoid: that.data.entp_kindinfoid + '/' + res.data.name
        })
      }
    })
  },
  getJaf_select_info(code) {
    var that = this
    wx.request({
      url: config.host + 'appCompany/showJafSelect',
      data: {
        jaf_select_code: code
      },
      success(res) {
        that.setData({
          jaf_select_code: that.data.jaf_select_code + '/' + res.data.name
        })
      }
    })
  },
  getJafDept(code1, code2) {
    var that = this
    wx.request({
      url: config.host + 'appCompany/showJafDept',
      data: {
        dept_code: code1,
        region_code: code2
      },
      success(res) {
        that.setData({
          manage_dpt: that.data.manage_dpt + '/' + res.data.name
        })
      }
    })
  },

  ////////////////////////////////////////////
  splitEcoCode() {
    var valencotype = new Array(100);
    valencotype = app.globalData.companyInfo.encotype_infoid.split("/");
    if (valencotype[0] != 'undefined') { this.getEco_type_info(valencotype[0]); }
    if (valencotype[1] != 'undefined') { this.getEco_type_info(valencotype[1]); }
    if (valencotype[2] != 'undefined') { this.getEco_type_info(valencotype[2]); }
    if (valencotype[3] != 'undefined') { this.getEco_type_info(valencotype[3]); }
  },
  splitRegionId() {
    var valjaf = new Array(100);
    valjaf = app.globalData.companyInfo.jaf_regionid.split("/");
    if (valjaf[0] != 'undefined') { this.getProvinces(valjaf[0]); }
    if (valjaf[1] != 'undefined') { this.getProvinces(valjaf[1]); }
    if (valjaf[2] != 'undefined') { this.getProvinces(valjaf[2]); }
    if (valjaf[3] != 'undefined') { this.getProvinces(valjaf[3]); }
  },
  splitEntpId() {
    var valenco = new Array(100);
    valenco = app.globalData.companyInfo.entp_kindinfoid.split("/");
    var valjaf = new Array(100);
    valjaf = app.globalData.companyInfo.jaf_regionid.split("/");
    if (valenco[0] != 'undefined') { this.getentp_kindinfoid(valenco[0], valjaf[0]); }
    if (valenco[1] != 'undefined') { this.getentp_kindinfoid(valenco[1], valjaf[0]); }
    if (valenco[2] != 'undefined') { this.getentp_kindinfoid(valenco[2], valjaf[0]); }
    if (valenco[3] != 'undefined') { this.getentp_kindinfoid(valenco[3], valjaf[0]); }
  },
  splitSelectCode() {
    var valjafSelect = new Array(100);
    valjafSelect = app.globalData.companyInfo.jaf_selectinfoid.split("/");
    if (valjafSelect[0] != 'undefined') { this.getJaf_select_info(valjafSelect[0]); }
    if (valjafSelect[1] != 'undefined') { this.getJaf_select_info(valjafSelect[1]); }
    if (valjafSelect[2] != 'undefined') { this.getJaf_select_info(valjafSelect[2]); }
    if (valjafSelect[3] != 'undefined') { this.getJaf_select_info(valjafSelect[3]); }
  },
  splitManageDpt() {
    var valjaf = new Array(100);
    valjaf = app.globalData.companyInfo.jaf_regionid.split("/");
    var valjafDept = new Array(100);
    valjafDept = app.globalData.companyInfo.manage_dpt.split("/");
    for (var i = 0; i < valjafDept.length; i++) {
      if (valjafDept[i] != 'undefined' && valjafDept[i] != '') {
        this.getJafDept(valjafDept[i], valjaf[0]);
      } else {
        break;
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.splitEcoCode()
    this.splitRegionId()
    this.splitEntpId()
    this.splitSelectCode()
    this.splitManageDpt()
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