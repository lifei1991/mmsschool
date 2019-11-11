// pages/school/school.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "593a11abac32dc271229bcd2",
    currentTab: 0,
    school: {
      schoolLogo: "",
      chineseName: "",
      name: "",
      state: "",
      usa: "1",
      world: "",
      british: "",
      hotCount: "10"
    },
    programs: [],
    pn: 1,    //分页请求
    totalpage: 10,    //总页数
    isloading: true,    //是否显示加载动画
    p: 1, //录取案例分页
    offers: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    if (query.id != undefined) {
      this.setData({
        id: query.id
      });
    }

    this.getSchool();
    this.getSchoolPrograms();
    this.getOffers();
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
    if (this.data.currentTab == 1) {
      wx.showNavigationBarLoading();    //在当前页面显示导航条加载动画
      console.log("xia")
      var pn = this.data.pn;
      var totalpage = this.data.totalpage + 1;
      pn++;
      if (pn > totalpage) {
        return;
      }
      this.setData({
        isloading: false,
        pn: pn
      })

      // wx.showLoading({
      //   title: '加载中...'
      // })
      this.getSchoolPrograms();
    }

    if (this.data.currentTab == 2) {
      wx.showNavigationBarLoading();    //在当前页面显示导航条加载动画
      console.log("xia")
      var p = this.data.p;
      var totalpage = this.data.totalpage + 1;
      p++;
      if (p > totalpage) {
        return;
      }
      this.setData({
        isloading: false,
        p: p
      })

      // wx.showLoading({
      //   title: '加载中...'
      // })
      this.getOffers();
    }
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
  },

  toProgram() {
    wx.navigateTo({
      url: "../../pages/program/program",
    })
  },

  getSchool: function () {
    // wx.showLoading({
    //   title: '加载中...'
    // })
    var that = this;
    wx.request({
      url: 'https://cms.palmdrive.cn/json/institutes',
      method: 'GET',
      data: {
        id: that.data.id,
        ps: 2000,
        pn: 1
      },
      header: {//定死的格式，不用改，照敲就好
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.status == 500) {    //没有更多数据
          wx.showToast({
            title: '没有数据了',
            icon: 'none'
          })
          that.setData({
            isloading: false
          })
        } else {
          that.setData({
            school: res.data.data.institutes[0],
            isloading: false,
            totalpage: res.data.totalpage
          })
        }

        setTimeout(function () {
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh();
          wx.hideLoading();
        }, 500)
      },
      fail: function (res) {
        console.log('.........fail..........');
        wx.hideLoading();
      }
    })
  },

  getSchoolPrograms: function () {
    // wx.showLoading({
    //   title: '加载中...'
    // })
    var that = this;
    wx.request({
      url: 'https://cms.palmdrive.cn/json/programinfos',
      method: 'GET',
      data: {
        school: that.data.id,
        ps: 10,
        pn: that.data.p
      },
      header: {//定死的格式，不用改，照敲就好
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.status == 500) {    //没有更多数据
          wx.showToast({
            title: '暂未找到数据',
            icon: 'none'
          })
          that.setData({
            isloading: false
          })
        } else {
          var newsArr = that.data.programs;
          for (var i = 0; i < res.data.data.objs.length; i++) {
            newsArr.push(res.data.data.objs[i]);
          }
          that.setData({
            programs: newsArr,
            isloading: false,
            totalpage: res.data.totalpage
          })
        }

        setTimeout(function () {
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh();
          wx.hideLoading();
        }, 500)
      },
      fail: function (res) {
        console.log('.........fail..........');
        wx.hideLoading();
      }
    })
  },

  getOffers: function () {
    // wx.showLoading({
    //   title: '加载中...'
    // })
    var that = this;
    wx.request({
      url: 'https://cms.palmdrive.cn/json/user/offers',
      method: 'GET',
      data: {
        // kvs: JSON.stringify([{ "k": "offerShoolId", "v": that.data.id, "wild": true }]),
        status: "OFFER",
        ps: 10,
        pn: that.data.p,
        // sorts: [{ "k": "student", "v": "-1" }],
        beginTime: 0,
        endTime: 0,
        timeSort: -1
      },
      header: {//定死的格式，不用改，照敲就好
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.data.status == 500) {
          that.setData({
            isloading: false
          })
          console.log('.........fail..........');
        } else {
          that.setData({
            // offers: res.data.data.institutes[0]
          })
        }
      },
      fail: function (res) {
        console.log('.........fail..........');
        wx.hideLoading();
      }
    })
  },

})