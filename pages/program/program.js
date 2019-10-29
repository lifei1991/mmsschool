// pages/program/program.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    btnText: "展开全部",
    dialogContent: "你还没有完成竞争力测评哦，完成测评即可查看你的申请竞争力！",
    buttons: [{ text: '返回' }, { text: '完成测评' }],
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

  bindShowMsg() {
    this.setData({
      select: !this.data.select,
      btnText: this.data.select ? "展开全部" : "收起"
    })
  },

  //查看申请竞争力
  getCompetitiveness() {
    // this.setData({
    //   dialogShow: true,
    //   dialogContent: "你还没有完成竞争力测评哦，完成测评即可查看你的申请竞争力！",
    //   buttons: [{ text: '返回' }, { text: '完成测评' }],
    // })

    this.setData({
      dialogShow: true,
      dialogContent: "你当前在此项目的申请竞争力为：",
      buttons: [{ text: '知道啦' }],
    })
  },

  tapDialogButton(e) {
    console.log('dialog', e.detail)
    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },
})