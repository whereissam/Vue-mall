<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">購物街</div></nav-bar>
    <img src="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg" alt="">
    <!-- <Home-swiper :banners='banners'/> -->
    <recommend-view :recommends='recommends' />
    <feature-view/>
    <tab-control class="tabControl" :titles="['流行','新款','精選']"/>
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
  </div>
</template>

<script>
//分類import的組件

//
// import HomeSwiper from "./childComponents/HomeSwiper"
import RecommendView from "./childComponents/RecommendView"
import FeatureView from "./childComponents/FeatureView"

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

//方法
import {
  getHomeMultidata,
  getHomeGoods
  } from "network/home"
// import TabControl from '../../components/content/tabControl/TabControl.vue';

export default {
  name: "Home",
  components: {
    // HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl
  },
  data(){
   return{
      banners:[],
      recommends:[],
      goods:{
        'pop' : {page:0, list:[]}, //page 當前頁數 、 list 當前全部內容
        'news' : {page:0, list:[]},
        'sell' : {page:0, list:[]}
      }
    }
  },
  created(){ //只寫請求 邏輯另外寫
    //1.請求多個數據
   this.getHomeMultidata()

  //2.請求商品數據
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    // console.log(this.banners)
  },
  methods:{
    getHomeMultidata(){
     getHomeMultidata().then(res =>{
      // console.log(res);
      // this.result = res
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){
      getHomeGoods(type, 1).then(res => {
      console.log(res)
    })
    }
  }
};
</script>

<style>
#home{
  padding-top: 44px;
}
#home img{
  width: 100%;
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
  top:44px
}
</style>

