var app = getApp()

Page({
  data: {
    motto: "hello world",
    msg:""
  },
  onLoad: function() {
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData
    })
  },
  clickMe: function () {
    this.setData({ msg: "Hello World" })
  }

})