<template>
	<div class="app_pro_details">
		<!-- 商品轮播 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<!-- <swiper :list='imglist'></swiper>						 -->
					<img :src="content[0].md1" alt="" class="pic">
					<img :src="content[0].md2" alt="" class="pic">
					<img :src="content[0].md3" alt="" class="pic">
				</div>
			</div>
		</div>
		<!-- 商品参数 -->
		<div class="mui-card">
			<div class="mui-card-header">宝贝详情</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					{{content[0].title}}<br>
					
				</div>
			</div>
			<div class="mui-card-footer">
				<span>库存：{{content[0].stock}}</span> 
				<span>评分：{{content[0].score}}</span>
			</div>
		</div>
		<!-- 商品购买 -->
		<div class="mui-card">
			<div class="mui-card-header">宝贝选购</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<span>现价：</span><span class="price">{{content[0].price}}</span> <br>
					<span><del>{{content[0].price+50}}</del></span><br>
					<span><b>购买数量：</b></span><br>
					<div class="mui-numbox">
						<button class="mui-btn mui-btn-numbox-minus" type="button" @click='btn_down()'>-</button>
						<input class="mui-input-numbox" type="number" value="num" v-model='num' />
						<button class="mui-btn mui-btn-numbox-plus" type="button" @click='btn_up()'>+</button>
					</div>
				</div>				
			</div>
			<div class="mui-card-footer">
				 <p>
				 	<mt-button size='small' class='btn'>立即购买</mt-button>&nbsp; 
				 	<mt-button size='small' class='btn' @click='pro_send()'>添加至购物车</mt-button>
				 	
				 </p>
			</div>
		</div>
		<!-- 宝贝评论 -->
		<div class="mui-card">
			<div class="mui-card-header">
				宝贝评论
			</div>
			<div class="mui-card-content" >
				<comment-box :id='this.id' class="pro-com"></comment-box>
			</div>
			<div class="mui-card-footer"></div>
		</div>

	</div>
</template>
<script>
	import comments from './subcomponents/comments.vue'
	import {Toast} from "mint-ui"
	// import swiper from './subcomponents/swiper.vue'
	// import mui from '../lib/mui/js/mui.js'
	export default{
		data(){
			return{
				imglist:[],
				content:[],
				num:1,
				id:this.$route.params.id
			}
		},
		methods:{
			// getImgList:function () {
			// 	var url='http://127.0.0.1:3000/imagelist/list'
			// 	this.$http.get(url).then((result)=>{
			// 		// console.log(result);
			// 		this.imglist=result.body;
			// 	})
			// },
			pro_send(){
				// 修改vuex中共享数据，参数为方法名称
				this.$store.commit('increment',this.num);
				var username='匿名用户';
				this.$http.post('cartlist/add',{
					wid:this.id,
					title:this.content[0].title,
					username:username,
					num:this.num,
					price:this.content[0].price,
					pic:this.content[0].sm1
				}).then((res)=>{
					
					Toast(res.body.msg);

				})
			},
			btn_up(){
				if (this.num<=99) {
					
					this.num++;
				}
			},
			btn_down(){
				if (this.num>=1) {

					this.num--;
				}
			}
		},
		created(){
			// console.log(this.$router.params);
			// this.getImgList();
			this.$http.get('http://127.0.0.1:3000/products/find?id='+this.$route.params.id).then((res)=>{
				this.content=res.body;
				// this.imglist[0]={img_url:res.body[0].md1}
				// this.imglist[1]={img_url:res.body[0].md2}
				// this.imglist[2]={img_url:res.body[0].md3}
				// this.imglist[3]={img_url:res.body[0].md4}
				
			})
			// console.log(this.imglist);
		},
		components:{
			// 'swiper':swiper,
			'comment-box':comments
		}
	}
</script>
<style>
	.pro-com{
		padding: 10px;
	}
	.price{
		color: red;
		font-size: 25px;
	}
	.mui-card-content-inner{
		padding: 10px !important;
	}
	.mui-card-content-inner span{
		margin-top: 8px;
	}
	.mint-swipe{
		height: 200px;
	}
	.img-lunbo{
		width: 100%;
		height: 100%;
	}
	.pic{
		height: 200px;
	}
	.btn{
		background: #F0085C !important;
		color: white !important;
	}
</style>
