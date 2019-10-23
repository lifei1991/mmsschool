// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    array: [
      {
        imgUrl: "../../image/手机摄影.png",
        title: "剑桥全奖得主英国申请“私货”全分享",
        time: "08-24 20:00",
        testPeople: "999",
        buttonUrl: ""
      },
      {
        imgUrl: "/image/手机摄影(1).png",
        title: "如何花最短的时间拿到最爱的offer？",
        time: "08-24 20:00",
        testPeople: "999",
        buttonUrl: ""
      },
      {
        imgUrl: "/image/手机摄影(2).png",
        title: "雅思入门进阶七日训练营",
        time: "08-24 20:00",
        testPeople: "999",
        buttonUrl: ""
      },
      {
        imgUrl: "../../image/手机摄影.png",
        title: "剑桥全奖得主英国申请“私货”全分享",
        time: "08-24 20:00",
        testPeople: "999",
        buttonUrl: ""
      },
      {
        imgUrl: "/image/手机摄影(1).png",
        title: "如何花最短的时间拿到最爱的offer？",
        time: "08-24 20:00",
        testPeople: "999",
        buttonUrl: ""
      },
    ],
    arrayZL: [
      {
        imgUrl: "../../image/手机摄影.png",
        title: "30天DIY搞定文书",
        word: "文书",
        testPeople: "2200",
        buttonUrl: ""
      },
      {
        imgUrl: "/image/手机摄影(1).png",
        title: "美国名校CS专业多维度详解",
        word: "CS",
        testPeople: "2200",
        buttonUrl: ""
      },
      {
        imgUrl: "/image/手机摄影(2).png",
        title: "名校导师推荐信模板",
        word: "推荐信",
        testPeople: "2200",
        buttonUrl: ""
      },
      {
        imgUrl: "../../image/手机摄影.png",
        title: "剑桥全奖得主英国申请“私货”全分享",
        word: "文书",
        testPeople: "2200",
        buttonUrl: ""
      },
      {
        imgUrl: "/image/手机摄影(1).png",
        title: "美国名校CS专业多维度详解",
        word: "CS",
        testPeople: "2200",
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
  },

  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  }
})