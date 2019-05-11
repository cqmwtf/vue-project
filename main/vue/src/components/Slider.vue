<template>
    <!--a1轮播图-->
    <swipe 
    class="my-swipe"
    :speed="100"
    :auto="1000"
  >
    <swipe-item class="slide1"><img src="../assets/images/j-banner02.jpg"></swipe-item>
    <swipe-item class="slide2"><img src="../assets/images/j-banner04.jpg"></swipe-item>
    <!-- <swipe-item class="slide3">3</swipe-item> -->
  </swipe>
    <!-- <div data-am-widget="slider" class="am-slider am-slider-a1" data-am-slider='{"directionNav":false}' >
	    <ul class="am-slides cl">
	        <li>
	        	<img src="../assets/images/j-banner02.jpg">
	        </li>
	        <li>
	        	<img src="../assets/images/j-banner04.jpg">
	        </li>
	    </ul>
	</div> -->
</template>
<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
export default {
  components: {
    Swipe,SwipeItem
  },
  // mounted(){
  //   axios({url:'/api/home1',method:'get'}).then(
  //       res=>{
  //         if(res.data.error==0){
  //             console.log(res.data)
  //           // this.$store.commit('UPDATE_USER',{error:1});
  //           // localStorage.removeItem('vue_user');
  //           // this.$router.push('/home')
  //         }
  //       }
  //     )
  // }
}
</script>
<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>