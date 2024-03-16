exports.initInsertAd = function (adUnitId)  {
   let interstitialAd = tt.createInterstitialAd({
        adUnitId: adUnitId||"gr79weqluh7tsla232",
    })
console.log('getInitInsertAd--',interstitialAd)
    // 监听错误
   interstitialAd.onError((err) => {
        tt.hideLoading();
        console.log('插屏 onError--', err)
        switch (err.errCode) {
            case 1004:
                // 无合适的广告
                break;
            default:
                // 更多请参考错误码文档
        }
    });


    // 监听视频播放完成
   interstitialAd.onClose((data) => {
        tt.hideLoading();
        console.log('插屏 onClose:', data)
        if (data && data.isEnded) {
            console.log("观看了", data.count, "个视频");
        } else {
            console.log("未观看完视频");
        }
        const info = tt.getSystemInfoSync();
        if (info.appName.toUpperCase() === "DOUYIN") {
            // do something
            console.log('抖音')
        }
         // 2s 后销毁插屏广告
       setTimeout(() => {
        console.log('destroy---',)
        interstitialAd && interstitialAd.destroy();
        interstitialAd = null;
     }, 2000);

    })
    interstitialAd.onLoad(() => {
        tt.hideLoading();
        console.log("插屏 广告加载完成");
    });

    // 预加载资源
    interstitialAd&&interstitialAd.load((data) => {
        console.log("插屏 预加载资源 load:", data);
    });

    return interstitialAd
}
exports.showInsertAd = function(interstitialAd,newAdUnitId){
    
    console.log('showAdHandle==', interstitialAd)
    tt.showLoading();
    if(interstitialAd){
      interstitialAd.show()
      return
    }
    interstitialAd = tt.createInterstitialAd({
      adUnitId: newAdUnitId||"gr79weqluh7tsla232",
    })
    // 创建插屏广告实例
    interstitialAd.load()
    // 显示插屏广告内容
    .then(() =>{
      tt.hideLoading();
      console.log('ad start--')
      interstitialAd.show()
      console.log('ad end--')

    }).then((ev)=>{
      console.log('show then',ev)
    }).catch((err)=>{
        tt.hideLoading();


    })

}