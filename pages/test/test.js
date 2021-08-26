// pages/test/test.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent: 0,
    testArray: [
      {
        section: "申请专业",
        sectionIndex: "Y0",
        array: [
          {
            index: "Y1",
            title: "申请专业大类",
            options: [
              {
                index: "A",
                text: "文科",
                textScore: "0",
              },
              {
                index: "B",
                text: "商科",
                textScore: "0",
              },
              {
                index: "C",
                text: "理科",
                textScore: "0",
              },
              {
                index: "D",
                text: "工科",
                textScore: "0",
              },
              {
                index: "E",
                text: "艺术",
                textScore: "0",
              },
              {
                index: "F",
                text: "医学",
                textScore: "0",
              }
            ],
            score: 0,
            type: "select",
            answer: 10000
          },
          {
            index: "Y2",
            title: "申请专业",
            options: [
              
            ],
            score: 0,
            type: "input",
            answer: "",
            placeholder: "请填写申请专业"
          },
          
        ],
        totalScore: 0
      },
      {
        section: "申请专业难易系数",
        sectionIndex: "N0",
        array: [
          {
            index: "N1",
            title: "申请学位",
            options: [
              {
                index: "A",
                text: "硕士",
                textScore: "4"
              },
              {
                index: "B",
                text: "博士",
                textScore: "1"
              },
              {
                index: "C",
                text: "硕博混申",
                textScore: "4"
              }
            ],
            score: 0,
            type: "select",
            answer: 10000
          },
          {
            index: "N2",
            title: "申请专业和毕业专业相关度 ",
            options: [
              {
                index: "A",
                text: "完全相同",
                textScore: "5"
              },
              {
                index: "B",
                text: "目标专业和所有专业虽然不同但是相关度极高，本科专业为目标专业的方向之一或包含关系，（比如数学转统计，日语转东亚研究等）",
                textScore: "4"
              },
              {
                index: "C",
                text: "目标专业和所学专业不同，但是相关性非常高，本科专业满足目标专业先修课程要求 （比如电子工程转计算机，会计转金融等）",
                textScore: "3"
              },
              {
                index: "D",
                text: "目标专业和所有专业完全不相关，但目标专业无先修课程要求 （比如对外汉语转国际关系，生物转教育等）",
                textScore: "2"
              },
              {
                index: "E",
                text: "目标专业和所有专业完全不相关，且目标专业对本专业有较高的先修课要求 （如英语转经济学，化学转艺术史等）",
                textScore: "1"
              }
            ],
            score: 0,
            type: "select",
            answer: 10000
          },
          {
            index: "N3",
            title: "最高学位",
            options: [
              {
                index: "A",
                text: "专科",
                textScore: "1"
              },
              {
                index: "B",
                text: "本科",
                textScore: "4"
              },
              {
                index: "A",
                text: "硕士",
                textScore: "5"
              },
              {
                index: "B",
                text: "博士",
                textScore: "4"
              }
            ],
            score: 0,
            type: "select",
            answer: 10000
          },
          {
            index: "Q5",
            title: "毕业院校 ",
            options: [
              {
                index: "A",
                text: "清华北大两所高校",
                textScore: "5"
              },
              {
                index: "B",
                text: "其他中国985高校",
                textScore: "4"
              },
              {
                index: "C",
                text: "中国211高校",
                textScore: "3"
              },
              {
                index: "D",
                text: "其他中国本科院校",
                textScore: "2"
              },
              {
                index: "E",
                text: "其他中国专科院校",
                textScore: "1"
              },
              {
                index: "F",
                text: "QS排名前100的海外高校",
                textScore: "5"
              },
              {
                index: "G",
                text: "其他海外University院校",
                textScore: "4"
              },
              {
                index: "H",
                text: "海外College院校",
                textScore: "1"
              }
            ],
            score: 0,
            type: "select",
            answer: 10000
          }
        ],
        totalScore: 0
      },
      {
        section: "成绩",
        sectionIndex: "C0",
        array: [
          {
            index: "C1",
            title: "总成绩GPA（以WES的4分制为准）",
            options: [
              
            ],
            score: 0,
            type: "number",
            answer: "",
            placeholder: "请填写数字，范围0-4.0"
          }
        ],
        totalScore: 0
      },
      {
        section: "英语成绩 ",
        sectionIndex: "E0",
        array: [
          {
            index: "E1",
            title: "托福成绩",
            options: [
              
            ],
            score: 0,
            type: "numberAndSelect",
            answer: "",
            placeholder: "请填写数字"
          },
          {
            index: "E2",
            title: "雅思成绩",
            options: [
              
            ],
            score: 0,
            type: "numberAndSelect",
            answer: "",
            placeholder: "请填写数字"
          }, 
          {
            index: "E3",
            title: "GRE成绩",
            options: [
              
            ],
            score: 0,
            type: "numberAndSelect",
            answer: "",
            placeholder: "请填写数字"
          }, 
          {
            index: "E4",
            title: "GMAT",
            options: [
              
            ],
            score: 0,
            type: "numberAndSelect",
            answer: "",
            placeholder: "请填写数字"
          },
        ],
        totalScore: 0
      },
      {
        section: "科研",
        sectionIndex: "K0",
        array: [
          {
            index: "K1",
            title: "科研项目完成度 ",
            options: [
              {
                index: "A",
                text: "至少一段科研课题的核心参与者 （参与设计修改科研计划，或发表了课题论文）",
                textScore: "5"
              },
              {
                index: "B",
                text: "至少一段科研的非核心重要参与者 （有独立负责部分课题内容，并独立作出某个阶段的部分成果）",
                textScore: "4"
              },
              {
                index: "C",
                text: "参与至少两段科研，承担项目的一小部分科研工作（适当参与课题，完成过科研报告，或总科研经历一年以上）",
                textScore: "3"
              },
              {
                index: "D",
                text: "只参与过一段科研，承担少部分研究工作 ，或总科研经历一年以下",
                textScore: "2"
              },
              {
                index: "E",
                text: "只辅助参与过一段科研，从事基础工作或只参与过课业项目",
                textScore: "1"
              },
              {
                index: "F",
                text: "无相关科研经历或课业项目",
                textScore: "0"
              }
            ],
            score: 0,
            type: "select",
            answer: 10000
          },
          {
            index: "K3",
            title: "科研平台 ",
            options: [
              {
                index: "A",
                text: "海外牛导师科研",
                textScore: "5"
              },
              {
                index: "B",
                text: "国内中科院或者知名科研院知名导师",
                textScore: "4"
              },
              {
                index: "C",
                text: "海外科研普通导师",
                textScore: "4"
              },
              {
                index: "D",
                text: "本校/其他学校牛导师科研经历",
                textScore: "3"
              },
              {
                index: "E",
                text: "本校/其他学校普通导师科研经历",
                textScore: "2"
              }
            ],
            score: 0,
            type: "select",
            answer: 10000
          },
          {
            index: "K2",
            title: "是否有文章/专利 ",
            options: [
              {
                index: "A",
                text: "1篇以上 1作或2作 SCI",
                textScore: "5"
              },
              {
                index: "B",
                text: "1篇以上2作以下 SCI",
                textScore: "4"
              },
              {
                index: "C",
                text: "1篇以上非SCI",
                textScore: "3"
              },
              {
                index: "D",
                text: "无",
                textScore: "1"
              }
            ],
            score: 0,
            type: "select",
            answer: 10000
          },
          
        ],
        totalScore: 0
      },
      {
        section: "实习/工作",
        sectionIndex: "S0",
        array: [
          {
            index: "S1",
            title: "和申请相关的专业实习/工作经历 ",
            options: [
              {
                index: "A",
                text: "3段以上实习/工作（至少2段3月＋；或知名大公司 3月+）；或大于2年全职工作经历",
                textScore: "5"
              },
              {
                index: "B",
                text: "2-3段相关实习/工作(至少1段3月或知名大公司 1月+)；或1-2年全职工作经历",
                textScore: "4"
              },
              {
                index: "C",
                text: "2-3 段相关实习/工作 （至少1段1-3月）",
                textScore: "3"
              },
              {
                index: "D",
                text: "1-2段相关实习(至少1段1-3月)",
                textScore: "2"
              }, 
              {
                index: "E",
                text: "1段小于1月的相关实习",
                textScore: "1"
              },
              {
                index: "F",
                text: "无相关实习",
                textScore: "0"
              }
            ],
            score: 0,
            type: "select",
            answer: 10000
          }
        ],
        totalScore: 0
      },
      {
        section: "其他竞争力",
        sectionIndex: "Q0",
        array: [
          {
            index: "Q1",
            title: "海外经历次数",
            options: [
              
            ],
            score: 0,
            type: "number",
            answer: "",
            placeholder: "请填写数字"
          },
          {
            index: "Q2",
            title: "跟申请专业相关的获奖/竞赛 经历",
            options: [
              
            ],
            score: 0,
            type: "number",
            answer: "",
            placeholder: "请填写数字"
          },
          {
            index: "Q3",
            title: "课外活动/志愿者活动数",
            options: [
              
            ],
            score: 0,
            type: "number",
            answer: "",
            placeholder: "请填写数字"
          },
          {
            index: "Q4",
            title: "推荐信",
            options: [
              {
                index: "A",
                text: "至少一封以上海外教授强推",
                textScore: "5"
              },
              {
                index: "B",
                text: "至少一封海外教授普通推荐信",
                textScore: "4"
              },
              {
                index: "C",
                text: "至少一封国内牛教授强推",
                textScore: "3"
              },
              {
                index: "D",
                text: "普通推荐信",
                textScore: "2"
              }
            ],
            score: 0,
            type: "select",
            answer: 10000
          },
          
        ],
        totalScore: 0
      }
    ],
    array: [
      {
        section: "申请专业难易系数",
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
    name: '棕小榈',
    showAll: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断是否已完成测试题
    // if (wx.getStorageSync('Z0')) {
    //   this.setData({
    //     showAll: false,
    //   })

    //   wx.navigateTo({
    //     url: '/pages/testResult/testResult'
    //   })
    
    //   return
    // }

    this.setData({
      showAll: true,
    })

    let tempArray = [];
    for (var i = 0; i < this.data.testArray.length; i++) {
      tempArray = tempArray.concat(this.data.testArray[i].array);
    }

     //显示已保存的答案
    for(let t in tempArray) {
      let item = tempArray[t];
      let value = wx.getStorageSync(item.index+"-answer") + "";
      if (value != "") {
        item.answer = value;
      }

      //定位到哪一题
      // if(value === "") {
      //   this.data.index = parseInt(t);
      //   break
      // }

      if (wx.getStorageSync("testindex") !== "") {
        this.data.index = wx.getStorageSync("testindex");
      }
      

      if(t == tempArray.length-1 && value != "") {
        this.data.index = parseInt(t);
      }
      

      // if (item.type == "select") {
      //   for(var j = 0; j < item.options.length; j++) {
      //     if (item.options[j].textScore == value) {
      //       item.answer = j;
      //     }

      //     if (item.index == "Y1" && item.options[j].text == value) {
      //       item.answer = j;
      //     }
      //   }
      // } else {
      //   item.answer = value;
      // }
    }

    this.setData({
      index: this.data.index,
      array: tempArray,
      showItem: tempArray[this.data.index],
    })

     //计算进度条
     this.countProgress();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.setData({
    //   showAll: false,
    // })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      // avatar: app.globalData.userInfo.avatarUrl,
      // name: app.globalData.userInfo.nickName
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
    // wx.showNavigationBarLoading();
    // console.log("shang")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // wx.showNavigationBarLoading();
    // console.log("xia")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //计算各题得分
  countEachScore(index, item) {
    //专业大类选项: 文科 商科 理科 工科 艺术 医学
    if (item.index == "Y1") {
      let value = item.options[index].text;
      wx.setStorageSync(item.index, value);
    }

    if (item.index == "N1" || item.index == "N2" || item.index == "N3" || item.index == "K1" || item.index == "K2" || item.index == "K3" || item.index == "S1" || item.index == "Q4" || item.index == "Q5") {
      let value = item.options[index].textScore;
      wx.setStorageSync(item.index, parseFloat(value));
    }

  },

  //答案点击事件
  selectedItem(e) {
    let idx = e.target.dataset.num;
    let item = e.target.dataset.item;
    let testindex = e.target.dataset.testindex;
    item.answer = idx;
    wx.setStorageSync(item.index+"-answer", idx);
    wx.setStorageSync("testindex", testindex);

    this.data.array[this.data.index] = item

    this.setData({
      array: this.data.array,
    })

    //计算分数并存储
    this.countEachScore(idx, item)

    if (this.data.index < this.data.array.length - 1) {
      if(this.data.array[this.data.index].index == "K1" && wx.getStorageSync('K1') === 0) {
        wx.setStorageSync(this.data.array[this.data.index + 1].index, 0);
        this.data.index = this.data.index + 2;
      } else {
        this.data.index = this.data.index + 1;
      }
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
    let num = Number(e.currentTarget.dataset.id);
    let tempIndex = this.data.index;

    if ((num == 1 && tempIndex < this.data.array.length - 1) && (this.data.array[this.data.index].answer === "" || this.data.array[this.data.index].answer === 10000)) {
      wx.showToast({
        title: '请完成当前测试题！',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    if (num == 0 && tempIndex > 0) {
      tempIndex = tempIndex - 1;
    }

    if (num == 1 && tempIndex < this.data.array.length - 1) {
      //托福/雅思,GRE/GMAT显示判断 和科研
      if (this.data.array[tempIndex].index == "E1" && wx.getStorageSync('E1') != "") {
        this.data.array[tempIndex+1].answer = 0;
        wx.setStorageSync('E2', 0);
        wx.setStorageSync('E2-answer', 0);
        tempIndex = tempIndex + 2;
      } else if(this.data.array[tempIndex].index == "E3" && wx.getStorageSync('E3') != "") {
        this.data.array[tempIndex+1].answer = 0;
        wx.setStorageSync('E4', 0);
        wx.setStorageSync('E4-answer', 0);
        tempIndex = tempIndex + 2;
      }  else if(this.data.array[tempIndex].index == "K1" && wx.getStorageSync('K1') === 0) {
        this.data.array[tempIndex+1].answer = 99;
        wx.setStorageSync('K3', 0);
        wx.setStorageSync('K3-answer', 99);
        tempIndex = tempIndex + 2;
      } else {
        tempIndex = tempIndex + 1;
      }
      
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
    //申请专业难易系数 (N0)
    let N0 = (wx.getStorageSync('N1') + wx.getStorageSync('N2') + wx.getStorageSync('N3'))/3;
    wx.setStorageSync("N0", parseFloat(N0));

    //成绩 (C0)
    let C0 = wx.getStorageSync('C1');
    wx.setStorageSync("C0", parseFloat(C0));

    //英语成绩 (E0)
    if (wx.getStorageSync('Y1') == "理科" || wx.getStorageSync('Y1') == "工科" || wx.getStorageSync('Y1') == "医科") {
      let temp1 = 0;
      let temp2 = 0;
      if (wx.getStorageSync('E1')) {
        if (wx.getStorageSync('E1') + 0.5 >= 5) {
          temp1 = 5;
        } else {
          temp1 = wx.getStorageSync('E1') + 0.5;
        }
      } else {
        if (wx.getStorageSync('E2') + 0.5 >= 5) {
          temp1 = 5;
        } else {
          temp1 = wx.getStorageSync('E2') + 0.5;
        }
      }

      if (wx.getStorageSync('E3')) {
        temp2 = wx.getStorageSync('E3');
      } else {
        temp2 = wx.getStorageSync('E4');
      }

      let E0 = temp1 * 0.6 + temp2 * 0.4;
      wx.setStorageSync("E0", parseFloat(E0));
      
    } else {
      let temp1 = 0;
      let temp2 = 0;

      if (wx.getStorageSync('E1')) {
        temp1 = wx.getStorageSync('E1');
      } else {
        temp1 = wx.getStorageSync('E2');
      }

      if (wx.getStorageSync('E3')) {
        temp2 = wx.getStorageSync('E3');
      } else {
        temp2 = wx.getStorageSync('E4');
      }

      let E0 = temp1*0.5 + temp2*0.5
      wx.setStorageSync("E0", parseFloat(E0));
    }

    //科研 (K0)
    if (wx.getStorageSync('Y1') == "理科" || wx.getStorageSync('Y1') == "工科" || wx.getStorageSync('Y1') == "医科") {
      let K0 = wx.getStorageSync('K1')*0.6 + wx.getStorageSync('K2')*0.2 + wx.getStorageSync('K3')*0.2;
      wx.setStorageSync("K0", parseFloat(K0));
    } else {
      let K0 = wx.getStorageSync('K1')*0.4 + wx.getStorageSync('K2')*0.3 + wx.getStorageSync('K3')*0.3;
      wx.setStorageSync("K0", parseFloat(K0));
    }

    //实习/工作 （S0）
    if (wx.getStorageSync('Y1') == "理科" || wx.getStorageSync('Y1') == "工科" || wx.getStorageSync('Y1') == "医科") {
      let S0 = wx.getStorageSync('S1') + 1; 
      if (S0 > 5) {
        S0 = 5;
      }
      wx.setStorageSync("S0", parseFloat(S0));
    } else {
      let S0 = wx.getStorageSync('S1');
      wx.setStorageSync("S0", parseFloat(S0));
    }

    //其他竞争力 (Q0)
    if (wx.getStorageSync('Y1') == "理科" || wx.getStorageSync('Y1') == "工科" || wx.getStorageSync('Y1') == "医科") {
      let Q0 = wx.getStorageSync('Q5')*0.35 + wx.getStorageSync('Q1')*0.25 + wx.getStorageSync('Q2')*0.2 + wx.getStorageSync('Q4')*0.2;
      wx.setStorageSync("Q0", parseFloat(Q0));
    } else {
      let Q0 = wx.getStorageSync('Q5')*0.4 + wx.getStorageSync('Q1')*0.25 + wx.getStorageSync('Q2')*0.1 + wx.getStorageSync('Q3')*0.15 + wx.getStorageSync('Q4')*0.1;
      wx.setStorageSync("Q0", parseFloat(Q0));
    }

    //综合实力分数todo
    //理工医学（硕士）
    if ((wx.getStorageSync('Y1') == "理科" || wx.getStorageSync('Y1') == "工科" || wx.getStorageSync('Y1') == "医科") && wx.getStorageSync('N1') == 4) {
      // let Z0 = (wx.getStorageSync('C0')*0.3 + wx.getStorageSync('E0')*0.2 + wx.getStorageSync('K0')*0.25 + wx.getStorageSync('S0')*0.1 + wx.getStorageSync('Q0')*0.15)* wx.getStorageSync('N2')/5 * wx.getStorageSync('N3')/5 * wx.getStorageSync('Q5')/5;

      let Z0 = wx.getStorageSync('C0')*0.3 * (wx.getStorageSync('Q5') + 5)/10 + wx.getStorageSync('E0')*0.2 + wx.getStorageSync('K0')*0.25 + wx.getStorageSync('S0')*0.1 + wx.getStorageSync('Q0')*0.15 -1 + (wx.getStorageSync('N2')*0.5 + wx.getStorageSync('N3')*0.5 + 5)/10;
      wx.setStorageSync("Z0", parseFloat(Z0));
    }

    //文商艺术 (硕士) 
    if ((wx.getStorageSync('Y1') == "文科" || wx.getStorageSync('Y1') == "商科" || wx.getStorageSync('Y1') == "艺术") && wx.getStorageSync('N1') == 4) {
      // let Z0 = (wx.getStorageSync('C0')*0.3 + wx.getStorageSync('E0')*0.3 + wx.getStorageSync('K0')*0.05 + wx.getStorageSync('S0')*0.2 + wx.getStorageSync('Q0')*0.15)* wx.getStorageSync('N2')/5 * wx.getStorageSync('N3')/5 * wx.getStorageSync('Q5')/5;

      let Z0 = wx.getStorageSync('C0')*0.3 * (wx.getStorageSync('Q5') + 5)/10 + wx.getStorageSync('E0')*0.3 + wx.getStorageSync('K0')*0.05 + wx.getStorageSync('S0')*0.2 + wx.getStorageSync('Q0')*0.15 -1 + (wx.getStorageSync('N2')*0.5 + wx.getStorageSync('N3')*0.5 + 5)/10;
      wx.setStorageSync("Z0", parseFloat(Z0));
    }

    //理工医学（博士）
    if ((wx.getStorageSync('Y1') == "理科" || wx.getStorageSync('Y1') == "工科" || wx.getStorageSync('Y1') == "医科") && wx.getStorageSync('N1') == 1) {
      // let Z0 = (wx.getStorageSync('C0')*0.3 + wx.getStorageSync('E0')*0.2 + wx.getStorageSync('K0')*0.35 + wx.getStorageSync('Q0')*0.15)* wx.getStorageSync('N2')/5 * wx.getStorageSync('N3')/5 * wx.getStorageSync('Q5')/5;

      let Z0 = wx.getStorageSync('C0')*0.3 * (wx.getStorageSync('Q5') + 5)/10 + wx.getStorageSync('E0')*0.2 + wx.getStorageSync('K0')*0.35 + wx.getStorageSync('Q0')*0.15 -1.1 + (wx.getStorageSync('N2')*0.7 + wx.getStorageSync('N3')*0.3)/5;
      wx.setStorageSync("Z0", parseFloat(Z0));
    }

    //文商艺术 (博士) 
    if ((wx.getStorageSync('Y1') == "文科" || wx.getStorageSync('Y1') == "商科" || wx.getStorageSync('Y1') == "艺术") && wx.getStorageSync('N1') == 1) {
      // let Z0 = (wx.getStorageSync('C0')*0.3 + wx.getStorageSync('E0')*0.25 + wx.getStorageSync('K0')*0.3 + wx.getStorageSync('Q0')*0.15)* wx.getStorageSync('N2')/5 * wx.getStorageSync('N3')/5 * wx.getStorageSync('Q5')/5;

      let Z0 = wx.getStorageSync('C0')*0.3 * (wx.getStorageSync('Q5') + 5)/10 + wx.getStorageSync('E0')*0.25 + wx.getStorageSync('K0')*0.3 + wx.getStorageSync('Q0')*0.15 -1.3 + (wx.getStorageSync('N2')*0.7 + wx.getStorageSync('N3')*0.3)/5;
      wx.setStorageSync("Z0", parseFloat(Z0));
    }

    wx.navigateTo({
      url: '/pages/testResult/testResult'
    })
  },

  //输入填空题答案
  inputWacth(e) {
    let value = e.detail.value;
    let item = e.target.dataset.item;
    let testindex = e.target.dataset.testindex;

    item.answer = value;
    wx.setStorageSync(item.index+"-answer", value);
    wx.setStorageSync("testindex", testindex);

    this.data.array[this.data.index] = item

    this.setData({
      array: this.data.array,
    })

    wx.setStorageSync(item.index, value);

    if (item.type == "input") {
      wx.setStorageSync(item.index, value);
      return
    }
    
    if (!parseFloat(value) || value == "") {
      wx.setStorageSync(item.index, 0);
      return
    }

    if (item.index == "C1") {
      let tempValue = parseFloat(value);
      let tempStorage = 0;
      if (tempValue > 3.9) {
        tempStorage = 5;
      }

      if (tempValue >= 3.6 && tempValue < 3.9) {
        tempStorage = 4;
      }

      if (tempValue >= 3.3 && tempValue < 3.6) {
        tempStorage = 3;
      }

      if (tempValue >= 3.0 && tempValue < 3.3) {
        tempStorage = 2;
      }

      if (tempValue >= 2.7 && tempValue < 3.0) {
        tempStorage = 1;
      }

      if (tempValue < 2.7) {
        tempStorage = 0;
      }

      wx.setStorageSync(item.index, tempStorage);
    }

    if (item.index == "E1") {
      let tempValue = parseFloat(value);
      let tempStorage = 0;
      if (tempValue >= 106) {
        tempStorage = 5;
      }

      if (tempValue >= 100 && tempValue < 106) {
        tempStorage = 4;
      }

      if (tempValue >= 90 && tempValue < 100) {
        tempStorage = 3;
      }

      if (tempValue >= 79 && tempValue < 90) {
        tempStorage = 2;
      }

      if (tempValue < 79) {
        tempStorage = 1;
      }

      wx.setStorageSync(item.index, tempStorage);
    }

    if (item.index == "E2") {
      let tempValue = parseFloat(value);
      let tempStorage = 0;
      if (tempValue > 7.5) {
        tempStorage = 5;
      }

      if (tempValue >= 7.0 && tempValue < 7.5) {
        tempStorage = 4;
      }

      if (tempValue >= 6.5 && tempValue < 7.0) {
        tempStorage = 3;
      }

      if (tempValue >= 6.0 && tempValue < 6.5) {
        tempStorage = 2;
      }

      if (tempValue < 6) {
        tempStorage = 1;
      }

      wx.setStorageSync(item.index, tempStorage);
    }

    if (item.index == "E3") {
      let tempValue = parseFloat(value);
      let tempStorage = 0;
      if (tempValue > 329) {
        tempStorage = 5;
      }

      if (tempValue >= 324 && tempValue < 329) {
        tempStorage = 4;
      }

      if (tempValue >= 319 && tempValue < 324) {
        tempStorage = 3;
      }

      if (tempValue >= 310 && tempValue < 319) {
        tempStorage = 2;
      }

      if (tempValue < 310) {
        tempStorage = 1;
      }

      wx.setStorageSync(item.index, tempStorage);
    }

    if (item.index == "E4") {
      let tempValue = parseFloat(value);
      let tempStorage = 0;
      if (tempValue > 720) {
        tempStorage = 5;
      }

      if (tempValue >= 690 && tempValue < 720) {
        tempStorage = 4;
      }

      if (tempValue >= 650 && tempValue < 690) {
        tempStorage = 3;
      }

      if (tempValue >= 590 && tempValue < 650) {
        tempStorage = 2;
      }

      if (tempValue < 590) {
        tempStorage = 1;
      }

      wx.setStorageSync(item.index, tempStorage);
    }

    if (item.index == "Q1" || item.index == "Q2" || item.index == "Q3") {
      let tempValue = parseFloat(value);
      let tempStorage = 0;
      if (tempValue > 3) {
        tempStorage = 5;
      }

      if (tempValue >= 2 && tempValue < 3) {
        tempStorage = 4;
      }

      if (tempValue >= 1 && tempValue < 2) {
        tempStorage = 3;
      }

      if (tempValue >= 0 && tempValue < 1) {
        tempStorage = 2;
      }

      wx.setStorageSync(item.index, tempStorage);
    }
  },

  //选择暂无成绩
  selectedNo(e) {
    let item = e.target.dataset.item;
    let testindex = e.target.dataset.testindex;

    this.data.array[this.data.index].answer = 0;
    wx.setStorageSync(item.index, 0);
    wx.setStorageSync(item.index+"-answer", 0);
    wx.setStorageSync("testindex", testindex);

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
  }
})