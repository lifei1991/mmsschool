// pages/newPassword/newPassword.js
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
    }

    console.log(this.data.phone);
    console.log(this.data.yzm);
  },
})