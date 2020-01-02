// pages/riskManage/element/elementDetailModal/elementDetailModal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLeafNote: null,
    name: null,
    element_code: null,
    tel: null,
    duty_officer: null,
    contact_man: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isLeafNote: options.isLeafNote,
      name: options.name,
      element_code: options.element_code,
      tel: options.tel,
      duty_officer: options.duty_officer,
      
    })
    if (options.contact_man == 'undefined'){
      this.setData({
        contact_man: ''
      })
    }
    else {
      this.setData({
        contact_man: options.contact_man
      })
    }
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