<template>
	<div id="page-nav" class="clearfix">
		<div class="l nav-box">
			<ul class="nav">
				<!-- <router-link v-for='item in navlist' :to='item.path'>
					<li><div><i></i><span>{{ item.name }}</span></div></li>
				</router-link> -->
				
				<li v-for='(item, index) in navlist' 
				:class="[index == navActiveNum ? item.activeClass : '']"
				@click="changeNav(item,index)">
					<div><i></i><span>{{ item.name }}</span></div>
				</li>
			</ul>
		</div>
		<div class="l menu-box">
			<ul class="menu">
				<li v-for='(item,index) in menu' >
					<div><i></i><span>{{ item.name }}</span></div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name:"page-nav",
		data(){
			return {
				navlist:[
					{
						path: 'ddgl',
						name: '产品设置',
						isActive: true,
						activeClass: 'active',
						menuNum: -1
					},
					{
						path: '/cwgl',
						name: '系统设置',
						isActive: false,
						activeClass: 'active',
						menuNum: -1
					},
					{
						path: '/rcgl',
						name: '媒体中心',
						isActive: false,
						activeClass: 'active',
						menuNum: -1
					}
				],
				menulist: [
					[
						{
							path: 'ddgl',
							name: '产品列表',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: '/cwgl',
							name: '城市列表',
							isActive: false,
							activeClass: 'active'
						},
						{
							path: '/cwgl',
							name: '机场列表',
							isActive: false,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '价格管理',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '价格批量操作',
							isActive: true,
							activeClass: 'active'
						}
					],[
						{
							path: 'ddgl',
							name: '电脑轮播图管理',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '移动端轮播图管理',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '楼层运营管理',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '招聘管理',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '基本参数设置',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '银行账户设置',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '在线支付接口',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '自动任务设置',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '邮件模板设置',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '文档设置',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '权限选项设置',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '车型设置',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '载客规格',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '合作伙伴设置',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '内置参数字典',
							isActive: true,
							activeClass: 'active'
						}
					],[
						{
							path: 'ddgl',
							name: '官网新闻',
							isActive: true,
							activeClass: 'active'
						},
						{
							path: 'ddgl',
							name: '官网视频',
							isActive: true,
							activeClass: 'active'
						}
					]

				],
				meunNum: 0,
				navActiveNum: 0
			}
		},
		computed:{
			menu(){
				return this.menulist[this.meunNum]
			}
		},
		methods:{
			changeNav(item,index){
				//选择展示的meunlist
				this.meunNum = index;

				this.navActiveNum = index;
			}
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
							background-position: -150px -30px;
						}
					}
					&:nth-child(3) {
						i {
							background-position: -510px -30px;
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
				.active {
					background: #DDDCDC;
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