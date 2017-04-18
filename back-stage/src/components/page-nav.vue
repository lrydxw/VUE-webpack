<template>
	<div id="page-nav" class="clearfix">
		<div class="l nav-box">
			<ul class="nav">
				<li v-for='(item, index) in navlist' 
				:class="[index == navActiveNum ? item.activeClass : '']"
				@click="changeNav(item,index)">
					<div><i></i><span>{{ item.name }}</span></div>
				</li>
			</ul>
		</div>
		<div class="l menu-box">
			<ul class="menu">
				<!-- <router-link 
				v-for='(item,index) in menu' 
				:to='item.path'>
				<li 
				@click="addTab(item)">
					<div><i></i><span>{{ item.name }}</span></div>
				</li>
				</router-link> -->
				<li 
				v-for='(item,index) in menu'
				@click="addTab(item)">
					<div><i></i><span>{{ item.name }}</span></div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import { mapState,mapMutations,mapActions } from 'vuex'
	export default {
		name:"page-nav",
		data(){
			return {
				navlist:[
					{
						name: '订单',
						isActive: true,
						activeClass: 'active',
						id: 1,
						pid: 1
					},
					{
						path: '/cwgl',
						name: '财务',
						isActive: false,
						activeClass: 'active',
						id: 2,
						pid: 1
					}
					/*,
					{
						path: '/rcgl',
						name: '日常',
						isActive: false,
						activeClass: 'active',
						id: 3,
						pid: 1
					},
					{
						path: '/yhgl',
						name: '用户',
						isActive: false,
						activeClass: 'active',
						id: 4,
						pid: 1
					},
					{
						path: '/yhqgl',
						name: '优惠券',
						isActive: false,
						activeClass: 'active',
						id: 5,
						pid: 1
					},
					{
						path: '/sdgl',
						name: '司导',
						isActive: false,
						activeClass: 'active',
						id: 6,
						pid: 1
					},
					{
						path: '/fxgl',
						name: '分销',
						isActive: false,
						activeClass: 'active',
						id: 7,
						pid: 1
					},
					{
						path: '/mpld',
						name: '门票',
						isActive: false,
						activeClass: 'active',
						id: 8,
						pid: 1
					},
					{
						path: '/sddz',
						name: '活动',
						isActive: false,
						activeClass: 'active',
						id: 9,
						pid: 1
					}*/
				],
				menulist: [
					[
						{
							path: 'orderlist',
							name: '订单列表',
							isActive: false,
							activeClass: 'active',
							pid: 1,
							id: 1.1
						},
						{
							path: 'orderedit',
							name: '订单录入',
							isActive: false,
							activeClass: 'active',
							pid: 1,
							id: 1.2
						}
					],[
						{
							path: 'userfinancehandle',
							name: '用户财务操作',
							isActive: false,
							activeClass: 'active',
							pid: 2,
							id: 2.1
						},
						{
							path: 'userfinanceturnover',
							name: '用户财务流水',
							isActive: true,
							activeClass: 'active',
							pid: 2,
							id: 2.2
						},
						{
							path: 'driverfinancehandle',
							name: '司导财务操作',
							isActive: true,
							activeClass: 'active',
							pid: 2,
							id: 2.3
						},
						{
							path: 'driverfinanceturnover',
							name: '司导财务流水',
							isActive: true,
							activeClass: 'active',
							pid: 2,
							id: 2.4
						},
						/*{
							path: 'ddgl',
							name: '司导提现记录',
							isActive: true,
							activeClass: 'active',
							pid: 2,
							id: 2.5
						},
						{
							path: 'ddgl',
							name: '用户订单列表',
							isActive: true,
							activeClass: 'active',
							pid: 2,
							id: 2.6
						},
						{
							path: 'ddgl',
							name: '发票管理',
							isActive: true,
							activeClass: 'active',
							pid: 2,
							id: 2.7
						},*/
					]/*,[
						{
							path: '/cwgl',
							name: '查价日志',
							isActive: false,
							activeClass: 'active',
							pid: 3,
							id: 3.1
						},{
							path: '/cwgl',
							name: 'API日志',
							isActive: false,
							activeClass: 'active',
							pid: 3,
							id: 3.2
						},{
							path: '/cwgl',
							name: '操作日志',
							isActive: false,
							activeClass: 'active',
							pid: 3,
							id: 3.3
						},{
							path: '/cwgl',
							name: '评价管理',
							isActive: false,
							activeClass: 'active',
							pid: 3,
							id: 3.4
						},
					],[
						{
							path: '/cwgl',
							name: '用户列表',
							isActive: false,
							activeClass: 'active',
							pid: 4,
							id: 4.1
						},{
							path: '/cwgl',
							name: '用户充值返现',
							isActive: false,
							activeClass: 'active',
							pid: 4,
							id: 4.2
						},{
							path: '/cwgl',
							name: '商务充值返现',
							isActive: false,
							activeClass: 'active',
							pid: 4,
							id: 4.3
						}
					],[
						{
							path: '/cwgl',
							name: '兑换码',
							isActive: false,
							activeClass: 'active',
							pid: 5,
							id: 5.1
						},{
							path: '/cwgl',
							name: '用户充值返现',
							isActive: false,
							activeClass: 'active',
							pid: 5,
							id: 5.2
						},{
							path: '/cwgl',
							name: '商务充值返现',
							isActive: false,
							activeClass: 'active',
							pid: 5,
							id: 5.3
						}
					],[
						{
							path: '/cwgl',
							name: '司导列表',
							isActive: false,
							activeClass: 'active',
							pid: 6,
							id: 6.1
						},{
							path: '/cwgl',
							name: '车辆列表',
							isActive: false,
							activeClass: 'active',
							pid: 6,
							id: 6.2
						},{
							path: '/cwgl',
							name: '司导等级管理',
							isActive: false,
							activeClass: 'active',
							pid: 6,
							id: 6.3
						},{
							path: '/cwgl',
							name: '司导排名',
							isActive: false,
							activeClass: 'active',
							pid: 6,
							id: 6.4
						},{
							path: '/cwgl',
							name: '司导违规分类',
							isActive: false,
							activeClass: 'active',
							pid: 6,
							id: 6.5
						},{
							path: '/cwgl',
							name: '司导违规项',
							isActive: false,
							activeClass: 'active',
							pid: 6,
							id: 6.6
						},{
							path: '/cwgl',
							name: '保障积分规则',
							isActive: false,
							activeClass: 'active',
							pid: 6,
							id: 6.7
						}
					],[
						{
							path: '/cwgl',
							name: '合作伙伴管理',
							isActive: false,
							activeClass: 'active',
							pid: 7,
							id: 7.1
						},{
							path: '/cwgl',
							name: '合作伙伴价格',
							isActive: false,
							activeClass: 'active',
							pid: 6,
							id: 7.2
						}
					],[
						{
							path: '/cwgl',
							name: '订单管理',
							isActive: false,
							activeClass: 'active',
							pid: 8,
							id: 8.1
						},{
							path: '/cwgl',
							name: '录单页面',
							isActive: false,
							activeClass: 'active',
							pid: 8,
							id: 8.2
						},{
							path: '/cwgl',
							name: '门票产品列表',
							isActive: false,
							activeClass: 'active',
							pid: 8,
							id: 8.3
						},{
							path: '/cwgl',
							name: '产品套餐导入',
							isActive: false,
							activeClass: 'active',
							pid: 8,
							id: 8.4
						}
					],[
						{
							path: '/cwgl',
							name: '点赞统计',
							isActive: false,
							activeClass: 'active',
							pid: 9,
							id: 9.1
						},{
							path: '/cwgl',
							name: '用户点赞一览',
							isActive: false,
							activeClass: 'active',
							pid: 9,
							id: 9.2
						},{
							path: '/cwgl',
							name: '用户愿望一览',
							isActive: false,
							activeClass: 'active',
							pid: 9,
							id: 9.3
						}
					]*/
				],
				meunNum: 0,
				navActiveNum: 0
			}
		},
		computed:{
			menu(){
				return this.menulist[this.meunNum]
			},
			...mapState([   //数组方式,
			  'editableTabsValue2',
			  'editableTabs2',
			  'tabIndex'
			])
		},
		methods:{
			changeNav(item,index){
				//选择展示的meunlist
				this.meunNum = index;
				this.navActiveNum = index;
			},
			...mapMutations([
                'addTab',
                'removeTab'
            ]),
		}
	}
