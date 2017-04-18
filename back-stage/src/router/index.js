import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Home from 'pages/home'

//order 订单
import OrderList from '../pages/order/order-list/index.vue'
import OrderEdit from '../pages/order/order-edit/index.vue'

//finance 财务
import UserFinanceHandle from '../pages/finance/user-finance-handle/index'
import UserFinanceTurnover from '../pages/finance/user-finance-turnover/index'
import DriverFinanceHandle from '../pages/finance/driver-finance-handle/index'
import DriverFinanceTurnover from '../pages/finance/driver-finance-turnover/index'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
	    path: '/',
	    component: Home,
	    children:[
	    	{path:'/',component:Hello},
	    	{path:'/orderlist',component:OrderList},
	    	{path:'/orderedit',component:OrderEdit},
	    	{path:'/userfinancehandle',component:UserFinanceHandle},
	    	{path:'/userfinanceturnover',component:UserFinanceTurnover},
	    	{path:'/driverfinancehandle',component:DriverFinanceHandle},
	    	{path:'/driverfinanceturnover',component:DriverFinanceTurnover},

	    ]
	}]
})
