App({
  onLaunch: function () {
    // const {
    //   initInsertAd,
    //   initRewardedVideoAd
    // } = this.globalData;
    // // 初始化插屏
    // this.interstitialAd = initInsertAd.bind(this)('9041zipeh9eai60s8j');
    // // 初始化激励视频
    // this.rewardedVideoAd = initRewardedVideoAd.bind(this)('y0pg2zt7qllnfett1f', this.showQianHandle);
  },
  globalData: {
    titleItems: [
      { title: "生存环境测试你的性格特点" },
      { title: "沐浴方式测你的性格特点" },
      { title: "写博客测试你的个性" },
      { title: "从你的运动项目看你的个性" },
      { title: "测你个性中哪方面最惹人厌" },
      { title: "揭秘你的第二性格" },
      { title: "测测你的另一半在哪里等你" },
      { title: "测测什么样的异性适合你" },
      { title: "谁是你现在最在意的人" },
      { title: "你的闷骚指数是多少" },
      { title: "测试你的爱情素质" },
      { title: "爱情会让你失去什么" },
    ],

    // initInsertAd: function (adUnitId) {
    //   return wx.createInterstitialAd({
    //     adUnitId: adUnitId
    //   });
    // },
    // initRewardedVideoAd: function (adUnitId, handler) {
    //   const rewardedVideoAd = wx.createRewardedVideoAd({
    //     adUnitId: adUnitId
    //   });
    //   rewardedVideoAd.onClose(handler);
    //   return rewardedVideoAd;
    // }

  },
});
