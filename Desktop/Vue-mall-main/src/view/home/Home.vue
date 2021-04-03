<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">購物街</div></nav-bar>
    <tab-control class="tabControl" 
                  :titles="['流行','新款','精選']"
                  @tabClick='tabClick'
                  ref="tabbar1"
                  v-show="isTabFixed"
                  />
      <!-- 直接包兩層tab-control，當條件達到時展現，許多動畫都用一樣的道理! -->
    <scroll class="content" 
            ref="scroll" 
            :probe-type='3' 
            @scroll="contentScroll"
            :pull-up-load = 'true'
            > 
      <!-- 用 ref="scroll" 來取得scroll這個組件的東西 -->
      <home-swiper :banners="banners"
                     ref="hSwiper"
                     @swiperImgLoad='swiperImgLoad'>
      </home-swiper>
      <recommend-view :recommends='recommends' />
      <feature-view/>
      <tab-control :titles="['流行','新款','精選']"
                  @tabClick='tabClick'
                  ref="tabbar2"
                  />
      <good-list :goods="goods[this.currentType].list" />
       <ul>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
      <li>This is a li</li>
       </ul>
       
    </scroll>
    <back-top @click.native='goTop' v-show="isShowBack"/>
   
  </div>
</template>

<script>
//分類import的組件

//
import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from "./childComponents/RecommendView"
import FeatureView from "./childComponents/FeatureView"

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList"
import BackTop from "components/common/backTop/BackTop"
import Scroll from "components/common/scroll/Scroll"

//方法
import {
  getHomeMultidata,
  getHomeGoods
  } from "network/home"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  data(){
   return{
      banners:[],
      recommends:[],
      goods:{
        'pop' : {page:0, list:[]}, //page 當前頁數 、 list 當前全部內容
        'new' : {page:0, list:[]},
        'sell' : {page:0, list:[]}
      },
      currentType : 'pop',
      isShowBack: true,
      tabOffsetTop : 0,
      isTabFixed: false
    }
  },
  created(){ //只寫請求 邏輯另外寫
    //1.請求多個數據
   this.getHomeMultidata()

  //2.請求商品數據
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    //在create 的時候取用methods方法

  },
  mounted(){ //原先放到create，但是剛創建的vue裡面調用方法會釣不到，裡面還尚未將el掛載上去
 //3.監聽item中圖片加載完成
 const refresh = this.debounce(this.$refs.scroll.refresh,200)
  this.$bus.$on('itemImageLoad', () => {
    //默認bus是空的
    // console.log('.....');
    refresh() 
    //this.debounce(xxx) = debounce裡的return function ->
    // const refresh = function(...args){}，所以可以直接調用refresh()
  })
  },
  // computed:{
  //   showGoods(){
  //     return this.goods[this.currentType].list
  //     // console.log(this.goods)
  //   }
  // },
  methods:{
    debounce(func, delay){
      let timer = null
      return function(...args){
        if (timer) clearTimeout(()=>{
          func.apply(args)
        }, delay)
      }
    },
    getHomeMultidata(){
     getHomeMultidata().then(res =>{
      // console.log(res);
      // this.result = res
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){
      //根據請求調用data
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
      // console.log(res)
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1

      //完成上拉加載更多
      this.$refs.scroll.finishPullUp() //當pullup finish去跑finsihpullup這個function
    })
    },
    tabClick(index){
      console.log(index)
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabbar1.currentIndex = index
      this.$refs.tabbar2.currentIndex = index
      //保持兩個tabbar的index和現在currentIndex一樣
    },
   goTop(){
    //  console.log("To top")
    this.$refs.scroll.scrollTo(0,0,500) //取得Scroll.vue裡的方法
   },
   contentScroll(position){
    //  console.log(position);
    //1.判斷backTop是否顯示
     this.isShowBack =  (-position.y) > 1000
   
   //2. 判斷tabbar是否固定
  this.isTabFixed = (-position.y) > this.tabOffsetTop
   },
   swiperImgLoad(){
    // console.log('...');
    this.tabOffsetTop = this.$refs.tabbar2.$el.offsetTop
    // console.log(this.tabOffsetTop)

   }
  }
};
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
  /* background-color: red; */
  /* opacity: 0.5; */
}
#home img{
  width: 100%;
}
#home ul li{
  width: 100%;
  height: 100px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tabControl{
  position: sticky;
  top:44px;
  z-index: 9;
  background-color: #fff;
}
.content{
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 60px;
  left: 0;
  right: 0;
  /* background-color: red; */
}
/* .content{
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */

</style>

