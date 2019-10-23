// pages/personalInfo/personalInfo.js
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
    psd: '',
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

    if (this.data.nameX != '' && this.data.nameM != '' && this.data.email != '' && this.data.psd != '' ) {
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