//wx-drawer
const MENU_WIDTH_SCALE = 0.82;
const FAST_SPEED_SECOND = 300;
const FAST_SPEED_DISTANCE = 5;
const FAST_SPEED_EFF_Y = 50;
var app = getApp()
var config = require('../../utils/config.js')
Page({
  data: {
    ui: {
      windowWidth: 0,
      menuWidth: 0,
      offsetLeft: 0,
      tStart: true      
    },
    userInfo: null,
    personNum: null,
    companyNum: null
  },
  // 跳转函数
  goChangePassword(){
    wx.navigateTo({
      url: '../changePassword/changePassword',
    })
  },
  goAboutUs() {
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
  },
  goAppVersion() {
    wx.navigateTo({
      url: '../appVersion/appVersion',
    })
  },
  goCompany() {
    wx.navigateTo({
      url: '../company/company',
    })
  },
  goUserInfo() {
    wx.navigateTo({
      url: '../userInfo/userInfo',
    })
  },
  // riskManage
  goElement() {
    wx.navigateTo({
      url: '../riskManage/element/element',
    })
  },
  goCollectRemark() {
    wx.navigateTo({
      url: '../riskManage/collectRemark/collectRemark',
    })
  },
  goCompanyRisk() {
    wx.navigateTo({
      url: '../riskManage/companyRisk/companyRisk',
    })
  },
  goRiskRemark() {
    wx.navigateTo({
      url: '../riskManage/riskRemark/riskRemark',
    })
  },
  goRiskStatistics() {
    wx.navigateTo({
      url: '../riskManage/riskStatistics/riskStatistics',
    })
  },
  goLogout() {
    wx.navigateTo({
      url: '../logout/logout',
    })
  },
  // 跳转函数
  
  queryRiskNum() {
    var that = this
    var now = new Date(); //当前日期
    var nowDayOfWeek = now.getDay(); //今天本周的第几天
    var nowYear = now.getFullYear(); //当前年
    var nowMonth = now.getMonth(); //月
    var nowDay = now.getDate(); //日
    var beginHour = "00:00:00";
    var endHour = "23:59:59";
    var nowDayOfWeek = nowDayOfWeek == 0 ? 7 : nowDayOfWeek; // 如果是周日，就变成周七
    var weekStartDate = new Date(nowYear, nowMonth, nowDay -nowDayOfWeek + 1);
    var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek + 1));
    var monthStartDate = new Date(nowYear, nowMonth, 1);//本月开始日期
    var monthEndDate = new Date(nowYear, nowMonth, 31);//本月结束日期
    wx.request({
      url: config.host + 'appRisk/queryRiskNum',
      data: {
        startTime: new Date().getTime() - new Date().getTime() % (1000 * 60 * 60 * 24),
        endTime: new Date().getTime() - new Date().getTime() % (1000 * 60 * 60 * 24) + 86400000,
        weekStartTime: weekStartDate.getTime(),
        weekEndTime: weekEndDate.getTime(),
        monthStartTime: monthStartDate.getTime(),
        monthEndTime: monthEndDate.getTime(),
        userCode: app.globalData.userInfo.user_code,
        entpid: app.globalData.companyInfo.id,
        mark: 2
      },
      success(res) {
        that.setData({
          personNum: res.data
        })
      }
    })
    wx.request({
      url: config.host + 'appRisk/queryRiskNum',
      data: {
        startTime: new Date().getTime() - new Date().getTime() % (1000 * 60 * 60 * 24),
        endTime: new Date().getTime() - new Date().getTime() % (1000 * 60 * 60 * 24) + 86400000,
        weekStartTime: weekStartDate.getTime(),
        weekEndTime: weekEndDate.getTime(),
        monthStartTime: monthStartDate.getTime(),
        monthEndTime: monthEndDate.getTime(),
        userCode: '',
        entpid: app.globalData.companyInfo.id,
        mark: 0
      },
      success(res) {
        that.setData({
          companyNum: res.data
        })
      }
    })
  },
  getTreeData() {
    var that = this
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
  onLoad() {
    
    try {
      let res = wx.getSystemInfoSync()
      this.windowWidth = res.windowWidth;
      this.data.ui.menuWidth = this.windowWidth * MENU_WIDTH_SCALE;
      this.data.ui.offsetLeft = 0;
      this.data.ui.windowWidth = res.windowWidth;
      this.setData({ui: this.data.ui})
      this.setData({
        userInfo: app.globalData.userInfo
      })
      this.queryRiskNum()
      this.getTreeData()
    } catch (e) {
    }
  },
  handlerStart(e) {
    let {clientX, clientY} = e.touches[0];
    this.tapStartX = clientX;
    this.tapStartY = clientY;
    this.tapStartTime = e.timeStamp;
    this.startX = clientX;
    this.data.ui.tStart = true;
    this.setData({ui: this.data.ui})
  },
  handlerMove(e) {
    let {clientX} = e.touches[0];
    let {ui} = this.data;
    let offsetX = this.startX - clientX;
    this.startX = clientX;
    ui.offsetLeft -= offsetX;
    if(ui.offsetLeft <= 0) {
      ui.offsetLeft = 0;
    } else if(ui.offsetLeft >= ui.menuWidth) {
      ui.offsetLeft = ui.menuWidth;
    }
    this.setData({ui: ui})
  },
  handlerCancel(e) {
    // console.log(e);
  },
  handlerEnd(e) {
    this.data.ui.tStart = false;
    this.setData({ui: this.data.ui})
    let {ui} = this.data;
    let {clientX, clientY} = e.changedTouches[0];
    let endTime = e.timeStamp;
    //快速滑动
    if(endTime - this.tapStartTime <= FAST_SPEED_SECOND) {
      //向左
      if(this.tapStartX - clientX > FAST_SPEED_DISTANCE) {
        ui.offsetLeft = 0;
      } else if(this.tapStartX - clientX < -FAST_SPEED_DISTANCE && Math.abs(this.tapStartY - clientY) < FAST_SPEED_EFF_Y) {
        ui.offsetLeft = ui.menuWidth;
      } else {
        if(ui.offsetLeft >= ui.menuWidth/2){
          ui.offsetLeft = ui.menuWidth;
        } else {
          ui.offsetLeft = 0;
        }
      }
    } else {
      if(ui.offsetLeft >= ui.menuWidth/2){
        ui.offsetLeft = ui.menuWidth;
      } else {
        ui.offsetLeft = 0;
      }
    }
    this.setData({ui: ui})
  },
  handlerPageTap(e) {
    let {ui} = this.data;
    if(ui.offsetLeft != 0) {
      ui.offsetLeft = 0;
      this.setData({ui: ui})
    }
  },
  handlerAvatarTap(e) {
    let {ui} = this.data;
    if(ui.offsetLeft == 0) {
      ui.offsetLeft = ui.menuWidth;
      this.setData({ui: ui})
    }
  }
})
