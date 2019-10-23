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
    this.getCode();
    var that = this
    that.setData({
      codeDisable: true
    })
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
    }

    console.log(this.data.phone);
    console.log(this.data.yzm);
  },

  continue() {
    //验证验证码
    //todo

    wx.navigateTo({
      url: "../../pages/newPassword/newPassword",
    })
  }
})