// pages/testResult/testResult.js
import * as echarts from '../../ec-canvas/echarts';

const app = getApp()
var N0;
var C0;
var E0;
var K0;
var S0;
var Q0;

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA"],
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      radius: 50,
      // shape: 'circle',
      indicator: [{
        name: '成绩',
        max: 5
      },
      {
        name: '实习/工作',
        max: 5
      },
      {
        name: '其他竞争力',
        max: 5
      },
      {
        name: '科研',
        max: 5
      },
      {
        name: '英语成绩',
        max: 5
      },
      {
        name: '申请专业难易程度',
        max: 5
      }],
      name: {
        textStyle: {
            color: 'gray',
            // backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
       },
       //指示器文字换行 start
       formatter: function(text){
            var strlength = text.length;
            if(strlength % 6 != 0){
                text = text.replace(/\S{6}/g,function(match){
                    console.log(match);
                    return match + '\n'
                })
            }else{
                text = text.replace(/\S{6}/g,function(match){
                    console.log(match);
                    return match + '\n'
                });
                strlength = text.length;
                text = text.substring(0,strlength - 1);
            }
            return text
        }
        //指示器文字换行 end
      },
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      data: [{
        value: [C0, S0, Q0, K0, E0, N0],
        name: '预算'
      }
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading: false,
    name: '棕小榈',
    currentTab: 0,
    Y1: "",
    Y2: "",
    N1: 0,
    N2: 0,
    N0: 0,
    C0: 0,
    E0: 0,
    K0: 0,
    S0: 0,
    Q0: 0,
    Z0: 0,
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let interval = setInterval(function () {
      that.setData({
        showLoading: false,
      })
    }, 2000)
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
          name: tempUser.personal.name
        });
      } else {
        this.setData({
          name: app.globalData.user.personal.name
        });
      }
    } else {
      this.setData({
        name: app.globalData.userInfo.nickName
      });
    }

    //获取测试结果
    this.setData({
      Y1: wx.getStorageSync('Y1'),
      Y2: wx.getStorageSync('Y2'),
      N1: wx.getStorageSync('N1'),
      N2: wx.getStorageSync('N2'),
      N0: wx.getStorageSync('N0'),
      C0: wx.getStorageSync('C0'),
      E0: wx.getStorageSync('E0'),
      K0: wx.getStorageSync('K0'),
      S0: wx.getStorageSync('S0'),
      Q0: wx.getStorageSync('Q0'),
      E1: wx.getStorageSync('E1'),
      E2: wx.getStorageSync('E2'),
      E3: wx.getStorageSync('E3'),
      E4: wx.getStorageSync('E4'),
      Z0: (parseFloat(wx.getStorageSync('Z0'))).toFixed(1),
    });

    N0 = wx.getStorageSync('N0');
    C0 = wx.getStorageSync('C0');
    E0 = wx.getStorageSync('E0');
    K0 = wx.getStorageSync('K0');
    S0 = wx.getStorageSync('S0');
    Q0 = wx.getStorageSync('Q0');
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
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },

  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },

  reTest() {
    let temp = ["Y1", "Y2", "N0", "N1", "N2", "N3", "C0", "C1", "E0", "E1", "E2", "E3", "E4", "K0", "K1", "K2", "K3", "S0", "S1", "Q0", "Q1", "Q2", "Q3", "Q4", "Q5", "Z0"]
    
    for (let item of temp) {
      wx.removeStorageSync(item);
      wx.removeStorageSync(item+"-answer");
    }

    wx.removeStorageSync("testindex");

    wx.redirectTo({
      url: '../../pages/test/test',
    })
  },

  //复制小助手
  textPaste(){
    
    wx.setClipboardData({
      data: 'palmdriveace',
      success: function (res) {
        // wx.hideToast();
        wx.showToast({
          title: '微信号复制成功，请去粘贴添加新的朋友！',
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