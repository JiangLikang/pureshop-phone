<template>
	<div class="app_products">
		<div class="pro-list">
			<div class="pro-item" v-for='item in list' @click="getDetail(item.wid)">
				<img :src="item.md1" height="333" width="500"  alt="">
				<h1 class="protitle">{{item.title}}</h1>
				<div class="info">
					<p >
						<span class="now">￥{{item.price}}</span>
						<span class="old">￥{{item.price+50}}</span>
					</p>
					<p class="sell">
						<span>热卖中</span>
						<span>剩{{item.stock}}件</span>
					</p>
				</div>
			</div>				
		</div>
		<mt-button type='primary' size='large' @click='getPro()'>加载更多</mt-button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[],
				id:this.$route.params.id
			}
		},
		methods:{
			getPro(){
				this.$http.get('products/list?id='+this.id).then((res)=>{
					this.list=res.body
				})
			},
			getDetail(id){
				// console.log(id)
				// console.log(this.list);
				this.$router.push('/home/products_list/products_detail/'+id)
			}
		},
		created(){
			this.getPro();
		}
	}
</script>
<style>
	.protitle{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: 20px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.pro-list{
		display: flex;
		flex-wrap: wrap;
		padding: 7px;
	 	justify-content: space-between;
	 	/* border: 1px solid black; */
	}
	.pro-item{
		width: 49%;
		background: #E9DEDE;
		height: 400px;
		border: 1px solid #ccc;
		box-shadow: 0 0 8px #ccc;
		margin: 4px 0;
		padding: 2px;
		display: flex;
		flex-direction: column;
		justify-content: white-space;
		min-height: 293px;
		padding: 5px;
		cursor: pointer;
	}
	.pro-item img{
		width: 100%;
		height: auto;
	}
	h1{
		font-size: 14px !important;
	}
	.old{
		color: black;
		text-decoration: line-through;
	}
	.now{
		color: red;
		font-size: 25px
	}
	.sell{
		display: flex;
		font-size: 12px;
		justify-content: space-between;
	}
</style>