// pages/getBackPassword/getBackPassword.js
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
    yzm: ''
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
        time: '已发送(' + currentTime + 's)'
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

  continue() {
    var that = this;
    wx.request({
      //后台接口地址
      url: 'https://cms.palmdrive.cn/json/wx/user/modif',
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
          wx.navigateTo({
            url: "../../pages/newPassword/newPassword",
          })
        }
      }
    })
  }
})