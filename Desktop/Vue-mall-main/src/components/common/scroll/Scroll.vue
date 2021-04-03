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
        //scroll裡面有個叫scrollheight，他是根據當前組件高度和異步請求總高度去算的，
        //所以當異步請求較慢還未完全load完時scrollheight就會少很多

        //2.監聽滾動的位置
        if(this.probeType === 2 || this.probeType === 3){
            this.scroll.on('scroll', (position) => {
            // console.log(position);
            this.$emit('scroll', position)
            })
        }
        //3.監聽上拉事件
        this.scroll.on('pullingUp', ()=>{
            this.$emit('pullingUp')
            // console.log("load more");
        })
        //4.監聽scroll滾動到底部
        // if(this.pullUpLoad){
        //     this.scroll.on('pullingUp',()=>{
        //         console.log('監聽到滾動到底部')
        //         })
        //     }
        },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time) 
            //&& 判斷式，先確保this.scroll裡面有東西，再調用函式
        },

        finishPullUp(){
            this.scroll.finishPullUp()
        },

        refresh(){
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style>

</style>