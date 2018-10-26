<template>
	<div class="app_newsdetail">
		<h1 class="newstitle">{{content[0].title}}</h1>
		<p class="subtitle">
			<span>发表时间:{{content[0].ctime|dateFormat}}</span>
			<span>点击：{{content[0].click}} 次</span>
		</p>
		<hr>
		<div class="container">
			<p class="content">
				{{content[0].content}}
			</p>			
			<img :src="content[0].img_url" alt="" class="img-news">
		</div>
		<comment-box :id='this.id'></comment-box>
	</div>
</template>
<script>
	import comments from './subcomponents/comments.vue'
	export default{
		data(){
			return{
				content:[],
				id:this.$route.params.id
			}
		},
		methods:{

		},
		created(){
			var url='newslist/find?id='+this.id;
			this.$http.get(url).then((res)=>{
				this.content=res.body.msg;
				// console.log(this.content);
			});
		},
		components:{
			'comment-box':comments
		}
	}	
</script>
<style>
    .content{
    	color: black;
    }
	.img-news{
		width: 80%;
		margin-left: 30px;
	}
	.app_newsdetail{
		padding: 4px;
	}
	.newstitle{
		font-size: 20px !important;
		text-align: center;
		margin: 20px;
	}
	.subtitle{
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
	}
	.container{
		text-align: justify;
		padding: 15px;
	}
</style>