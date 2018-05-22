var app = getApp()

Page({
  data: {
    motto: "hello world",
    msg:"",
    agree: false
  },

  onLoad: function() {
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData
    })
  },

  clickMe: function () {
    this.setData({ msg: "Hello World" })
  },

  agreeCheckbox: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value == 'agree'){
      console.log('True')
      this.setData({
        agree:true
      })
    }
    else{
      console.log('False')
      this.setData({
        agree: false
      })
    }
  },

  startBooking: function(e) {
    if (this.data.agree){
      console.log('True')
    } else {
      console.log('False')
    }
  }
})