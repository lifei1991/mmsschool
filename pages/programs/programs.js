// pages/programs/programs.js
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
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    schoolList: [ //假数据
      { 
        img: "../../image/project/schools/Oval.png",
        name: "普林斯顿大学",
        englishName: "Princeton University",
        place: "新泽西州",
        hotCount: "10"
      },
      {
        img: "../../image/project/schools/Oval(1).png",
        name: "哈佛大学",
        englishName: "Harvard University",
        place: "马萨诸塞州",
        hotCount: "15"
      },
      {
        img: "../../image/project/schools/Oval(2).png",
        name: "耶鲁大学",
        englishName: "Yale University",
        place: "康涅狄格州",
        hotCount: "15"
      },
      {
        img: "../../image/project/schools/Oval(3).png",
        name: "芝加哥大学",
        englishName: "Yale University",
        place: "伊利诺伊州",
        hotCount: "15"
      },
      {
        img: "../../image/project/schools/Oval(4).png",
        name: "哥伦比亚大学",
        englishName: "Columbia University",
        place: "纽约州",
        hotCount: "15"
      },
      {
        img: "../../image/project/schools/Oval(5).png",
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
        "id": 'Australia',
        "text": '澳洲'
      },
      {
        "id": 'Canada',
        "text": '加拿大'
      },
      {
        "id": 'Hong Kong',
        "text": '中国香港'
      },
      {
        "id": 'Macao',
        "text": '中国澳门'
      },
      {
        "id": 'Singapore',
        "text": '新加坡'
      },
      {
        "id": 'France',
        "text": '法国'
      },
      {
        "id": 'Netherlands',
        "text": '荷兰'
      },
      {
        "id": 'Germany',
        "text": '德国'
      },
      {
        "id": 'Italy',
        "text": '意大利'
      },
      {
        "id": 'Switzerland',
        "text": '瑞士'
      },
      {
        "id": 'Japan',
        "text": '日本'
      },
      {
        "id": 'Korea',
        "text": '韩国'
      }
      // {
      //   "id": "Singapore",
      //   "text": "新加坡"
      // },
      // {
      //   "id": "Hong Kong",
      //   "text": "中国香港"
      // },
    ],
    major: "选择专业",

    multiIndex: [0],
    multiArray: [['Business', 'Law', 'Engineering', 'Science', 'Social Science & Humanities', 'Medicine', 'Arts & Design'], ['Accounting']],
    status: 2,
    currentTab2: 0,
    currentTab3: 0,
    searchText: ""
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

    that.obtainNews();
    that.getMajors(that.data.multiArray[0][0]);

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
    wx.showLoading({
      title: '加载中...'
    })
    var that = this;
    wx.request({
      url: 'https://cms.palmdrive.cn/json/institutes/wechat',
      method: 'GET',
      data: {
        status: that.data.status,
        s: that.data.searchText,
        f: 'name',
        ps: 20,
        pn: that.data.p,
        country: that.data.country,
        major: that.data.major,
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
          var newsArr = that.data.newsList;
          for (var j = 0; j < res.data.data.instituteAndProgramInfos.length; j++) {

            for (var i = 0; i < res.data.data.instituteAndProgramInfos[j].programs.objs.length; i++) {
              let tempProgram = res.data.data.instituteAndProgramInfos[j].programs.objs[i];
              if (tempProgram.icons.length == 0) {
                //商科
                if (tempProgram.category == 'Business') {
                  tempProgram.iconShow = "../../image/mock/sk/1.jpg"
                }
  
                //理工科
                if (tempProgram.category == 'Engineering' || tempProgram.category == 'Science' || tempProgram.category == 'Medicine') {
                  tempProgram.iconShow = "../../image/mock/lgk/1.jpg"
                }
  
                //文科
                if (tempProgram.category == 'Social Science & Humanities' || tempProgram.category == 'Law') {
                  tempProgram.iconShow = "../../image/mock/wk/1.jpg"
                }
  
                if (tempProgram.category == '') {
                  tempProgram.iconShow = "../../image/mock/sk/2.jpg"
                }
  
              } else {
                tempProgram.iconShow = "http://cms.palmdrive.cn" + tempProgram.icons[0].url
              }
            }

            newsArr.push(res.data.data.instituteAndProgramInfos[j]);
          }
          that.setData({
            newsList: newsArr,
            isloading: false,
            totalpage: res.data.totalpage
          })

          setTimeout(function () {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
            wx.hideLoading();
          }, 500)
        }
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
    var item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: '/pages/school/school?id=' + id +'&hot=' + item.programs.objs.length
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
    var nowData = this.properties.propArray;
    var nowIdx = e.target.dataset.index;
    var nowText = nowData[nowIdx].text;
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

    if(nowText == "美国") {
      this.setData({
        status: 2,
        currentTab2: 0,
        showMajorDiv: false,
        major: "选择专业",
        showMajorDiv: false
      })
    } if(nowText == "英国") {
      this.setData({
        status: 4,
        currentTab2: 0,
        showMajorDiv: false,
        major: "选择专业",
        showMajorDiv: false
      })
    } else {
      this.setData({
        status: 0,
        currentTab2: 1,
        showMajorDiv: false,
        major: "选择专业",
        showMajorDiv: false
      })
    }

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


  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
      major: this.data.multiArray[1][e.detail.value[1]]
    })

    // this.data.major = this.data.multiArray[1][e.detail.value[1]];
    this.data.newsList = [];
    this.obtainNews();
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        this.getMajors(data.multiArray[0][e.detail.value])
        // switch (data.multiIndex[0]) {
        //   case 0:
        //     data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
        //     break;
        //   case 1:
        //     data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
        //     break;
        // }
        // data.multiIndex[1] = 0;
        // // data.multiIndex[2] = 0;
        // break;
      
    }
    console.log(data.multiIndex);
    this.setData(data);
  },

  //根据专业大类获取专业
  getMajors(item) {
    var that = this;
    wx.request({
      url: 'https://cms.palmdrive.cn/json/majors',
      method: 'GET',
      data: {
        f: item,
      },
      header: {//定死的格式，不用改，照敲就好
        'content-type': 'application/json'
        // 'content-type': 'application/texts'
      },
      success: function (res) {
        if (res.data.status == "FAIL") {
          that.setData({
            isloading: false
          })
          console.log('.........fail..........');
        } else {
          let tempList = [];
          for(let major of res.data.data.majors) {
            tempList.push(major.name);
          }

          that.data.multiArray[1] = tempList;

          that.setData({
            multiArray: that.data.multiArray
          })
        }

        setTimeout(function () {
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh();
          // wx.hideLoading();
        }, 500)
      },
      fail: function (res) {
        console.log('.........fail..........');
        // wx.hideLoading();
      }
    })
  },

  selectUS(e) {
    var cur = e.currentTarget.dataset.current;
    if (this.data.currentTab2 == cur) { 
      return false; 
    } else {
      this.setData({
        status: 2,
        currentTab2: cur,
        newsList: [],
        major: "选择专业",
        showMajorDiv: false
      })
    }

    this.obtainNews();
  },

  selectQS(e) {
    var cur = e.currentTarget.dataset.current;
    if (this.data.currentTab2 == cur) { 
      return false; 
    } else {
      this.setData({
        status: 0,
        currentTab2: cur,
        newsList: [],
        major: "选择专业",
        showMajorDiv: false
      })
    }

    this.obtainNews();
  },

  selectMajorBtn(e) {
    var cur = e.currentTarget.dataset.current;
    if (this.data.currentTab2 == cur) { 
      this.setData({
        showMajorDiv: !this.data.showMajorDiv
      })
      return false; 
    } else {
      if (this.data.nowText == "美国") {
        this.setData({
          status: 2,
          currentTab2: cur,
          showMajorDiv: true
        })
      } else if (this.data.nowText == "英国") {
        this.setData({
          status: 4,
          currentTab2: cur,
          showMajorDiv: true
        })
      } else {
        this.setData({
          status: 0,
          currentTab2: cur,
          showMajorDiv: true
        })
      }
      
    }

    // this.obtainNews();
  },

  selectTWS(e) {
    var cur = e.currentTarget.dataset.current;
    if (this.data.currentTab2 == cur) { 
      return false; 
    } else {
      this.setData({
        status: 4,
        currentTab2: cur,
        newsList: [],
        major: "选择专业",
        showMajorDiv: false
      })
    }

    this.obtainNews();
  },

  search(value) {
    setTimeout(() => {
      this.setData({
        searchText: value
      })
      return new Promise((resolve, reject) => {
        this.setData({
          newsList: [],
          isloading: false,
          totalpage: 10
        })

        // this.obtainNews();

        var that = this;

        wx.request({
          url: 'https://cms.palmdrive.cn/json/institutes/wechat',
          method: 'GET',
          data: {
            status: that.data.status,
            s: that.data.searchText,
            f: 'name',
            ps: 20,
            pn: that.data.p,
            country: that.data.country,
            major: that.data.major,
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
              var newsArr = that.data.newsList;
              for (var j = 0; j < res.data.data.instituteAndProgramInfos.length; j++) {
    
                for (var i = 0; i < res.data.data.instituteAndProgramInfos[j].programs.objs.length; i++) {
                  let tempProgram = res.data.data.instituteAndProgramInfos[j].programs.objs[i];
                  if (tempProgram.icons.length == 0) {
                    //商科
                    if (tempProgram.category == 'Business') {
                      tempProgram.iconShow = "../../image/mock/sk/1.jpg"
                    }
      
                    //理工科
                    if (tempProgram.category == 'Engineering' || tempProgram.category == 'Science' || tempProgram.category == 'Medicine') {
                      tempProgram.iconShow = "../../image/mock/lgk/1.jpg"
                    }
      
                    //文科
                    if (tempProgram.category == 'Social Science & Humanities' || tempProgram.category == 'Law') {
                      tempProgram.iconShow = "../../image/mock/wk/1.jpg"
                    }
      
                    if (tempProgram.category == '') {
                      tempProgram.iconShow = "../../image/mock/sk/2.jpg"
                    }
      
                  } else {
                    tempProgram.iconShow = "http://cms.palmdrive.cn" + tempProgram.icons[0].url
                  }
                }
    
                newsArr.push(res.data.data.instituteAndProgramInfos[j]);
              }
              that.setData({
                newsList: newsArr,
                isloading: false,
                totalpage: res.data.totalpage
              })
    
              setTimeout(function () {
                wx.hideNavigationBarLoading();
                wx.stopPullDownRefresh();
                wx.hideLoading();
              }, 500)
            }
          },
          fail: function (res) {
            console.log('.........fail..........');
            wx.hideLoading();
          }
        })
      })
    }, 1000)
  },
  
})