// pages/bindphone/bindphone.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: ['+86', '+001', '+44', '+61'],
    index: 0,
    codeDisable: false,
    submitDisabled: true,
    time: '发送验证码(60s)', //倒计时 
    currentTime: 61,
    phone: '',
    yzm: '',
    returnYZM: ''
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  //发送验证码
  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    let interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval);
        that.setData({
          time: '重新发送',
          currentTime: 61,
          codeDisable: false
        })
      }
    }, 1000)
  },

  getVerificationCode() {
    var that = this;
    if (!this.data.ajxtrue) {
      wx.showToast({
        title: "手机号有误，请重新输入！",
        icon: 'none',
        duration: 2000
      });
      return
    }

    this.getCode();

    wx.request({
      //后台接口地址
      url: 'https://cms.palmdrive.cn/json/mobilecode',
      data: {
        mobile: that.data.phone,
        itu: that.data.array[that.data.index],
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.data.returnYZM = res;
      }
    })

    that.setData({
      codeDisable: true
    })
  },
  //监测输入框是否有值
  inputWacth(e) {
    var that = this
    let item = e.currentTarget.dataset.model;
    this.setData({
      [item]: e.detail.value
    });

    if (this.data.phone != '' && this.data.yzm != '') {
      that.setData({
        submitDisabled: false
      })
    } else {
      that.setData({
        submitDisabled: true
      })
    }

    //验证手机号
    var phone = e.detail.value;
    if (!(/^1[34578]\d{9}$/.test(phone))) {

      this.setData({
        ajxtrue: false
      })
      if (phone.length > 11) {
        wx.showToast({
          title: '手机号有误',
          icon: 'none',
          duration: 2000
        })
      }
    } else {
      this.setData({
        ajxtrue: true
      })
      console.log('验证成功', that.data.ajxtrue)
    }
  },

  submitAll() {
    var that = this;
    wx.request({
      //后台接口地址
      url: 'https://cms.palmdrive.cn/json/verifycode',
      data: {
        code: that.data.yzm,
        mobile: that.data.phone,
        itu: that.data.array[that.data.index],
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        // that.data.returnYZM = res;
        if (res.data.status == "FAIL") {
          wx.showToast({
            title: res.data.description,
            icon: 'none',
            duration: 2000
          });
        } else {
          wx.showToast({
            title: "绑定成功",
            icon: 'none',
            duration: 2000
          });

          wx.request({
            //后台接口地址
            url: 'https://cms.palmdrive.cn/json/wx/user',
            data: {
              wxaUserInfo: app.globalData.userInfo,
              mobile: that.data.phone,
              itu: that.data.array[that.data.index],
            },
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              if (res.data.status != "SUCCESS") {
                wx.showToast({
                  title: '用户微信信息未保存成功',
                  icon: 'none',
                  duration: 2000
                });
              } else {
                app.globalData.user = res.data.data;
                wx.setStorageSync('logined', true);
                wx.setStorageSync('user', res.data.data);
                wx.redirectTo({
                  url: '../../pages/personalInfo/personalInfo',
                })
              }
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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