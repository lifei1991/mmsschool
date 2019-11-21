//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello fly',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [{
      text: "对话",
      iconPath: "",
      selectedIconPath: "",
    },
    {
      text: "设置",
      iconPath: "",
      selectedIconPath: "",
      badge: 'New',
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindWeChat(e) {
    var that = this;
    if (e.detail.userInfo) {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      wx.login({
        success: res => {
          console.log(res.code, e.detail.iv, e.detail.encryptedData)
          wx.request({
            //后台接口地址
            url: 'https://cms.palmdrive.cn/json/wxalogin',
            data: {
              code: res.code,
              role: 'MMSSCHOOL',
            },
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              let openId = res.data.openid;
              // 获取用户信息
              wx.getSetting({
                success: res => {
                  if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                      success: res => {
                        // 可以将 res 发送给后台解码出 unionId
                        app.globalData.userInfo = res.userInfo;
                        app.globalData.userInfo.openId = openId;
                      }
                    })
                  }
                }
              });

              if (res.data.token == "") {
                wx.navigateTo({
                  url: "../../pages/bindphone/bindphone",
                })
              } else {
                wx.redirectTo({
                  url: "../../pages/testHome/testHome",
                })
              }
            }
          })
        }
      })
    } else {
      wx.showToast({
        title: "为了您更好的体验,请先同意授权",
        icon: 'none',
        duration: 2000
      });
    }
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  tabChange(e) {
    console.log('tab change', e);
    wx.navigateTo({
      url: '../../pages/logs/logs',
    })
  },

  //棕榈大道账号登录
  loginWithCMS() {
    wx.navigateTo({
      url: '../../pages/cmsLogin/cmsLogin',
    })
  }
})
