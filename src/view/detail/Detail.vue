<template>
    <DetailNavBar/>
</template>

<script>
import DetailNavBar from "./childCompos/detailNavBar"

export default {
    name:'Detail',
   components:{
       DetailNavBar
   },
    data(){
        return{
            iid: null,
        }
    },
    created(){
        this.iid = this.$route.params.iid
    }
}
</script>

<style>

</style>