</script>
<style lang="less" scoped>
	#page-nav {
		background: #fff;
		height: 100%;
		box-sizing: border-box;
		padding-top: 40px;
		.nav-box {
			height: 100%;
			background: #667393;
			text-shadow: 1px 1px 0 rgba(0,0,0,0.75);
			.nav {
				.active {
					background-color: #505b72;
					div {
						background-image: url(../assets/img/sanjiao.png);
						background-repeat: no-repeat;
						background-position: right center;
					}
				}
				li {
					width: 70px;
					height: 70px;
					&:hover {
						background-color: #505b72;
					}
					&:nth-child(1) {
						i {
							background-position: -360px 0;
						}
					}
					&:nth-child(2) {
						i {
							background-position: -300px 0;
						}
					}
					&:nth-child(3) {
						i {
							background-position: -90px 0;
						}
					}
					&:nth-child(4) {
						i {
							background-position: -30px -30px;
						}
					}
					&:nth-child(5) {
						i {
							background-position: -270px -30px;
						}
					}
					&:nth-child(6) {
						i {
							background-position: -450px -30px;
						}
					}
					&:nth-child(7) {
						i {
							background-position: -60px -30px;
						}
					}
					&:nth-child(8) {
						i {
							background-position: -540px -30px;
						}
					}
					&:nth-child(9) {
						i {
							background-position: -12px -192px;
						}
					}
					div {
						position: relative;
						width: 100%;
						height: 100%;
						i {
							position: absolute;
							top: 14px;
							left: 19px;
							width: 30px;
							height: 30px;
							background: url(../assets/img/icon.png) no-repeat;
							background-position: -120px 0;
							
						}
						span {
							font-size: 12px;
							font-weight: 600px;
							line-height: 22px;
						    color: #fff;
						    text-align: center;
						    width: 65px;
						    position: absolute;
						    z-index: 2;
						    top: 36px;
						    left: 0;
						}
					}
				}
			}
		}
		.menu-box {
			width: 140px;
			height: 100%;
			background: #F6F7F8;
			.menu {
				.router-link-active {
					li {
						background: #DDDCDC;
					}
				}
				li {
					font-weight: 700;
					line-height: 36px;
					padding-left: 1em;
					color: #555;
					list-style: disc inside;
					&:hover {
						background: #DDDCDC;
					}
					div {
						display: inline-block;
					}
				}
			}
		}	
	}
</style>