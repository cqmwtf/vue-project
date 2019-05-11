<template>
    <div class="cqm">
        <div class="j-hint">仅20元起送，24小时内极速达</div>
        <div class="j-component-func" id="m-banner">
        <ul class="list-unstyled" id="categoryMenu">
            <li class="route1 route"><router-link to='/Reg'><span class="glyphicon fdayicon fdayicon-all"></span>新用户</router-link></li>
            <li class="route2 route"><a href="javascript:;"><span class="glyphicon fdayicon fdayicon-order"></span>套餐</a></li>
            <li class="route3 route"><a href="javascript:;"><span class="glyphicon fdayicon fdayicon-contact"></span>邀请红包</a></li>
            <li class="route4 route"><a href="javascript:;"><span class="glyphicon fdayicon fdayicon-client"></span>企业团购</a></li>
        </ul>
    </div>
    <!--内容-->
	<div class="j-component-bestsell">
	    <ul class="list-unstyled">
            <li>
                <!-- <a href="javascript:void(0);"><img :src="list[1] && list[1].png1"></a> -->
                <router-link :to="{name:'details',params:{id:list[1] && list[1].goodsid}}">
                    <img :src="list[1] && list[1].indeximg">
                </router-link>
            </li>
        </ul>
	</div>
	<div id="tuan" class="tuan">
        <div class="tuan_g" data-vtuan="0" data-cat="1" data-num="12058">
            <i></i>
            <!-- <router-link :to="'/details/' + 1">     -->
            <router-link :to="{name:'details',params:{id:list[0] && list[0].goodsid}}">
                <div class="tuan_g_img">
                    <div class="tally_box">
                        <p>{{list[0] && list[0].peoplenumber}}人团</p>
                        <p>2.5折</p>
                    </div>
                    <img :src="list[0] && list[0].png1">
                </div>
                <div class="tuan_g_info">
                    <p class="tuan_g_name">{{list[0] && list[0].title}}</p>
                    <p style="display: black;" class="tuan_g_cx">
                        {{list[0] && list[0].details}}
                    </p>
                </div>                
                <div class="tuan_g_core">
                    <div id="triangle-right"></div>
                    <div class="tuan_g_price">
                        <span>{{list[0] && list[0].peoplenumber}}人团只需</span>
                        <b>{{list[0] && list[0].groupbuying}}</b>
                    </div>
                    <div class="tuan_g_btn">我要拼</div>
                </div>
                <div class="tuan_g_yj"><s>原价:{{list[0] && list[0].oldprice}}</s></div>
            </router-link>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props:['list']
}
</script>

