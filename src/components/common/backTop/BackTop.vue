<template>
  <div class="back-top">
      <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name: "BackTop",
}
</script>

<style scoped>
.back-top{
    position: fixed;
    right: 10px;
    bottom: 55px;
    /* background-color: red; */
}
.back-top img{
    width: 30px;
    height: 30px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

}
</style>