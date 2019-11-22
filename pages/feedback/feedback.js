// pages/feedback/feedback.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    user: {}
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
    let tempUser = wx.getStorageSync('user');
    this.setData({
      user: tempUser,
      text: tempUser.weichatProgram.review
    });
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

  inputWacth(e) {
    var that = this
    let item = e.currentTarget.dataset.model;
    this.setData({
      [item]: e.detail.value
    });
  },

  //提交反馈
  submitFeedback() {
    var that = this;
    wx.request({
      //后台接口地址
      url: 'https://cms.palmdrive.cn/json/wx/update',
      data: {
        id: that.data.user.id,
        col: 'user',
        data: {
          'weichatProgram.review': that.data.text
        }
      },
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.status != "SUCCESS") {
          wx.showToast({
            title: '服务器繁忙，请稍后再试',
            icon: 'none',
            duration: 2000
          });
        } else {
          that.data.user.weichatProgram.review = that.data.text;
          wx.setStorageSync('user', that.data.user);
          that.setData({
            dialogShow: true,
            buttons: [{ text: '知道啦' }],
          })
        }
      }
    })

    
  },
  
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
})