<template>
    <transition>
        <musiclist :title="title" :bgImage="bgImage" :songList="songList"></musiclist>
    </transition>
</template>

<script type = "text/ecmascript-6"> //歌曲详情页
    import musiclist from "../music-list/music-list.vue";
    import {mapGetters} from "vuex";
    import axios from "axios";

    export default{
        computed:{ //计算属性
            ...mapGetters([
                "singer"
            ]),
            title(){ //歌手名称
                return this.singer.singer_name;
            },
            bgImage(){ //歌手图片
                return this.singer.singer_pic;
            },
            mid(){//歌手mid
                return this.singer.singer_mid;
            }
        },
        data(){
            return{
                songList:[] //具体的歌曲信息
            }
        },
        created(){
            this._getDetail(this.mid)
        },
        methods:{
            _getDetail(mid){
                let data={
                    mid:mid
                };
                axios.post("http://localhost:8082/api/getSingerDetailData",JSON.stringify(data)).then(data=>{
                    console.log(data.data);
                    this.songList=data.data[0].songList;
                })
            }
        },
        components:{
            musiclist
        }
    }


</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s
    .slide-enter, .slide-leave-to
        transition: translate3d(100%, 0, 0)
</style>