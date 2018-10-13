<template>
	<div class="app_search">
		<div class="mui-card" >
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<input type="text" class="search"><mt-button type='danger' size='small' class='btn-search'>搜索</mt-button>
				</div>				
			</div>
		</div>
		<div class="mui-card" >
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-media">
							<a href="javascript:;">
								<img class="mui-media-object mui-pull-left" src="../img/shuijiao.jpg">
								<div class="mui-media-body">
									华为手机
									<p class='mui-ellipsis'>华为手机，手机中的战斗机</p>
								</div>
							</a>
						</li>
					</ul>
					
				</div>				
			</div>
		</div>
		<div class="mui-card-footer">
			 <p>
			 	
			 
			 	
			 </p>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{

		}
	}
</script>
<style>
	.mui-table-view{
		width: 100%;
	}
	.mui-card-content-inner{
		padding: 0px !important;
	}
	.search{
		width: 70% !important;
		margin-top: 12px;
	}
	.mui-card-content-inner{
		display: flex;
		justify-content: space-around;
	}
	.btn-search{
		margin-top: 14px;
	}
</style>