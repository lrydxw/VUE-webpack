<template>
	<div id="wrap">
		<page-head></page-head>
        <section id="main">
        	<div class="left-menu">
	        	<div class="tab clearfix">
	        		<span class="btn l" 
	        		:class="curMenu == 0 ?  active : ''"
	        		@click="menus"><i class="el-icon-more"></i></span>
	        		<span class="btn l"
	        		:class="curMenu == 1 ?  active : ''"
	        		@click="settings"><i class="el-icon-setting"></i></span>
	        		<span class="btn l"><i class="el-icon-minus"></i></span>
	        	</div>
        		<page-nav v-if='curMenu == 0'></page-nav>
        		<page-set v-if='curMenu == 1'></page-set>
        	</div>
        	<div class="content-box">
        		<page-tabs></page-tabs>
        		<router-view class="l content"></router-view>
        	</div>

			<!--  -->
        </section>
	</div>
</template>
<script>
	import PageHead from '../../components/page-head.vue'
	import PageNav from '../../components/page-nav.vue'
	import PageSet from '../../components/page-set.vue'
	import PageTabs from '../../components/page-tabs.vue'

	import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'

	export default {
		name: 'main',
		components:{
			'page-head': PageHead,
			'page-nav': PageNav,
			'page-set': PageSet,
			'page-tabs': PageTabs
		},
		data(){
			return {
				activeName2:'',
				active: 'active'
			}
		},
		methods:{
			handleClick(){

			},
			...mapMutations([
				"settings",
				"menus"
			]),
		},
		computed:{
			...mapState([		//数组方式,
				'curMenu',
			])
		}
		

	}
</script>
<style lang='less' scoped>
	#wrap {
		width: 100%;
		height: 100%;
		min-width: 1000px;
		#main{
			width: 100%;
			height: 100%;
			padding-top: 64px;
			box-sizing: border-box;
			position: relative;
			.left-menu {
				width: 210px;
				height: 100%;
				box-sizing: border-box;
				padding-top: 64px;
				position: absolute;
				top: 0;
				left: 0;
				.tab {
					position: absolute;
					top: 64px;
					left: 0;
					background: #667393;
					width: 210px;
					height: 40px;
					color: #fff;
					font-size: 16px;
					line-height: 40px;
					text-align: center;
					span {
						display: inline-block;
						width: 70px;
						margin: 0;
						cursor: pointer;
						&:hover {
							background: rgba(59,67,84,.8);
						}
					}
					.active {
						background: #3B4354;
					}
				}

			}
			.content-box {
		    	width: 100%;
		    	height: 100%;
		    	box-sizing: border-box;
		    	padding-left: 210px;
		    	overflow-y: scroll;
		    	.content {
		    		width: 100%;
		    		height: 800px;
		    		background: #fff;
		    	}
			}
		}
	}
	
	
</style>