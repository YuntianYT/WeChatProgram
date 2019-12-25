var config = require('../../../utils/config.js')
var app = getApp();
Page({
  data: {
    myTreeData: null,
    treeData: {
      text: 'My Tree',
      id: 0,
      nodes: [
        {
          text: 'Parent 1',
          id: 1,
          nodes: [
            {
              text: 'Child 1',
              id: 2,
              nodes: [
                {
                  text: 'Grandchild 1',
                  id: 3,
                  nodes: [
                    {
                      text: 'Grandchild 1',
                      id: 3,
                    },
                    {
                      text: 'Grandchild 2',
                      id: 4,
                    },
                  ]
                },
                {
                  text: 'Grandchild 2',
                  id: 4,
                },
              ]
            },
            {
              text: 'Child 2',
              id: 5,
            }
          ]
        },
        {
          text: 'Parent 2',
          id: 6,
          nodes: [
            {
              text: 'Child 1',
              id: 7,
            },
            {
              text: 'Child 2',
              id: 8,
            }
          ]
        }
      ]
    }
  },
  //事件处理函数
  tapItem: function (e) {
    console.log('index接收到的itemid: ' + e.detail.itemid);
  },
  getTreeData(){
    var that = this
    wx.request({
      url: config.host + 'appElement/listTree',
      data: {
        cinsCode: '',
        entpid: app.globalData.companyInfo.id
      },
      success(res) {
        if (res.data !== -1) {
          that.setData({
            myTreeData: res.data[0]
          })
        }
      }
    })
  },
  onLoad: function () {
    this.getTreeData()
  },
})