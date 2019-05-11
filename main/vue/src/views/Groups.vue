<template>
    <div id="user-b">
        <!--html5 nav-->
        <nav class="j-nav navbar">
            <div class="logo fl">
                <router-link to='/Home'></router-link>
                <!-- <a href="index.html"></a> -->
            </div>
            <span class="user-title">我的拼团</span>
            <div class="shopping-cart fr">
                <router-link to='/Pay'></router-link>
                <!-- <a href="index.html"></a> -->
            </div>
        </nav>
        <div class="groups-box">
            <!-- 我的拼团列表 -->
            <div class="groups-m mc-sum-box">
                <div>
                    <div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
                    <div class="myorder-text">
                        <h1>越南进口白肉火龙果 </h1>
                        <h2>规格：2个装</h2>
                        <div class="tuan_g_core">
                            <div class="tuan_g_price">
                                <span>成团价</span>
                                <b>¥14.00</b>
                            </div>
                            <div class="tuan_g_btn"></div>
                        </div>
                    </div>
                </div>
                <div class="groups-dowm-bnt">
                    拼团进行中
                    <a href="javascript:;" class="btn fr">查看团详情</a>
                    <a href="javascript:;" class="btn fr">查看订单详情</a>
                </div>
            </div>
            <div class="groups-m mc-sum-box">
                <div>
                    <div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
                    <div class="myorder-text">
                        <h1>越南进口白肉火龙果 </h1>
                        <h2>规格：2个装</h2>
                        <div class="tuan_g_core">
                            <div class="tuan_g_price">
                                <span>成团价</span>
                                <b>¥14.00</b>
                            </div>
                            <div class="tuan_g_btn"></div>
                        </div>
                    </div>
                </div>
                <div class="groups-dowm-bnt">
                    拼团进行中
                    <a href="javascript:;" class="btn fr">查看团详情</a>
                    <a href="javascript:;" class="btn fr">查看订单详情</a>
                </div>
            </div>
        </div>
        </div>
</template>
<script>
import store from '../store.js'
export default {
    beforeRouteEnter(to,from,next){
		if(store.state.user.error == 0){
			next();
		}else{
			next('/Login')
		}
	},
}
</script>

