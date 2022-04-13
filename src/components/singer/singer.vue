<template>
  <div class="singer" ref="singer">
    <listview :data="singerlist" @select="selectSinger" ref="list"></listview>
    <router-view> <!--歌手详情页的显示位置--> </router-view>
  </div>
</template>

<script>
import axios from 'axios';
import listview from "../base/listview";
import {mapMutations} from "vuex"; //取得工具函数
import {playlistMixin} from "../../common/js/mixin"
    export default {
        mixins:[playlistMixin],
        data(){
            return{
                singerlist:[]
            }
        },
        created(){
            axios.get("http://localhost:8082/api/singer/getSingerData").then(data=>{
                console.log(data);
                this.singerlist=data.data;
                
            })
        },
        methods:{
            handlePlaylist(playlist){
                //监听是否得到了playlist的值
                this.$refs.singer.style.bottom=playlist.length > 0 ? "70px" : "";
            },
            selectSinger(singerItem){//由子组件的点击事件触发的父组件事件
                this.$router.push({
                    path:`/singer/${singerItem.singer_mid}` //变更路由，触发子组件 
                });
                console.log(singerItem)
                this.setSinger(singerItem); //存储数据，存储基本的歌手的信息
        },
        ...mapMutations({//获取vuex的mutation方法，从而得到设置singer数据的方法
            setSinger:"SET_SINGER"
        }),
    },
    components:{
            listview
        }
    }
</script>

<style scoped lang="stylus">
.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>