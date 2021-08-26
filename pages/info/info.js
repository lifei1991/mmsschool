// pages/info/info.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        text: "留学测评",
        iconPath: "/image/menu/testHome.png",
        selectedIconPath: "/image/menu/testHomeSelected.png",
      },
      {
        text: "项目列表",
        iconPath: "/image/menu/programs.png",
        selectedIconPath: "/image/menu/programsSelected.png",
      },
      // {
      //   text: "申请课堂",
      //   iconPath: "/image/menu/class.png",
      //   selectedIconPath: "/image/menu/classSelected.png",
      // },
      {
        text: "个人中心",
        iconPath: "/image/menu/info.png",
        selectedIconPath: "/image/menu/infoSelected.png",
      }
    ],
    avatar: "../../image/logo.png",
    name: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if (app.globalData.userInfo != null) {
    //   this.setData({
    //     avatar: app.globalData.userInfo.avatar,
    //     name: app.globalData.userInfo.name
    //   });
    // }

    app.userInfoReadyCallback = res => {
      this.setData({
        avatar: app.globalData.userInfo.avatarUrl,
        name: app.globalData.userInfo.nickName
      });
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
    if (app.globalData.userInfo == null) {
      if (app.globalData.user.personal.name == undefined) {
        let tempUser = wx.getStorageSync('user');
        this.setData({
          avatar: '../../image/logo.png',
          name: tempUser.personal.name
        });
      } else {
        this.setData({
          avatar: '../../image/logo.png',
          name: app.globalData.user.personal.name
        });
      }
    } else {
      this.setData({
        avatar: app.globalData.userInfo.avatarUrl,
        name: app.globalData.userInfo.nickName
      });
    }
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

    // if (e.detail.index == 0) {
    //   tempUrl = "../../pages/testHome/testHome";
    // } else if (e.detail.index == 1) {
    //   tempUrl = "../../pages/programs/programs";
    // } else if (e.detail.index == 2) {
    //   tempUrl = "../../pages/class/class";
    // } else if (e.detail.index == 3) {
    //   tempUrl = "../../pages/info/info";
    // }

    if (e.detail.index == 0) {
      tempUrl = "../../pages/testHome/testHome";
    } else if (e.detail.index == 1) {
      tempUrl = "../../pages/programs/programs";
    } else if (e.detail.index == 2) {
      tempUrl = "../../pages/info/info";
    }

    wx.redirectTo({
      url: tempUrl,
    })
  },

  //退出登录
  clearStorage() {
    wx.clearStorage();

    wx.redirectTo({
      url: "../../pages/index/index",
    })
  }
})