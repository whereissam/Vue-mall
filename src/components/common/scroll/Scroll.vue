<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)

export default {
    name: "Scroll",
    props:{
        probeType:{
            type: Number,
            default: 0
        },
        pullUpLoad:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            scroll: null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click: true, //click裡面才能點擊
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })

        //2.監聽滾動的位置
        this.scroll.on('scroll', (position) => {
            // console.log(position);
            this.$emit('scroll', position)
        })

        //3.監聽上拉事件
        this.scroll.on('pullingUp', ()=>{
            this.$emit('pullingUp')
            // console.log("load more");
        })
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
        }
    }
}
</script>

<style>

</style>