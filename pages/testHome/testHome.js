// pages/testHome/testHome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      {
        imgUrl: "/image/手机摄影.png",
        title: "留学国家测评",
        testCount: "20",
        testPeople: "999",
        buttonText: "开始测评",
        buttonUrl: ""
      },
      {
        imgUrl: "/image/手机摄影(1).png",
        title: "留学专业测评",
        testCount: "14",
        testPeople: "999",
        buttonText: "查看结果",
        buttonUrl: ""
      },
      {
        imgUrl: "/image/手机摄影(2).png",
        title: "竞争力测评",
        testCount: "26",
        testPeople: "999",
        buttonText: "继续测评",
        buttonUrl: ""
      },
    ],
    list: [
      {
        text: "留学测评",
        iconPath: "/image/logo.png",
        selectedIconPath: "/image/logo.png",
      },
      {
        text: "项目列表",
        iconPath: "",
        selectedIconPath: "",
      },
      {
        text: "申请课堂",
        iconPath: "",
        selectedIconPath: "",
      },
      {
        text: "个人中心",
        iconPath: "",
        selectedIconPath: "",
      }
    ]
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

  //底部导航切换
  tabChange(e) {
    let tempUrl = "../../pages/testHome/testHome";

    if (e.detail.index == 0) {
      tempUrl = "../../pages/testHome/testHome";
    } else if (e.detail.index == 1) {
      tempUrl = "../../pages/programs/programs";
    } else if (e.detail.index == 2) {
      tempUrl = "../../pages/class/class";
    } else if (e.detail.index == 3) {
      tempUrl = "../../pages/info/info";
    }

    wx.redirectTo({
      url: tempUrl,
    })
  }
})