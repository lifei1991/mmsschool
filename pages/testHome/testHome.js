// pages/testHome/testHome.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo,
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
        iconPath: "/image/菜单/留学测评-未选中@2x.png",
        selectedIconPath: "/image/菜单/留学测评-选中@2x.png",
      },
      {
        text: "项目列表",
        iconPath: "/image/菜单/项目列表-未选中@2x.png",
        selectedIconPath: "/image/菜单/项目列表-选中@2x.png",
      },
      {
        text: "申请课堂",
        iconPath: "/image/菜单/申请课堂-未选中@2x.png",
        selectedIconPath: "/image/菜单/申请课堂-选中@2x.png",
      },
      {
        text: "个人中心",
        iconPath: "/image/菜单/个人中心-未选中@2x.png",
        selectedIconPath: "/image/菜单/个人中心-选中@2x.png",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      console.log('page1');
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else{
      console.log('page2');
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      // 给app.js 定义一个方法。
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
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
  },

  //请求测试
  getTest() {
    //判断是否进行测试
    //todo
    wx.navigateTo({
      url: "../../pages/test/test",
    })
  }
})