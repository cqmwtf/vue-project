<template>
<div class="de">
     <!--a1轮播图-->
    <swipe 
    class="my-swipe"
    :speed="100"
    :auto="1000"
  >
    <swipe-item class="slide1">
        <img :src="list && list.img1">
    </swipe-item>
    <swipe-item class="slide2">
        <img :src="list && list.png1">
    </swipe-item>
  </swipe>
    
    <!--介绍-->
    <div class="det">
    <div class="details-body-box">
        <div class="tm">
            <div class="td2">
                <div class="td2_price"><span>已售：<b>{{list.sales}}</b>件</span></div>
                <div class="cl"></div>
                <div class="td2_name"> {{list.title}} </div>
                <div class="td2_cx">{{list.details}}</div>
            </div>
        </div>
        <div class="tm2">
            <div class="td2_info">
                <div class="td2_num">支付开团并邀请<span id="tuan_more_need_number">{{list.peoplenumber}}</span>人参团，人数不足自动退款</div>
            </div>
            <div style="visibility: visible;" class="kt">
                <div class="pin"> 
                    <div class="pin_btn_box">
                        <div class="pin_btn">
                            {{list.peoplenumber}}人团
                        </div>
                    </div>
                    <div class="pin_btn_box">
                        <div class="pin_btn pin_btn_bg2">
                            原价
                        </div>
                    </div>
                    <div class="cl"></div>
                </div>
                <div>
                    <a href="javascript:void(0);" class="kt_item kt_item_buy ">
                        <div class="kt_price"><b>{{list.oldprice}}</b>&nbsp;/&nbsp;700g~800g</div>
                        <div class="kt_btn" id="tuan_one_number">原价购买</div>
                    </a>
                    <a href="javascript:;" class="kt_item">
                        <div class="kt_price"><b>{{list.groupbuying}}</b>&nbsp;/&nbsp;~800g</div>
                        <div class="kt_btn">立即拼团<br></div>
                    </a>   
                </div>
                
            </div> 
        </div>        
        <!--拼团玩法-->
        <div class="step">
            <div class="step_hd">
                拼团玩法<a class="step_more" href="javascript:;">查看详情</a>
            </div>
            <div id="footItem" class="step_list">
                <div class="step_item step_item_on">
                    <div class="step_num">1</div>
                    <div class="step_detail">
                        <p class="step_tit">选择
                            <br>心仪商品</p>
                    </div>
                </div>
                <div class="step_item ">
                    <div class="step_num">2</div>
                    <div class="step_detail">
                        <p class="step_tit">支付开团
                            <br>或参团</p>
                    </div>
                </div>
                <div class="step_item ">
                    <div class="step_num">3</div>
                    <div class="step_detail">
                        <p class="step_tit">等待好友
                            <br>参团支付</p>
                    </div>
                </div>
                <div class="step_item">
                    <div class="step_num">4</div>
                    <div class="step_detail">
                        <p class="step_tit">达到人数
                            <br>团购成功</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="outs-box">
            <h1>商品详情</h1>
            <img :src="list && list.png1">
            <img :src="list && list.png2">
            <img :src="list && list.png3">
            <!-- <img :src="list[0] && list[0].png4"> -->         
        </div>
    </div>
    <!--detail_footer begin-->
	<footer class="detail_footer">
        <div class="return_left_box">
           <router-link to='/Home'><div class="return_home fl"></div></router-link>
            <a href="javascript:void(0);"><div class="return_home share_tuan fl"></div></a>    
        </div>  
        <a href="javascript:;"><div class="promptly_tuan fl">立即去拼团</div></a>     
        <div class="cl"></div>
    </footer>
    </div>
</div>
</template>
<script>
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
export default {
    data(){
        return{
            list:{}
        }
    },
  components: {
    Swipe,SwipeItem
  },
  async mounted(){
    let res = await axios({url:'/api/home1',method:'get'});
    for(var i=0;i<res.data.data.length;i++){
        // console.log(res.data.data)
        // console.log(this.$route.params.id)
        if(this.$route.params.id == res.data.data[i].goodsid){
            // console.log('hahha')
            this.list = res.data.data[i]
            let id = this.$route.params.id; 
            // console.log(res.data.data[i])
        }
    }
    // this.list = res.data.data
    // let id = this.list[0].goodsid;    
  }
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

