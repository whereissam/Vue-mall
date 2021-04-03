<template>
  <div class="goods">
      <goods-list-item v-for='item in goods' :key="item"/>
      {{goods}}
      <!-- <ul>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
          <li>Hahaha</li>
      </ul> -->
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
    }
}
</script>

<style>

</style>