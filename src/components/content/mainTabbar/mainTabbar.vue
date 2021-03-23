<template>
  <Tabbar>
    <tabbarItem path="/home" activeColor="blue">
      <img
        slot="item-icon"
        src="https://image.flaticon.com/icons/png/512/69/69962.png"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="https://www.clipartmax.com/png/middle/76-765457_back-default-home-homepage-icon-home-icon-png-orange.png"
        alt=""
      />
      <div slot="item-text">首頁</div>
    </tabbarItem>
    <tabbarItem path="/category" activeColor="blue">
      <img
        slot="item-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wsG6WFnRtsTcVJaPyM0BiJDT-qGnhyk6Jg&usqp=CAU"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-rectangle-color-button-classification-icon-image_1356833.jpg"
        alt=""
      />
      <div slot="item-text">分類</div>
    </tabbarItem>
    <tabbarItem path="/cart" activeColor="blue">
      <img
        slot="item-icon"
        src="https://www.vhv.rs/dpng/d/428-4287684_background-shopping-cart-transparent-transparent-background-shopping-cart.png"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="https://image.flaticon.com/icons/png/512/2203/2203183.png"
        alt=""
      />
      <div slot="item-text">購物車</div>
    </tabbarItem>
    <tabbarItem path="/profile" activeColor="blue">
      <img
        slot="item-icon"
        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/profile-1413099-1199196.png"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-1506810-1278719.png"
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