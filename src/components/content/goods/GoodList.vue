<template>
  <div class="goods">
       <button @click="detail">GO to deatil</button>
      <goods-list-item v-for='item in goods' :key="item"/>
      {{goods}}
  </div>
</template>

<script>
// import GoodsListItem from "./GoodListItem"
export default {
    name:"Goodlist",
    components:{
        // GoodsListItem
    },
    props:{
        goods:{
            type: Array,
            default(){
                return []
            }
        }
    },
    methods:{
        detail(){
            this.$router.push('/detail')
        }
    }
}
</script>

<style>

</style>