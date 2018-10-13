<template>
	<div class="app">
		<mt-swipe :auto='4000'>
			<mt-swipe-item v-for='item in list' :key='item.id'>
				<img :src="item.img_url" alt="" class="img-lunbo">
			</mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media  mui-col-sm-4">
		            	<router-link to="/home/news">
		                    <img src="../img/menu1.png" alt="">
		                    <div class="mui-media-body">时尚资讯</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media  mui-col-sm-4">
		            	<router-link to="/home/products_list/0">
		                    <img src="../img/menu2.png" alt=""><!-- <span class="mui-badge">5</span></span> -->
		                    <div class="mui-media-body">商品</div>
		                </router-link>
		            </li>
		            <li class="mui-table-view-cell mui-media  mui-col-sm-4"><a href="#">
		                    <img src="../img/menu3.png" alt="">
		                    <div class="mui-media-body">购物车</div></a></li>
		            <li class="mui-table-view-cell mui-media  mui-col-sm-4"><a href="#">
		                    <img src="../img/menu4.png" alt="">
		                    <div class="mui-media-body">支付</div></a></li>
		      		<li class="mui-table-view-cell mui-media  mui-col-sm-4"><a href="#">
		                    <img src="../img/menu5.png" alt="">
		                    <div class="mui-media-body">订单</div></a></li>	
		            <li class="mui-table-view-cell mui-media  mui-col-sm-4"><a href="#">
		                    <img src="../img/menu6.png" alt="">
		                    <div class="mui-media-body">联系</div></a></li>       
		</ul> 
		<ul class="mui-table-view mui-grid-view mui-grid-9 h-80">
			<li class="mui-table-view-cell mui-media  mui-col-sm-3 h-80">
            	<router-link to="/home/products_list/1">
                    <img src="../img/spring.png" alt="" class='season'>
                    <div class="mui-media-body">春装</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media  mui-col-sm-3 h-80">
            	<router-link to="/home/products_list/2">
                    <img src="../img/summer.png" alt="" class='season'>
                    <div class="mui-media-body">夏装</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media  mui-col-sm-3 h-80">
            	<router-link to="/home/products_list/3">
                    <img src="../img/autumn.png" alt="" class='season'>
                    <div class="mui-media-body">秋装</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media  mui-col-sm-3 h-80">
            	<router-link to="/home/products_list/4">
                    <img src="../img/winter.png" alt="" class='season'>
                    <div class="mui-media-body">冬装</div>
                </router-link>
            </li>
		</ul>
	</div>
</template>
<script>
	import{Toast} from 'mint-ui';
	export default{
		data(){
			return {
				list:[]
			}
		},
		methods:{
			getImgList:function () {
				var url='http://127.0.0.1:3000/imagelist/list'
				this.$http.get(url).then((result)=>{
					console.log(result);
					this.list=result.body;
				})
			}
		},
		created(){
			this.getImgList();
		}
	}
</script>
<style>

	/* 图片轮播的组件高度为0 */
	.h-80{
		height: 200px;
	}
	.app .mint-swipe{
		height: 200px;
	}
	.img-lunbo{
		width: 100%;
		height: 100%;
	}
	.mui-table-view.mui-grid-view.mui-grid-9{
		background: #fff;
	}
	.mui-table-view.mui-grid-view.mui-grid-9.mui-table-view-cell{
		
		border: 0;
	}
	.mui-table-view.mui-grid-view.mui-grid-9 img{
		width: 60px;
		height: 60px;
	}
	 .season{
	 	width: 70px !important;
	 	border-radius: 10px;
	 	height: 120px !important;
	 }
</style>