<template>
<div @click="itemClick">
  <img src="goodsItem.show.img" alt="">
  <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
  </div>
</div>

</template>

<script>

export default {
    name:"GoodlistItem",
    props:{
        goodsItem:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imageLoad(){
            this.$bus.emit('itemImageLoad')
        },
        itemClick(){
            this.$router.push("/detail/" + this.goodsItem.iid)
            // this.$router.push({
            //     path: '/detail'
            // })
        }
    }
}
</script>

<style>

</style>