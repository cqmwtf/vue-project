<template>
    <div class="host">
        <Header1></Header1>
        <Slider></Slider>
        <Inn :list="home"></Inn>
    </div>
</template>
<script>
import Header1 from './Header1'
import Slider from '../components/Slider'
import Inn from './Inn'
import { mapGetters } from 'vuex';
export default {
  data(){
    return {
      list:[],
      dataName:[]
    }
  },
  computed:mapGetters([
    'home'
  ]),
  mounted(){
    this.$store.dispatch('UPDATE_HOME')
    setTimeout(()=>{
      // console.log(this.home)
    },2000)
  },
  components:{Header1,Slider,Inn}
}
</script>