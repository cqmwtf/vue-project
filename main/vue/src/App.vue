<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <router-view></router-view>
    <Footer v-show="bFoot"></Footer>
  </div>
</template>
<script>
import Footer from './components/Footer';
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  components:{
   Footer
  },
  watch:{
    $route:{
      handler:function(route){
        let path = route.path;
        this.checkPath(path);
      },
      immediate:true
    }
  },
  methods:{
    checkPath(path){
      if(/Home|User|Myorder|Groups|Details/.test(path)){
        this.$store.dispatch('UPDATE_FOOT',true)
      }
      if(/Login|reg|Pay/.test(path)){
        this.$store.dispatch('UPDATE_FOOT',false)
      }
    }
  },
  computed:mapGetters([
    'bFoot','bLoading'
  ])
 
}
</script>



