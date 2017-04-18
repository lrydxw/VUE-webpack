<template>
	<div class="tabs">
		<!-- <div style="margin-bottom: 20px;">
		  <el-button
		    size="small"
		    @click="addTab(editableTabsValue2)"
		  >
		    add tab
		  </el-button> 
		</div>-->
		<el-tabs 
        v-model="editableTabsValue" 
        type="card" closable 
        @tab-remove="removeTab"
        @tab-click="routeTo">
		  <el-tab-pane
		    v-for="(item, index) in editableTabs"
		    :label="item.title"
		    :name="item.name"
            :data-route= "item.router"
		  >
		  </el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
  import { mapState,mapMutations } from 'vuex'
  export default {
    data() {
        return {
            
        }
    },
    methods: {
        ...mapMutations([
            'addTab',
            'removeTab'
        ]),
        routeTo(targetName){
            let route = targetName.$el.dataset.route;
            this.$router.push(route)
        }
    },
    computed:{
        ...mapState([   //数组方式,
          'editableTabsValue',
          'editableTabs',
          'tabIndex'
        ])
    }
  }
</script>
<style lang="less" scoped>
	.tabs {
		background: #fff;
		padding: 10px 10px 0 10px;
        .el-tabs__header  {
            margin:0;
        }
        
	}
</style>