<template>
	<div class="app_subcomments">
		<h1>发表评论</h1>
		<hr>
		<textarea name="" id="" cols="30" rows="5" placeholder="请输入评论的内容（不超过120字）" maxlength="120" v-model='cmt_content'></textarea>
		<mt-button size='large' type='primary' @click="cmt_send()" class='addCom'>发表评论</mt-button>
		<div class="cmt-list" >
			<div class="cmt-list-item" v-for='(item,i) in list'>
				<div class="cmt-title">
					第{{i+1}}楼&nbsp;&nbsp;用户：{{item.username}} 发表时间：{{item.ctime|dateFormat}}
				</div>
				<div class="cmt-body">
					{{item.content}}
				</div>
			</div>
			<mt-button size='large' type='danger' @click='getCommentsList()' class='addCom'>加载更多</mt-button>
		</div>
	</div>
</template>	
<script>
	import {Toast} from "mint-ui"
	export default{
		inject:['reload'],
		data(){
			return{
				list:[],
				cmt_content:'',
				pageIndex:0
			}
		},
		methods:{
			getCommentsList(){
				this.pageIndex++;
				console.log(this.pageIndex);
				var url='newslist/commentlist?nid='+this.id+'&pno='+this.pageIndex;
				this.$http.get(url).then((res)=>{
					this.list=this.list.concat(res.body.data);
				})
			},
		
			cmt_send(){
				var username='匿名用户';
				this.$http.post('newslist/add',{
					nid:this.id,
					content:this.cmt_content,
					username:username
				}).then((res)=>{
					// this.reload();
					this.pageIndex=0;
					this.list=[];
					this.getCommentsList()
					Toast(res.body.msg);

				})
			}

		},
		created(){
			this.getCommentsList();
		},
		props:['id']
	}
</script>
<style>
	.addCom{
		background: #F0085C !important;
	}
	.cmt-list-item{
		border: 1px solid #969696;
		padding: 4px;
		font-size: 13px;
	}
	h1{
		font-size: 18px !important;
	}
	textarea{
		font-size: 14px !important;
	}
	.cmt-list{
		margin: 15px 0px;
	}
	.cmt-title{
		line-height: 30px;
		color: #969696;
	}
	.cmt-body{
		text-indent: 2em;
		line-height: 30px;
	}
</style>