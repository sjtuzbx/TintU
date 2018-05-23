var app = getApp()

Page({
  data: {
    agree: false
  },

  agreeCheckbox: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail)
    if (!this.data.agree){
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
      wx.redirectTo({
        url: '../services/services',
        success: function(e){
          console.log(e)
        },
        fail: function(e){
          console.log(e)
        }
      })
    } else {
      console.log('False')
    }
  }, 

  myBookInfo: function(e){
     
  }
})