<template>
	<div class="head clearfix">
		<h2 class="l">易途8管理系统</h2>
		<div class="btn l">
			<el-button type="primary">导航</el-button>
			<el-button type="primary">订单管理</el-button>
		</div>
		<div class="right r">
			<!-- <el-input
			  class="search"
			  placeholder="会员切换"
			  icon="search"
			  v-model="input2"
			  :on-icon-click="handleIconClick">
			</el-input> -->
			<span class="user-name">当前会员：{{ phone }}</span>
			<el-button type="text">退出系统</el-button>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			input2:'',
			phone: 18654548962
		}
	},
	methods:{
		handleIconClick(){

		}
	}

}
</script>

<style lang="less" scoped>
	.head {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		min-width: 1000px;
		background: #262b36;
		height: 64px;
		line-height: 64px;
		h2 {
			color: #1395BB;
			line-height: 64px;
			background: #20242d;
			width: 210px;
			text-align: center;
		}
		.btn {
			margin-left: 15px;
		}
		.right {
			margin-right: 15px;
			.search {
				width: 230px;
			}
			.user-name {
				color: #ccc;
				margin: 0 20px 0 50px;
			}
		}

	}
</style>