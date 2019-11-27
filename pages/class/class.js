// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    p1: 1,
    p2: 1,
    array: [
      // {
      //   imgUrl: "../../image/手机摄影.png",
      //   title: "剑桥全奖得主英国申请“私货”全分享",
      //   time: "08-24 20:00",
      //   testPeople: "999",
      //   buttonUrl: ""
      // },
      // {
      //   imgUrl: "/image/手机摄影(1).png",
      //   title: "如何花最短的时间拿到最爱的offer？",
      //   time: "08-24 20:00",
      //   testPeople: "999",
      //   buttonUrl: ""
      // },
      // {
      //   imgUrl: "/image/手机摄影(2).png",
      //   title: "雅思入门进阶七日训练营",
      //   time: "08-24 20:00",
      //   testPeople: "999",
      //   buttonUrl: ""
      // },
      // {
      //   imgUrl: "../../image/手机摄影.png",
      //   title: "剑桥全奖得主英国申请“私货”全分享",
      //   time: "08-24 20:00",
      //   testPeople: "999",
      //   buttonUrl: ""
      // },
      // {
      //   imgUrl: "/image/手机摄影(1).png",
      //   title: "如何花最短的时间拿到最爱的offer？",
      //   time: "08-24 20:00",
      //   testPeople: "999",
      //   buttonUrl: ""
      // },
    ],
    arrayZL: [
      // {
      //   imgUrl: "../../image/手机摄影.png",
      //   title: "30天DIY搞定文书",
      //   word: "文书",
      //   testPeople: "2200",
      //   buttonUrl: ""
      // },
      // {
      //   imgUrl: "/image/手机摄影(1).png",
      //   title: "美国名校CS专业多维度详解",
      //   word: "CS",
      //   testPeople: "2200",
      //   buttonUrl: ""
      // },
      // {
      //   imgUrl: "/image/手机摄影(2).png",
      //   title: "名校导师推荐信模板",
      //   word: "推荐信",
      //   testPeople: "2200",
      //   buttonUrl: ""
      // },
      // {
      //   imgUrl: "../../image/手机摄影.png",
      //   title: "剑桥全奖得主英国申请“私货”全分享",
      //   word: "文书",
      //   testPeople: "2200",
      //   buttonUrl: ""
      // },
      // {
      //   imgUrl: "/image/手机摄影(1).png",
      //   title: "美国名校CS专业多维度详解",
      //   word: "CS",
      //   testPeople: "2200",
      //   buttonUrl: ""
      // },
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
    this.getList(this.data.p1);
    this.getList(this.data.p2);
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
    if (this.data.currentTab == 0) {
      wx.showNavigationBarLoading();    //在当前页面显示导航条加载动画
      console.log("xia")
      var p1 = this.data.p1;
      var totalpage = this.data.totalpage + 1;
      p1++;
      if (p1 > totalpage) {
        return;
      }
      this.setData({
        isloading: false,
        p1: p1
      })

      this.getList(this.data.p1);
    }

    if (this.data.currentTab == 1) {
      wx.showNavigationBarLoading();    //在当前页面显示导航条加载动画
      console.log("xia")
      var p2 = this.data.p2;
      var totalpage = this.data.totalpage + 1;
      p2++;
      if (p2 > totalpage) {
        return;
      }
      this.setData({
        isloading: false,
        p2: p2
      })

      this.getList(this.data.p2);
    }
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

    // this.getList();
  },

  getList(pnTemp) {
    let that = this;
    // let pnTemp = 1;
    // if (that.data.currentTab == 0) {
    //   pnTemp = that.data.p1;
    // } else if (that.data.currentTab == 1) {
    //   pnTemp = that.data.p2;
    // }

    wx.request({
      url: 'https://cms.palmdrive.cn/json/wx/program',
      method: 'GET',
      data: {
        type: that.data.currentTab,
        ps: 10,
        pn: pnTemp,
      },
      header: {//定死的格式，不用改，照敲就好
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.status == "FAIL") {
          that.setData({
            isloading: false
          })
          console.log('.........fail..........');
        } else {
          let arrayTemp = that.data.array;

          if (that.data.currentTab == 0) {
            arrayTemp = that.data.array;
          } else if (that.data.currentTab == 1) {
            arrayTemp = that.data.arrayZL;
          }

          for (var i = 0; i < res.data.data.objs.length; i++) {
            arrayTemp.push(res.data.data.objs[i]);
          }

          for (let item of arrayTemp) {
            item.time = that.formateTime(item.beginTime);
          }

          if (that.data.currentTab == 0) {
            that.setData({
              array: arrayTemp,
              isloading: false,
              totalpage: res.data.totalpage
            })
          } else if (that.data.currentTab == 1) {
            that.setData({
              arrayZL: arrayTemp,
              isloading: false,
              totalpage: res.data.totalpage
            })
          }
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

  toUrl(e) {
    wx.navigateTo({
      url: "../../pages/webView/webView?url=" + e.target.dataset.url,
      success: function (e) {
        console.log(e);
      },
      fail: function (err) {
        console.log(err);
      }
    })
  },

  formateTime(unixtime) {
    var date = new Date(unixtime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    // return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;//年月日时分秒
    return m + '-' + d + ' ' + h + ':' + minute;
    // return y + '-' + m + '-' + d;
  }
})