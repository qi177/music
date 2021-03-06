const request = require("request");
module.exports={
    getLyric:function(req,res,err){
        let body=JSON.parse(Object.keys(req.body)[0]) //数据格式转化
        request({
            url:"https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg",
            qs:{
                "-":"MusicJsonCallback_lrc",
                "pcachetime": 1578064451036,
                songmid: body.songMid,
                g_tk:5318,
                loginUin:3003436226,
                hostUin:0,
                format:"json",
                inCharset:"utf-8",
                outCharset:"utf-8",
                notice:0,
                platform:"yqq.json",
                needNewCode:0
            },
            headers:{
                referer:"https://y.qq.com/portal/player.html"
            }
        },function(err,response,body){ //返回数据解码是base64格式，将数据进行解码返回一个toString
            res.send(new Buffer(JSON.parse(body).lyric, 'base64').toString()) //转码格式
        })
    }
}