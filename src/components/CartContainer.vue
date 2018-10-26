<template>
	<div class="app_cart">
		<div class="mui-card" v-for='item in list'>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<img :src="item.pic" alt="" class="cart-pic">
					<span class="protitle w-50">{{item.title}}</span><br>
					<span class="cart-price">￥{{item.price}}</span>
					<div class="mui-numbox">
						<button class="mui-btn mui-btn-numbox-minus" type="button" @click='btn_down(item.id)'>-</button>
						<input class="mui-input-numbox" type="number" :value="item.num"  />
						<button class="mui-btn mui-btn-numbox-plus" type="button" @click='btn_up(item.id)'>+</button>
					</div>
					<span class="cart-del" @click='cart_del(item.cid)'>删除</span>
				</div>				
			</div>
		</div>
		<div class="mui-card-footer">
			 <p>
			 	<span>小计：{{getsubtotal}}</span>
			 
			 	
			 </p>
		</div>
	</div>
</template>
<script>
	import {Toast} from "mint-ui"
	export default{
		data(){
			return{
				
				list:[]
			}
		},
		methods:{
			cart_del(id){
				this.$http.get('cartlist/del?cid='+id).then((res)=>{
					Toast(res.body.msg);
					this.get_cart_list();
				})
			},
			btn_up(id){
				for ( var item of this.list) {
					if (item.id==id) {
						item.count++;
					}
				}
			},
			btn_down(id){
				for ( var item of this.list) {
					if (item.id==id&&item.count>=1) {
						item.count--;
					}
				}
			},
			get_cart_list(){
				this.$http.get('cartlist/list').then((res)=>{
					// console.log(res);
					this.list=res.body;
					// console.log(this.list)
				})
			}
		},
		created(){
			this.get_cart_list();
		},
		computed:{
			getsubtotal:function () {
				var sum=0;
				for (var item of this.list) {
					
					sum+=item.price*item.num;
				}
			return sum;
			}
		}
	}
</script>
<style>
	.cart-del{
		color: #B8B4B4;
	}
	.w-50{
		width: 100px;
	}
	.cart-price{
		margin-right: 5px;
		color: red;

	}
	.mui-card-content-inner{
		display: flex;
		justify-content: space-between
	}
	.cart-pic{
		width: 50px;
		height: 50px;
		margin-top: 0px;
		margin-right: 10px;
	}
</style>