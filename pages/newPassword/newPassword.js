// pages/newPassword/newPassword.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    submitDisabled: true,
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

  //监测输入框是否有值
  inputWacth(e) {
    console.log(e);
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

    console.log(this.data.phone);
    console.log(this.data.yzm);
  },

  submit() {
    if (this.data.phone != this.data.yzm) {
      wx.showToast({
        title: "密码输入不一致，请重新输入！",
        icon: 'none',
        duration: 2000
      });
      return
    } else {
      var that = this;
      wx.request({
        //后台接口地址
        url: 'https://cms.palmdrive.cn/json/wx/update',
        data: {
          id: app.globalData.user.id,
          col: 'user',
          data: {
            'auth.password': that.data.yzm,
          }
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.data.status != "SUCCESS") {
            wx.showToast({
              title: '新密码未保存成功',
              icon: 'none',
              duration: 2000
            });
          } else {
            // app.globalData.user = res.data.data;
            wx.redirectTo({
              url: '../../pages/cmsLogin/cmsLogin',
            })
          }
        }
      })
    }
  }
})