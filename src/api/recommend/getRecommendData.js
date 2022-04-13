//接口的获取
const {recommendTable} = require("./recommendTable");
// let app = express();
// app.get("/api/getRecommendData",function (req,res) {
//     recommendTable.find({},{ //查询当前所拥有的数据
//         __v:false,
//         _id:false
//     }).then((data)=>{
//         res.send(JSON.stringify(data))
//     }).catch((err)=>{
//         if(err) throw err;
//     })

// })
// app.listen(1234);//监听接口

module.exports={
    getRecommendData:function (req,res) {
        recommendTable.find({},{ //查询当前所拥有的数据
            __v:false,
            _id:false
        }).then((data)=>{
            res.send(JSON.stringify(data))
        }).catch((err)=>{
            if(err) throw err;
        })
    }
}