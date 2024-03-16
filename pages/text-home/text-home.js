const app = getApp()
// pages/character/character.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const {
    //   initInsertAd,
    //   initRewardedVideoAd
    // } = app.globalData;
    // // 初始化插屏
    // this.interstitialAd = initInsertAd.bind(this)('aiwznj5n4i8ji6578a');
    // // 初始化激励视频
    // this.rewardedVideoAd = initRewardedVideoAd.bind(this)('bqlr47knrrfb90m4ou', this.showQianHandle);
    // // 在这里添加日志输出
    // console.log("rewardedVideoAd in onLaunch:", this.rewardedVideoAd);



    // console.log(options);
    var type = options.type;
    this.setData({
      type: type,
    });
    if (type == "character") {
      wx.setNavigationBarTitle({
          title: "性格测试大全",
        }),
        this.setData({
          testItems: [{
              img: "/assets/chara/chara_bg1.png",
              title: "生存环境测试你的性格特点",
            },
            {
              img: "/assets/chara/chara_bg2.png",
              title: "沐浴方式测你的性格特点",
            },
            {
              img: "/assets/chara/chara_bg3.png",
              title: "写博客测试你的个性",
            },
            {
              img: "/assets/chara/chara_bg4.png",
              title: "从你的运动项目看你的个性",
            },
            {
              img: "/assets/chara/chara_bg5.png",
              title: "测你个性中哪方面最惹人厌",
            },
            {
              img: "/assets/chara/chara_bg6.png",
              title: "揭秘你的第二性格",
            },
          ],
        });
    } else {
      wx.setNavigationBarTitle({
          title: "心理测试大全",
        }),
        this.setData({
          testItems: [{
              img: "/assets/psy/psy_bg1.png",
              title: "测测你的另一半在哪里等你",
            },
            {
              img: "/assets/psy/psy_bg2.png",
              title: "测测什么样的异性适合你",
            },
            {
              img: "/assets/psy/psy_bg3.png",
              title: "谁是你现在最在意的人",
            },
            {
              img: "/assets/psy/psy_bg4.png",
              title: "你的闷骚指数是多少",
            },
            {
              img: "/assets/psy/psy_bg5.png",
              title: "测试你的爱情素质",
            },
            {
              img: "/assets/psy/psy_bg6.png",
              title: "爱情会让你失去什么",
            },
          ],
        });
    }
  },


  navigatorList: function (e) {
    let id = e.detail.id;
    const _this = this;
    if (true) {
      tt.showModal({
        title: "即将进入广告",
        content: "【看广告】后方可获取激励结果",
        showCancel: false,
        success(res) {
          const rewardedVideoAd = tt.createRewardedVideoAd({
            adUnitId: 'bqlr47knrrfb90m4ou', // 广告位ID，请替换为你自己的激励广告位ID
          });
  
          rewardedVideoAd.show().then(() => {
            // 激励视频广告显示成功
          }).catch((err) => {
            console.log('激励视频广告显示失败', err);
            setTimeout(() => {
              const count = _this.randomNumber();
              _this.setData({
                isShaking: false,
                hidden: false,
                listIndex: count,
                repeat: true,
              });
              console.log('count--', count);
            }, 2000);
          });
  
          rewardedVideoAd.onClose((res) => {
            if (res && res.isEnded) {
              // 用户观看完整广告
              tt.navigateTo({
                url: "/pages/text-list/text-list?id=" + id + "&type=" + _this.data.type,
              });
            } else {
              // 用户未观看完整广告
              console.log('User did not watch the complete ad');
              setTimeout(() => {
                const count = _this.randomNumber();
                _this.setData({
                  isShaking: false,
                  hidden: false,
                  listIndex: count,
                  repeat: true,
                });
                console.log('count--', count);
              }, 2000);
            }
          });
        },
      });
    }
  },
  




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});