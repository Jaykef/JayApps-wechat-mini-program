// Require leancloud library and object 
const AV = require('../../utils/av-weapp-min.js');
const Form = require('../../model/form.js');

var app = getApp()

const getDataForRender = form => ({
  name: form.get('nickName'),
  email: form.get('email'),
  phone: form.get('phone'),
  review: form.get('review'),
  recommendation: form.get('recommendation'),
  learn_to_code: form.get('learn_to_code'),
  hear_about: form.get('hear_about')
})

Page({
  data: {
    userInfo: {},
    forms: []
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    // Call to the application instance to get data 
    app.getUserInfo(function (userInfo) {
      // Update data
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {
    new AV.Query('Form')
      .descending('createdAt')
      .find()
      .then(forms => this.setData({
        forms: forms.map(getDataForRender)
      }))
      .catch(console.error);
  },
})