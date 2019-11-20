// pages/search/search.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    ],
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    schoolList: [ //假数据
      {
        img: "../../image/项目列表/schools/Oval.png",
        name: "普林斯顿大学",
        englishName: "Princeton University",
        place: "新泽西州",
        hotCount: "10"
      },
      {
        img: "../../image/项目列表/schools/Oval(1).png",
        name: "哈佛大学",
        englishName: "Harvard University",
        place: "马萨诸塞州",
        hotCount: "15"
      },
      {
        img: "../../image/项目列表/schools/Oval(2).png",
        name: "耶鲁大学",
        englishName: "Yale University",
        place: "康涅狄格州",
        hotCount: "15"
      },
      {
        img: "../../image/项目列表/schools/Oval(3).png",
        name: "芝加哥大学",
        englishName: "Yale University",
        place: "伊利诺伊州",
        hotCount: "15"
      },
      {
        img: "../../image/项目列表/schools/Oval(4).png",
        name: "哥伦比亚大学",
        englishName: "Columbia University",
        place: "纽约州",
        hotCount: "15"
      },
      {
        img: "../../image/项目列表/schools/Oval(5).png",
        name: "斯坦福大学",
        englishName: "Stanford University",
        place: "康涅狄格州",
        hotCount: "15"
      },
    ],
    p: 1,    //分页请求
    totalpage: 10,    //总页数
    isloading: true,    //是否显示加载动画
    newsList: [],

    selectShow: false,//初始option不显示
    nowText: "美国",//初始内容
    animationData: {},//右边箭头的动画
    country: "United States",
    showNoList: false,
    propArray: [
      {
        "id": "United States",
        "text": "美国"
      },
      {
        "id": "United Kingdom",
        "text": "英国"
      },
      {
        "id": "Singapore",
        "text": "新加坡"
      },
      {
        "id": "Hong Kong",
        "text": "中国香港"
      },
    ],
    searchValue: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180 - 82 - 16;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });

    // that.obtainNews();
    this.setData({
      search: this.search.bind(this)
    })
  },
  footerTap: app.footerTap,

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

  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();

    if (e.detail.current == 0) {
      this.setData({
        p: 1,
        newsList: [],
        ps: 20
      })
    } else {
      this.setData({
        p: e.detail.current,
        newsList: [],
        ps: 20
      })
    }
    this.obtainNews()
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })

      if (cur == 0) {
        this.setData({
          p: 1,
          newsList: [],
          ps: 20
        })
      } else {
        this.setData({
          p: cur,
          newsList: [],
          ps: 20
        })
      }
    }
    // this.obtainNews();
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 3) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },

  obtainNews: function () {
    // wx.showLoading({
    //   title: '加载中...'
    // })
    var that = this;
    wx.request({
      url: 'https://cms.palmdrive.cn/json/institutes',
      method: 'GET',
      data: {
        status: 0,
        s: that.data.searchValue,
        f: 'name',
        ps: 2000,
        pn: that.data.p,
        // country: that.data.country,
        ps: 20,
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
          that.data.newsList = [];
          var newsArr = that.data.newsList;
          for (var i = 0; i < res.data.data.institutes.length; i++) {
            newsArr.push(res.data.data.institutes[i]);
          }
          that.setData({
            newsList: newsArr,
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

  pullRefresh: function () {
    if (this.data.currentTab == 0) {
      // this.onLoad();    //刷新页面
      this.setData({
        newsList: [],
        isloading: true,
        p: 1,
        ps: 20
      })

      wx.showLoading({
        title: '加载中...'
      })
      this.obtainNews();

      setTimeout(function () {
        wx.hideNavigationBarLoading();    //在当前页面隐藏导航条加载动画
        wx.stopPullDownRefresh();    //停止下拉动作
      }, 2000)
    }
  },

  bottomRefresh: function () {
    if (this.data.currentTab == 0) {
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
      this.obtainNews();
    }
  },

  selectSchool(e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/school/school?id=' + id
    })
  },


  selectToggle: function () {
    var nowShow = this.data.selectShow;//获取当前option显示的状态
    //创建动画
    var animation = wx.createAnimation({
      timingFunction: "ease"
    })
    this.animation = animation;
    if (nowShow) {
      animation.rotate(0).step();
      this.setData({
        animationData: animation.export()
      })
    } else {
      animation.rotate(180).step();
      this.setData({
        animationData: animation.export()
      })
    }
    this.setData({
      selectShow: !nowShow
    })
  },
  //设置内容
  setText: function (e) {
    var nowData = this.properties.propArray;//当前option的数据是引入组件的页面传过来的，所以这里获取数据只有通过this.properties
    var nowIdx = e.target.dataset.index;//当前点击的索引
    var nowText = nowData[nowIdx].text;//当前点击的内容
    //再次执行动画，注意这里一定，一定，一定是this.animation来使用动画
    this.animation.rotate(0).step();
    this.setData({
      selectShow: false,
      nowText: nowText,
      animationData: this.animation.export(),
      country: nowData[nowIdx].id,
      newsList: [],
      // p: 1,
      // currentTab: 0
    })

    if (this.data.currentTab == 0) {
      this.pullRefresh();
    } else {
      this.setData({
        currentTab: 0
      })
    }
  },

  clickSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  search: function (value) {
    this.setData({
      searchValue: value
    })
    return new Promise((resolve, reject) => {
      this.obtainNews();
      // setTimeout(() => {
      //   resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
      // }, 200)
    })
  },
})