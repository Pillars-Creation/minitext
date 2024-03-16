exports.initRewardedVideoAd = function (adUnitId, closeCallback) {
    // 创建实例
    const rewardAd = tt.createRewardedVideoAd({
        adUnitId: adUnitId || "bqlr47knrrfb90m4ou",
    });
    // 监听错误
    rewardAd.onError((err) => {
        tt.hideLoading();
        this.data.hasOwnProperty('hiddenMask') && this.setData({
            hiddenMask: true
        })
       // console.log('激励 onError==', onError)
        switch (err.errCode) {
            case 1004:
                // 无合适的广告
                break;
            default:
                // 更多请参考错误码文档
        }
    });
     // 监听视频播放完成
     rewardAd.onClose((data) => {
        //console.log('激励 onClose--')
        tt.hideLoading();
        this.data.hasOwnProperty('hiddenMask') && this.setData({
            hiddenMask: true
        })

        if (data && data.isEnded) {
            console.log("激励观看了", data.count, "个视频");
            closeCallback && closeCallback()

        } else {
            //TODO: 强制看
            tt.showModal({
              title: "提醒",
              content: "未看完视频，不能使用该功能！",
              showCancel: false,
            })
            console.log("未观看完视频");
        }
        // 关闭视频回调

    });

    rewardAd.onLoad(() => {
        tt.hideLoading();
        //console.log("激励 广告加载完成");
    });
    // 卸载 close 事件监听
    rewardAd.offClose(() => {
        console.log('激励卸载 offClose')
    });
    rewardAd.load().then(() => {
        //console.log('激励 load---')
        //this.showAd()

    });
    return rewardAd


}

exports.showRewardedVideoAd = function (rewardedVideoAd) {

    this.data.hasOwnProperty('hiddenMask') && this.setData({
        hiddenMask: false
    })
    tt.showLoading({
        title: '加载中'
    });
    rewardedVideoAd.load().then(() => {
        console.log('激励load22---')
        rewardedVideoAd.show();
    });
   
}