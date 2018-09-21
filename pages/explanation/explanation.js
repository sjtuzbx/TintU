var app = getApp()

Page({
  data: {
    agree: false
  },

  globalData: {
    subDomain: "76b7541ddb9543bb40853bf166f20364"
  },

  onLaunch: function () {
    
  },
  

  login: function () {
    var that = this;
    var token = that.globalData.token;

    if (token) {
      wx.request({
        url: 'https://api.it120.cc/' + that.globalData.subDomain + '/user/check-token',
        data: {
          token: token
        },
        success: function (res) {
          if (res.data.code != 0) {
            that.globalData.token = null;
            that.login();
          }
        }
      })
      return;
    }

    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://api.it120.cc/' + that.globalData.subDomain + '/user/wxapp/login',
          data: {
            code: res.code
          },
          success: function (res) {
            if (res.data.code == 10000) {
              // 去注册
              that.registerUser();
              return;
            }
            if (res.data.code != 0) {
              // 登录错误
              wx.hideLoading();
              wx.showModal({
                title: '提示',
                content: '无法登录，请重试',
                showCancel: false
              })
              return;
            }
            //console.log(res.data.data)
            that.globalData.token = res.data.data.token;
            that.globalData.uid = res.data.data.uid;
          }
        })
      }
    })
  },
  registerUser: function () {
    var that = this;
    wx.login({
      success: function (res) {
        var code = res.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
        wx.getUserInfo({
          success: function (res) {
            var iv = res.iv;
            var encryptedData = res.encryptedData;
            // 下面开始调用注册接口
            wx.request({
              url: 'https://api.it120.cc/' + that.globalData.subDomain + '/user/wxapp/register/complex',
              data: { code: code, encryptedData: encryptedData, iv: iv }, // 设置请求的 参数
              success: (res) => {
                wx.hideLoading();
                that.login();
              }
            })
          }
        })
      }
    })
  },

  bindGetUserInfo: function (e) {
    if (!e.detail.userInfo) {
      return;
    }
    wx.setStorageSync('userInfo', e.detail.userInfo)
    this.login();

    if (this.data.agree) {
      console.log('True')
      wx.navigateTo({
        url: '../services/services'
      })
    } else {
      console.log('False')
    }
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

  myBookInfo: function(e){
     wx.navigateTo({
       url: '../myorder/myorder'
     })
  }
})