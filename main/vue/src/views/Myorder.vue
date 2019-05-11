<template>
    <div id="user-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<router-link to='/User'></router-link>
				<!-- <a href="user.html"></a> -->
			</div>
			<span class="user-title">我的订单</span>
			<div class="shopping-cart fr">
				<router-link to='/Home'></router-link>
				<!-- <a href="index.html"></a> -->
			</div>
	    </nav>
	    <div class="myorder-tab">
	    	<div class="myorder-nav">
		    	<ul id="tab_btn" class="coupon-list">
		    		<li class="pick">全部订单</li>
		    		<li><span class="bar"></span>待付款</li>
		    		<li><span class="bar"></span>待收货</li>
		    	</ul>
		    	<div class="cl"></div>
		    </div>
		    <div class="myorder-content">
		    	<ul>
		    		<li class="mc-all cc-one tab_content show">
		    			<ul>
		    				<li>
		    					<a href="javascript:;">
		    						<div class="mc-sum-box">
			    						<div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
				    					<div class="myorder-text">
				    						<h1>越南进口白肉火龙果</h1>
				    						<h2>规格：2个装</h2>
				    						<div class="myorder-cost">
				    							<span>数量:1</span>
				    							<span class="mc-t">￥14.00/件</span>
				    						</div>
				    					</div>
			    					</div>
			    					<div class="mc-sum-Am">
			    						共1件商品，免运费<span>实付：<span class="mc-t">￥14.00</span></span>
			    					</div>
			    					<h3>已付款，已发货</h3>
		    					</a>
		    				</li>
		    				<li>
		    					<div class="mc-sum-box">
		    						<div class="myorder-sum fl"><img src="../assets/images/myorder2.jpg"></div>
			    					<div class="myorder-text">
			    						<h1>优选越南青皮金煌芒果</h1>
			    						<h2>规格：4斤装</h2>
			    						<div class="myorder-cost">
			    							<span>数量:1</span>
			    							<span class="mc-t">￥49.00/件</span>
			    						</div>
			    					</div>
		    					</div>
		    					<div class="mc-sum-Am">
		    						共1件商品，免运费<span>实付：<span class="mc-t">￥49.00</span></span>
		    					</div>
		    					<h3>未付款</h3>
		    				</li>
		    			</ul>
		    		</li>
		    		<li class="mc-all mc-two tab_content">
		    			<ul>
		    				<li>
		    					<div class="mc-sum-box">
		    						<div class="myorder-sum fl"><img src="../assets/images/myorder2.jpg"></div>
			    					<div class="myorder-text">
			    						<h1>优选越南青皮金煌芒果</h1>
			    						<h2>规格：4斤装</h2>
			    						<div class="myorder-cost">
			    							<span>数量:1</span>
			    							<span class="mc-t">￥49.00/件</span>
			    						</div>
			    					</div>
		    					</div>
		    					<div class="mc-sum-Am">
		    						共1件商品，免运费<span>实付：<span class="mc-t">￥49.00</span></span>
		    					</div>
		    					<h3>未付款</h3>
		    				</li>
		    			</ul>
		    		</li>
		    		<li class="mc-all mc-three tab_content">
		    			<ul>
		    				<li>
		    					<div class="mc-sum-box">
		    						<div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
			    					<div class="myorder-text">
			    						<h1>越南进口白肉火龙果</h1>
			    						<h2>规格：2个装</h2>
			    						<div class="myorder-cost">
			    							<span>数量:1</span>
			    							<span class="mc-t">￥14.00/件</span>
			    						</div>
			    					</div>
		    					</div>
		    					<div class="mc-sum-Am">
		    						共1件商品，免运费<span>实付：<span class="mc-t">￥14.00</span></span>
		    					</div>
		    					<h3>已付款，已发货</h3>
		    				</li>
		    			</ul>
		    		</li>
		    	</ul>
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
    mounted(){
        //TAB切换
    var tab_Btns_box=document.getElementById('tab_btn');
    var tab_Btns=tab_Btns_box.getElementsByTagName('li');
    var tab_contents=document.getElementsByClassName('tab_content');
    for(var i=0;i<tab_Btns.length;i++){
    tab_Btns[i].index=i;

    tab_Btns[i].onclick=function(){
     for(var i=0;i<tab_Btns.length;i++){
     if(i!==this.index){
     tab_Btns[i].classList.remove('pick')
     }
     }
     tab_Btns[this.index].className="pick";

     for(var j=0;j<tab_contents.length;j++){
     if(j!==this.index){
         tab_contents[j].classList.remove('show');
     }
         tab_contents[this.index].classList.add('show');
     }
    }
    }
    }
}
</script>

