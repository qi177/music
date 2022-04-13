<template>
    <transition name="slide">
        <music-list :title="title" :bg-image="bgImage" :songList="songlist"></music-list>
    </transition>
</template>

<script>
import MusicList from "../music-list/music-list.vue"
import {mapGetters} from "vuex"
    export default{
        name:"disc",
        computed:{
            title(){
                return this.disc.title
            },
            bgImage(){
                return this.disc.cover
            },
            ...mapGetters([
                "disc"
            ])
        },
        data(){
            return{
                songlist:[]
            }
        },
        created(){
            this.songlist=this.disc.songlist;
            console.log(this.songlist);
        },
        components:{
            MusicList
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .slider-enter-active, .slider-leave-active
        transition: all 0.3s
    .slider-enter, .slider-leave-to
        transform: translate3d(100%, 0, 0)

</style>