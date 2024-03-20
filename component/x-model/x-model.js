// component/testModel/testModel.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: [],
    },

    ids: {
      type: Number,
      value: 0,
    },
    listType: {
      type: String,
      value: "",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    index: 1,
    realIndex: 0,
    count: 1,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    // questionDetail: app.globalData.question[0].question,
    // answerA: app.globalData.question[0].option.A,
    // answerB: app.globalData.question[0].option.B,
    // answerC: app.globalData.question[0].option.C,
    // answerD: app.globalData.question[0].option.D,
    list: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
    ],
  },

  methods: {
        
    onLoad: function (options) {
  
      // const {
      //   initInsertAd,
      //   initRewardedVideoAd
      // } = app.globalData;
      // // 初始化插屏
      // this.interstitialAd = initInsertAd.bind(this)('9041zipeh9eai60s8j');
      // // 初始化
      // this.rewardedVideoAd = initRewardedVideoAd.bind(this)('y0pg2zt7qllnfett1f', this.rewardedAd);
      // this.updateDate(this.data.currentDate);
  
    },

    navigateToPage: function (event) {
      let index = event.currentTarget.dataset.index;
      // 添加一个统计变量，2次以外展示结果
      console.log('count before setData:', app.globalData.count);
      if (app.globalData.count > 0) {
        console.log('观看一次广告:', app.globalData.count);
        this.beforeRedirectAdHandle();

      } else {
        console.log('count 第一次展现 setData:', app.globalData.count);
        app.globalData.count = app.globalData.count + 1;
        console.log('app.globalData.count after setData:', app.globalData.count);
        let id = app.globalData.count <= 2 ? Math.floor(Math.random() * 5) + 1 : 2;
        let listType = app.globalData.listType;
        const _this = this;
        let url = "/pages/text-list/text-list?id=" + id + "&type=" + listType;
        console.log('url2--', url);
        tt.navigateTo({
          url: url,
        });
      }
    },


    rewardedAd(){
      console.log('count 第二次展现 setData:', app.globalData.count);
      app.globalData.count = 0;
      let listType = this.properties.listType;
      let ids = this.properties.ids;
      let list = this.properties.list;
      let url = "/pages/result/result" + "?options=" + 1 + "&listType=" + listType + "&type=" + ids + "&img=" + "../../assets/images/background.jpg";
      console.log('Navigate to URL:', url);
      tt.navigateTo({
        url: url
      });
    },

      // come ad confirm
  beforeRedirectAdHandle() {
    const _this = this;
    const {
      initInsertAd,
      initRewardedVideoAd
    } = app.globalData;
    
    // 初始化
    if (!this.rewardedVideoAd) {
      this.rewardedVideoAd = initRewardedVideoAd.bind(this)('ebww396g76p8occ8g5', this.rewardedAd);
    }
    
    tt.showModal({
      title: "即将进入广告",
      content: "【看广告】后方可获取激励结果",
      showCancel: false,
      success(res) {
        // 如果用户点击了确定
        if (res.confirm) {
          // 展示激励视频
          console.log('start ad', 'start ad');
          app.globalData.showRewardedVideoAd.bind(_this)(_this.rewardedVideoAd);
          console.log('end ad', 'end ad');
          
          setTimeout(() => {
            tt.hideLoading();
          }, 1);
          // 设置已经展示过激励视频的标志位
          app.globalData.hasShownRewardedVideoAd = true;
        }
      },
      fail(err) {
        console.log('showModal fail', err);
        tt.navigateTo({
          url: url,
        });
      }
    });
    
  },



  },

  /**
   * 组件的方法列表
   */
  // methods: {
  //   onload: function(option) {
  //     // console.log(option.id);
  //   },
  // randSort: function() {
  //   return Math.random() > 0.5 ? 1 : -1;
  // },

  // setList: function() {
  //   var newList = this.data.list.sort(this.randSort);
  //   this.setData({
  //     list: newList
  //   });
  // },

  // setABC: function() {
  //   var abc = this.data.listABC.sort(this.randSort);
  //   this.setData({
  //     listABC: abc
  //   });
  //   // },

  //   goBefore: function() {
  //     if (this.data.index > 1) {
  //       this.setData({
  //         index: this.data.index - 1,
  //         realIndex: this.data.list[this.data.index]
  //       });
  //       this.setData({
  //         questionDetail: app.globalData.question[this.data.realIndex].question,

  //         answerA:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[0]
  //           ],
  //         answerB:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[1]
  //           ],
  //         answerC:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[2]
  //           ],
  //         answerD:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[3]
  //           ]
  //       });
  //     }
  //   },
  //   setOption: function() {},

  //   answerClickA: function() {
  //     if (this.data.listABC[0] == "A") {
  //       this.setData({
  //         A: this.data.A + 1
  //       });
  //     } else if (this.data.listABC[0] == "B") {
  //       this.setData({
  //         B: this.data.B + 1
  //       });
  //     }
  //     if (this.data.listABC[0] == "C") {
  //       this.setData({
  //         C: this.data.C + 1
  //       });
  //     }
  //     if (this.data.listABC[0] == "D") {
  //       this.setData({
  //         D: this.data.D + 1
  //       });
  //     }
  //     if (this.data.answer[this.data.index] == "A") {
  //       this.setData({
  //         correct: this.data.correct + 1
  //       });
  //     } else {
  //       this.setData({
  //         error: this.data.error + 1
  //       });
  //     }
  //     if (this.data.index == 20) {
  //       wx.redirectTo({
  //         url:
  //           "/pages/result/result?A=" +
  //           this.data.A +
  //           "&B=" +
  //           this.data.B +
  //           "&C=" +
  //           this.data.C +
  //           "&D=" +
  //           this.data.D +
  //           "&correct=" +
  //           this.data.correct +
  //           "&error=" +
  //           this.data.error
  //       });
  //     }

  //     if (this.data.index < 20) {
  //       this.setData({
  //         index: this.data.index + 1,
  //         realIndex: this.data.list[this.data.index]
  //       });

  //       this.setData({
  //         questionDetail: app.globalData.question[this.data.realIndex].question,

  //         answerA:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[0]
  //           ],
  //         answerB:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[1]
  //           ],
  //         answerC:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[2]
  //           ],
  //         answerD:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[3]
  //           ]
  //       });
  //     }
  //   },

  //   answerClickB: function() {
  //     if (this.data.listABC[1] == "A") {
  //       this.setData({
  //         A: this.data.A + 1
  //       });
  //     } else if (this.data.listABC[1] == "B") {
  //       this.setData({
  //         B: this.data.B + 1
  //       });
  //     }
  //     if (this.data.listABC[1] == "C") {
  //       this.setData({
  //         C: this.data.C + 1
  //       });
  //     }
  //     if (this.data.listABC[1] == "D") {
  //       this.setData({
  //         D: this.data.D + 1
  //       });
  //     }
  //     if (this.data.answer[this.data.index] == "B") {
  //       this.setData({
  //         correct: this.data.correct + 1
  //       });
  //     } else {
  //       this.setData({
  //         error: this.data.error + 1
  //       });
  //     }
  //     if (this.data.index == 20) {
  //       wx.redirectTo({
  //         url:
  //           "/pages/result/result?A=" +
  //           this.data.A +
  //           "&B=" +
  //           this.data.B +
  //           "&C=" +
  //           this.data.C +
  //           "&D=" +
  //           this.data.D +
  //           "&correct=" +
  //           this.data.correct +
  //           "&error=" +
  //           this.data.error
  //       });
  //     }

  //     if (this.data.index < 20) {
  //       this.setData({
  //         index: this.data.index + 1,
  //         realIndex: this.data.list[this.data.index]
  //       });

  //       this.setData({
  //         questionDetail: app.globalData.question[this.data.realIndex].question,

  //         answerA:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[0]
  //           ],
  //         answerB:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[1]
  //           ],
  //         answerC:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[2]
  //           ],
  //         answerD:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[3]
  //           ]
  //       });
  //     }
  //   },

  //   answerClickC: function() {
  //     if (this.data.listABC[2] == "A") {
  //       this.setData({
  //         A: this.data.A + 1
  //       });
  //     } else if (this.data.listABC[2] == "B") {
  //       this.setData({
  //         B: this.data.B + 1
  //       });
  //     }
  //     if (this.data.listABC[2] == "C") {
  //       this.setData({
  //         C: this.data.C + 1
  //       });
  //     }
  //     if (this.data.listABC[2] == "D") {
  //       this.setData({
  //         D: this.data.D + 1
  //       });
  //     }
  //     if (this.data.answer[this.data.index] == "C") {
  //       this.setData({
  //         correct: this.data.correct + 1
  //       });
  //     } else {
  //       this.setData({
  //         error: this.data.error + 1
  //       });
  //     }
  //     if (this.data.index == 20) {
  //       wx.redirectTo({
  //         url:
  //           "/pages/result/result?A=" +
  //           this.data.A +
  //           "&B=" +
  //           this.data.B +
  //           "&C=" +
  //           this.data.C +
  //           "&D=" +
  //           this.data.D +
  //           "&correct=" +
  //           this.data.correct +
  //           "&error=" +
  //           this.data.error
  //       });
  //     }

  //     if (this.data.index < 20) {
  //       this.setData({
  //         index: this.data.index + 1,
  //         realIndex: this.data.list[this.data.index]
  //       });

  //       this.setData({
  //         questionDetail: app.globalData.question[this.data.realIndex].question,

  //         answerA:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[0]
  //           ],
  //         answerB:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[1]
  //           ],
  //         answerC:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[2]
  //           ],
  //         answerD:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[3]
  //           ]
  //       });
  //     }
  //   },
  //   answerClickD: function() {
  //     if (this.data.listABC[3] == "A") {
  //       this.setData({
  //         A: this.data.A + 1
  //       });
  //     } else if (this.data.listABC[3] == "B") {
  //       this.setData({
  //         B: this.data.B + 1
  //       });
  //     }
  //     if (this.data.listABC[3] == "C") {
  //       this.setData({
  //         C: this.data.C + 1
  //       });
  //     }
  //     if (this.data.listABC[3] == "D") {
  //       this.setData({
  //         D: this.data.D + 1
  //       });
  //     }
  //     if (this.data.answer[this.data.index] == "D") {
  //       this.setData({
  //         correct: this.data.correct + 1
  //       });
  //     } else {
  //       this.setData({
  //         error: this.data.error + 1
  //       });
  //     }
  //     if (this.data.index == 20) {
  //       wx.redirectTo({
  //         url:
  //           "/pages/result/result?A=" +
  //           this.data.A +
  //           "&B=" +
  //           this.data.B +
  //           "&C=" +
  //           this.data.C +
  //           "&D=" +
  //           this.data.D +
  //           "&correct=" +
  //           this.data.correct +
  //           "&error=" +
  //           this.data.error
  //       });
  //     }

  //     if (this.data.index < 20) {
  //       this.setData({
  //         index: this.data.index + 1,
  //         realIndex: this.data.list[this.data.index]
  //       });

  //       this.setData({
  //         questionDetail: app.globalData.question[this.data.realIndex].question,

  //         answerA:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[0]
  //           ],
  //         answerB:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[1]
  //           ],
  //         answerC:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[2]
  //           ],
  //         answerD:
  //           app.globalData.question[this.data.realIndex].option[
  //             this.data.listABC[3]
  //           ]
  //       });
  //     }
  //   }
  // }
});