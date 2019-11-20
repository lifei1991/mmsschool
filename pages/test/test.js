// pages/test/test.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent: 0,
    array: [
      {
        title: "占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符",
        selectA: "占字符占字符占字符",
        selectB: "占字符占字符占字符",
        selectC: "占字符占字符占字符",
        selectD: "占字符占字符占字符",
      },
      {
        title: "two占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符",
        selectA: "占字符占字符占字符",
        selectB: "占字符占字符占字符",
        selectC: "占字符占字符占字符",
        selectD: "占字符占字符占字符",
      },
      {
        title: "three占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符占字符",
        selectA: "占字符占字符占字符",
        selectB: "占字符占字符占字符",
        selectC: "占字符占字符占字符",
        selectD: "占字符占字符占字符",
      }
    ],
    index: 0,
    showItem: {},
    list: [
      {
        text: "上一题",
        iconPath: "/image/logo.png",
        selectedIconPath: "/image/logo.png",
      },
      {
        text: "下一题",
        iconPath: "",
        selectedIconPath: "",
      }
    ],
    name: '棕小榈'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.countProgress();
    
    this.setData({
      showItem: this.data.array[this.data.index],
    })
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
    this.setData({
      avatar: app.globalData.userInfo.avatarUrl,
      name: app.globalData.userInfo.nickName
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
    wx.showNavigationBarLoading();
    console.log("shang")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showNavigationBarLoading();
    console.log("xia")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //答案点击事件
  selectedItem(e) {
    this.setData({
      _num: e.target.dataset.num,
    });

    if (this.data.index < this.data.array.length - 1) {
      this.data.index = this.data.index + 1;
    }

    let that = this;
    setTimeout(function () { 
      that.setData({
        _num: 0,
        showItem: that.data.array[that.data.index],
        index: that.data.index
      });
    }, 200);

    this.countProgress();
  },

  //上下题切换
  tabChange(e) {
    console.log('tab change', e);
    let num = Number(e.currentTarget.dataset.id);
    let tempIndex = this.data.index;
    if (num == 0 && tempIndex > 0) {
      tempIndex = tempIndex - 1;
    }

    if (num == 1 && tempIndex < this.data.array.length - 1) {
      tempIndex = tempIndex + 1;
    }

    // this.data.index = tempIndex;
    this.setData({
      showItem: this.data.array[tempIndex],
      index: tempIndex
    });

    this.countProgress();
  },

  //计算进度条
  countProgress() {
    this.setData({
      percent : (this.data.index + 1) / this.data.array.length * 100
    });

    //判断上一题，下一题是否可点击
    if (this.data.index == 0) {
      this.setData({
        _dis: 0,
      });
    } else if (this.data.index == this.data.array.length - 1) {
      this.setData({
        _dis: 1,
      });
    } else {
      this.setData({
        _dis: 2,
      });
    }
    
  },

  //确认提交
  submitTest() {
    wx.navigateTo({
      url: '/pages/testResult/testResult'
    })
  }
})