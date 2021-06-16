<template>
  <nav-bar>
    <div slot="left" class="back" @click="back">
        <img src="@/assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
                :key="item" 
                class="titleItem"
                :class="{active: index === currentIndex}"
                @click="itemClick(index)"
                >
              {{item}}
          </div>
      </div>
</nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

export default {
    name:'detailNavBar',
    components:{
        NavBar
    },
     data(){
        return{
            titles: ['商品','參數','評論','推薦'],
            currentIndex: 0
        }
    },
    methods:{
        itemClick(index){
            // console.log(index)
            this.currentIndex = index
        },
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.title{
    display: flex;
    font-size: 13px
}
.titleItem{
    flex: 1
}
.active{
    color: var(--color-high-text);
}
.back{
    margin-top: 8px;
}
</style>