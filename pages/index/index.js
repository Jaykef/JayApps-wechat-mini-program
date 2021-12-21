//index.js
var app = getApp()
Page({
  data: {
    form: 'Give your feedback',
    userInfo: {},
    source: '',
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
    console.log('userInfo ok')
  },  
  onShareAppMessage: function () {
    return {
      title: 'JayApps Limited',
      path: 'pages/index/index'
    }
  },
  onReady: function (res) {
    console.log('ready')
  },
})