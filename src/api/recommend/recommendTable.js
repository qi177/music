
//创建一个表
//数据库数据
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// mongoose.connect("mongodb://127.0.0.1:27017/linxiao",{
//     useNawUrlParser:true,
//     useUnifiedTopology:true
// });

let url = process.env.DATABASE_URL || "mongodb://localhost:27017/lin";
mongoose.connect(url, {
    useNewUrlParser: true
})
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));


let recommendShema = new Schema({
    category:{
        type:String,
        required:true
    },
    categoryList:[
        {
            id:{
                type:String,
                required:true
            },
            cover:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            }
        }
    ]
});
//定义表格
let recommendDatas=mongoose.model("recommendDatas",recommendShema);

module.exports={
    recommendTable:recommendDatas
}