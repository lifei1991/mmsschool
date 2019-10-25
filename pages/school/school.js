// pages/school/school.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 2,
    school: {
      logo: "../../image/项目列表/schools/Oval(5).png",
      schoolChinses: "斯坦福大学",
      schoolText: "Stanford University",
      place: "加利福尼亚州",
      hotCount: "10",
      programs: [
        {
          name:"电气工程系",
          englishName: "Department of Electrical Engineering Department",
          img: "../../image/项目列表/programs/1.png",
        },
        {
          name: "电气工程系",
          englishName: "Department of Electrical Engineering",
          img: "../../image/项目列表/programs/1.png",
        },
        {
          name: "电气工程系",
          englishName: "Department of Electrical Engineering",
          img: "../../image/项目列表/programs/1.png",
        },
        {
          name: "电气工程系",
          englishName: "Department of Electrical Engineering",
          img: "../../image/项目列表/programs/1.png",
        },
        {
          name: "电气工程系",
          englishName: "Department of Electrical Engineering",
          img: "../../image/项目列表/programs/1.png",
        },
      ]
    }
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