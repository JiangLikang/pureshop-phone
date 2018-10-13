<template>
	<div class="app_newslist">
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in newslist' >
					<router-link :to="'/home/news/detail/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url" height="333" width="500">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
								<span>{{item.ctime | dateFormat}}</span>&nbsp;
								<span>点击：{{item.click}}次</span>
							</p>
						</div>
					</router-link>
				</li>
		</ul>
		<mt-button type='primary' size='large' @click='getMore()' class='btn'>加载更多...</mt-button>	
	</div>
</template>
<script>
	export default{
		data(){
			return {
				newslist:[],
				pageIndex:0
			}
		},
		methods:{
			getNewsList(){
				var url='http://127.0.0.1:3000/newslist/list'
				this.$http.get(url).then((res)=>{
					this.newslist=res.body.data;
				})
			},
			getMore(){
				this.pageIndex++;
				var url='newslist/list?pno='+this.pageIndex;
				this.$http.get(url).then((res)=>{
					this.newslist=this.newslist.concat(res.body.data);
				});	
			}
		},
		created(){
			this.getNewsList();
			this.getMore();
		}
	}
</script>
<style>
	.mui-table-view-cell.mui-media span{
		font-size: 12px;
		color: #969191;
	}
	.mui-table-view-cell.mui-media h1{
		font-size: 14px;
	}
	.app_newslist li .mui-ellipsis{
		display: flex;
		justify-content: space-between
	}
</style>