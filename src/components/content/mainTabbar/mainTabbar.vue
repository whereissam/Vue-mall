<template>
  <Tabbar>
    <tabbarItem path="/home" activeColor="blue">
      <img
        slot="item-icon"
        src="@/assets/img/tabbar/home.svg"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="item-text">首頁</div>
    </tabbarItem>
    <tabbarItem path="/category" activeColor="blue">
      <img
        slot="item-icon"
        src="@/assets/img/tabbar/category.svg"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="item-text">分類</div>
    </tabbarItem>
    <tabbarItem path="/cart" activeColor="blue">
      <img
        slot="item-icon"
        src="@/assets/img/tabbar/shopcart.svg"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="item-text">購物車</div>
    </tabbarItem>
    <tabbarItem path="/profile" activeColor="blue">
      <img
        slot="item-icon"
        src="@/assets/img/tabbar/profile.svg"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from "../../common/tabbar/Tabbar";
import TabbarItem from "../../common/tabbar/tabbarItem";

export default {
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style>
</style>