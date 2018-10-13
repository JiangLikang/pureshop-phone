<template>
	<div class="swiper">
		<mt-swipe :auto='4000'>
			<mt-swipe-item v-for='item in list' :key='item.id'>
				<img :src="item.img_url" alt="" >
			</mt-swipe-item>
		</mt-swipe>

	</div>
</template>
<script>
	export default{
		data(){
			return{}
		},
		methods:{

		},
		mounted(){
			console.log(this.list);
		},
		props:['list']
	}
</script>
<style>
	.swiper{
		height: 200px;

	}
	.swiper img{
		width: 100%;
	}
</style>