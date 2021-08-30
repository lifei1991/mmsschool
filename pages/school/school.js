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
      hotCount: "10",
      id: ""
    },
    programs: [],
    pn: 1,    //分页请求
    totalpage: 10,    //总页数
    isloading: true,    //是否显示加载动画
    p1: 1, 
    p2: 1, //录取案例分页
    offers: [],
    hot: "10",
    programsCount: "",
    major: "选择专业",
    multiIndex: [0],
    multiArray: [['Business', 'Law', 'Engineering', 'Science', 'Social Science & Humanities', 'Medicine', 'Arts & Design', '查看所有专业'], ['Accounting']],
    majorsArray: [],
    majorId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    if (query.id != undefined) {
      this.setData({
        id: query.id,
        hot: query.hot
      });
    }

    this.getSchool();
    this.getSchoolPrograms();
    this.getOffers();
    this.getMajors(this.data.multiArray[0][0]);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.data.currentTab == 1) {
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
      // wx.showLoading({
      //   title: '加载中...'
      // })
      this.getSchoolPrograms();
    }

    if (this.data.currentTab == 2) {
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
        // p: 1
      })
    }
  },

  toProgram(e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: "../../pages/program/program?id=" + id + "&school=" + this.data.school.id + "&schoolChinese=" + this.data.school.chineseName
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
    wx.showNavigationBarLoading(); 
    var that = this;
    wx.request({
      url: 'https://cms.palmdrive.cn/json/programinfos',
      method: 'GET',
      data: {
        school: that.data.id,
        ps: 10,
        pn: that.data.p1,
        major: that.data.majorId,
        year: new Date().getFullYear() + 1
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
            if (res.data.data.objs[i].icons.length == 0) {
              //商科
              if (res.data.data.objs[i].category == 'Business') {
                res.data.data.objs[i].iconShow = "../../image/mock/sk/1.jpg"
              }

              //理工科
              if (res.data.data.objs[i].category == 'Engineering' || res.data.data.objs[i].category == 'Science' || res.data.data.objs[i].category == 'Medicine') {
                res.data.data.objs[i].iconShow = "../../image/mock/lgk/1.jpg"
              }

              //文科
              if (res.data.data.objs[i].category == 'Social Science & Humanities' || res.data.data.objs[i].category == 'Law') {
                res.data.data.objs[i].iconShow = "../../image/mock/wk/1.jpg"
              }

              if (res.data.data.objs[i].category == '') {
                res.data.data.objs[i].iconShow = "../../image/mock/sk/2.jpg"
              }

            } else {
              res.data.data.objs[i].iconShow = "http://cms.palmdrive.cn" + res.data.data.objs[i].icons[0].url
            }
            newsArr.push(res.data.data.objs[i]);
          }
          that.setData({
            programs: newsArr,
            isloading: false,
            totalpage: res.data.totalpage,
            programsCount: res.data.data.count
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
    var that = this;
    wx.request({
      url: 'https://cms.palmdrive.cn/json/wx/offers',
      method: 'GET',
      data: {
        school: that.data.id,
        ps: 10,
        pn: that.data.p2,
      },
      header: {//定死的格式，不用改，照敲就好
        // 'content-type': 'application/json'
        'content-type': 'application/texts'
      },
      success: function (res) {
        if (res.data.status == "FAIL") {
          that.setData({
            isloading: false
          })
          console.log('.........fail..........');
        } else {
          let offersArr = that.data.offers;
          for (var i = 0; i < res.data.data.objs.length; i++) {
            offersArr.push(res.data.data.objs[i]);
          }
          that.setData({
            offers: offersArr,
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

  getImgUrl: function (item) {
    return "http://cms.palmdrive.cn" + item.icons[0].url
  },

  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
      major: this.data.multiArray[1][e.detail.value[1]],
      majorId: this.data.majorsArray[e.detail.value[1]].id,
      programs: []
    })

    this.getSchoolPrograms();
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var that = this;
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        if (data.multiArray[0][e.detail.value] != '查看所有专业') {
          this.getMajors(data.multiArray[0][e.detail.value])
        } else {
          that.data.multiArray[1] = ['查看所有专业'];
          that.setData({
            multiArray: that.data.multiArray,
            majorId: '',
            major: '选择专业',
            majorsArray: [{ id : ''}]
          })
        }
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

          //存储整个major对象
          that.data.majorsArray = res.data.data.majors

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

})