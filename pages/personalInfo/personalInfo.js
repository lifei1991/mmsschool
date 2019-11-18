// pages/personalInfo/personalInfo.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: ['学生'],
    index: 0,
    codeDisable: false,
    submitDisabled: true,
    time: '发送验证码(60s)', //倒计时 
    currentTime: 61,
    nameX: '',
    nameM: '',
    psd: 'mms-11111111',
    email: ''
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  //监测输入框是否有值
  inputWacth(e) {
    var that = this
    let item = e.currentTarget.dataset.model;
    this.setData({
      [item]: e.detail.value
    });

    this.checkSubmit();
  },

  checkSubmit() {
    if (this.data.nameX != '' && this.data.nameM != '' && this.data.email != '' && this.data.psd != '') {
      this.setData({
        submitDisabled: false
      })
    } else {
      this.setData({
        submitDisabled: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nameX: app.globalData.user.personal.lastName,
      nameM: app.globalData.user.personal.firstName,
      email: app.globalData.user.auth.email,
    });
  },

  submitAll() {
    var that = this;
    wx.request({
      //后台接口地址
      url: 'https://cms.palmdrive.cn/json/wx/update',
      data: {
        id: app.globalData.user.id,
        col: 'user',
        data: {
          'personal.lastName': that.data.nameX,
          'personal.firstName': that.data.nameM,
          'auth.email': that.data.email,
          'password': that.data.psd,
        }
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
          wx.redirectTo({
            url: '../../pages/personalInfo/personalInfo',
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.checkSubmit();
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