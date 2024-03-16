var commonAd = require("./Ad/index");
var baguaInfo = require('./bagua');
var yijiInfo = require('./yiji');
module.exports.utils={
    ...commonAd.allAd,
    ...baguaInfo,
    ...yijiInfo
}