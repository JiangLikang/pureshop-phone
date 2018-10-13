import Vue from 'vue'
import Router from 'vue-router'
// 引入自定义组件
import HelloContainer from "./components/HelloWorld.vue"
import HomeContainer from './components/HomeContainer.vue'
import NewsContainer from './components/NewsContainer.vue'
import HuiyuanContainer from './components/HuiyuanContainer.vue'
import CartContainer from './components/CartContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
import NewsDetailContainer from './components/NewsDetailContainer'
import ProductsContainer from './components/ProductsContainer'
import ProdetailsContainer from './components/ProdetailsContainer'
Vue.use(Router)
// 指定该组件的访问路径
export default new Router({
	routes: [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/home',
		component: HomeContainer
	}, {
		path: '/home/news',
		component: NewsContainer
	}, {
		path: '/huiyuan',
		component: HuiyuanContainer
	}, {
		path: '/cart',
		component: CartContainer
	}, {
		path: '/search',
		component: SearchContainer
	}, {
		path: '/home/news/detail/:id',
		component: NewsDetailContainer
	}, {
		path: '/home/products_list/:id/',
		component: ProductsContainer
	}, {
		path: '/home/products_list/products_detail/:id/',
		component: ProdetailsContainer,
		name: 'pro_detail'
	}],
	linkActiveClass: 'mui-active'
})