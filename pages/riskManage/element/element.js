var config = require('../../../utils/config.js')
var app = getApp();
Page({
  data: {
    treeData: null
  },
  //事件处理函数
  tapItem: function (e) {
    wx.request({
      url: config.host + 'appElement/isLeafNote',
      data: {
        code: e.detail.item.code
      },
      success(res) {
        if (res.data !== null) {
          wx.navigateTo({
            url: './elementDetailModal/elementDetailModal?isLeafNote=' + res.data + '&name=' + e.detail.item.name + '&element_code=' + e.detail.item.code + '&tel=' + e.detail.item.object.tel + '&duty_officer=' + e.detail.item.object.duty_officer + '&contact_man=' + e.detail.item.object.contact_man,
          })
        }
      }
    })
  },
  getTreeData(){
    wx.request({
      url: config.host + 'appElement/listTree',
      data: {
        cinsCode: '',
        entpid: app.globalData.companyInfo.id
      },
      success(res) {
        if (res.data !== -1) {
          app.globalData.treeData = res.data[0]
        }
      }
    })
  },
  onLoad: function () {
    this.setData({
      treeData: app.globalData.treeData
    })
    this.getTreeData()
  },
})