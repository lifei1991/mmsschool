// pages/program/program.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    school: "",
    select: false,
    btnText: "展开全部",
    dialogContent: "你还没有完成竞争力测评哦，完成测评即可查看你的申请竞争力！",
    buttons: [{ text: '返回' }, { text: '完成测评' }],
    isloading: true,
    totalpage: 10,
    p1: 1,
    program: {},
    offers: [],
    schoolChinese: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (query) {
    if (query.id != undefined) {
      this.setData({
        id: query.id,
        school: query.school,
        schoolChinese: query.schoolChinese,
      });
    }

    this.getProgram();
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
    this.getOffers();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindShowMsg() {
    this.setData({
      select: !this.data.select,
      btnText: this.data.select ? "展开全部" : "收起"
    })
  },

  getProgram() {
    var that = this;
    wx.request({
      url: 'https://cms.palmdrive.cn/json/programinfos',
      method: 'GET',
      data: {
        id: that.data.id,
        ps: 10,
        pn: 1
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
          var newsArr = res.data.data.objs[0];

          for (let item of newsArr.deadlines) {
            item.formatDate = that.formateTime(item.date);
          }

          if (newsArr.icons.length == 0) {
            //商科
            if (newsArr.category == 'Business') {
              newsArr.iconShow = "../../image/mock/sk/1-1.jpg"
            }

            //理工科
            if (newsArr.category == 'Engineering' || newsArr.category == 'Science' || newsArr.category == 'Medicine') {
              newsArr.iconShow = "../../image/mock/lgk/1-1.jpg"
            }

            //文科
            if (newsArr.category == 'Social Science & Humanities' || newsArr.category == 'Law') {
              newsArr.iconShow = "../../image/mock/wk/1-1.jpg"
            }

            if (newsArr.category == '') {
              newsArr.iconShow = "../../image/mock/sk/2-1.jpg"
            }

          } else {
            newsArr.iconShow = "http://cms.palmdrive.cn" + newsArr.icons[0].url
          }
          
          
          that.setData({
            program: newsArr,
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

  //查看申请竞争力
  getCompetitiveness() {
    if (wx.getStorageSync('Z0')) {
      let temp = "你当前在此项目的申请竞争力为：" + wx.getStorageSync('Z0');
      this.setData({
        dialogShow: true,
        dialogContent: temp,
        buttons: [{ text: '知道啦' }],
      })
    } else {
      this.setData({
        dialogShow: true,
        dialogContent: "你还没有完成竞争力测评哦，完成测评即可查看你的申请竞争力！",
        buttons: [{ text: '返回' }, { text: '完成测评' }],
      })
    }
  },

  tapDialogButton(e) {
    console.log('dialog', e.detail)
    if (e.detail.index == 1) {
      wx.redirectTo({
        url: '../../pages/test/test',
      })
    }

    this.setData({
      dialogShow: false,
      showOneButtonDialog: false
    })
  },

  //获取该专业的成功案例
  getOffers: function () {
    // wx.showLoading({
    //   title: '加载中...'
    // })
    var that = this;
    wx.request({
      url: 'https://cms.palmdrive.cn/json/wx/offers',
      method: 'GET',
      data: {
        program: that.data.id,
        ps: 10,
        pn: that.data.p1,
        school: that.data.school
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
          // that.setData({
          //   offers: res.data.data.objs
          // })

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
    // return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
    return y + '-' + m + '-' + d ;
  },

  //复制小助手
  textPaste(e){
    var url = e.target.dataset.url;
    wx.setClipboardData({
      data: url,
      success: function (res) {
        // wx.hideToast();
        wx.showToast({
          title: '链接复制成功，请去浏览器中粘贴打开！',
          icon: 'none',
          duration: 3000
        })

        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
    
  },
})