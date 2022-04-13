const request = require("request");
// const fs = require("fs");
const {
    recommendTable
} = require("./recommendTable");
request({
    method: "GET",
    url: "https://u.y.qq.com/cgi-bin/musicu.fcg",
    qs: { //查询数据
        cgiKey: "GetHomePage",
        _: "1632278695031",
        data: `{"comm":{"g_tk":583387737,"uin":"3003436226","format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"MusicHallHomePage":{"module":"music.musicHall.MusicHallPlatform","method":"MobileWebHome","param":{"ShelfId":[101,102,161]}},"hotkey":{"module":"tencent_musicsoso_hotkey.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"remoteplace":"txt.miniapp.wxada7aab80ba27074","searchid":"1559616839293"}}}`
    }
}, async (err, res, body) => {
    await recommendTable.deleteMany({});
    let data = JSON.parse(body).MusicHallHomePage.data.v_shelf; //获取所有的推荐分区信息
    // eslint-disable-next-line no-unused-vars
    data.forEach((item) => {
        let category = item.title_template; //获取分区的名称
        let categorylist = item.v_niche[0].v_card; //获取该分区里面的详细歌单列表
        let arr = [];
        categorylist.forEach((list) => {
            if (list.time) {
                return;
            } else {
                arr.push({
                    id: list.id,
                    cover: list.cover, //首页
                    title: list.title
                })
            }
        });
        if (arr.length !== 0) {
            recommendTable.create({
                category: category,
                categoryList: arr //保存基本数组
            }).then(() => {
                console.log("写入数据成功");
            }).catch((err) => {
                console.log(err);
            })
        }

    });
})