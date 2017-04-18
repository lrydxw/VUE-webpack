import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import router from '../router'

var state = {		//状态对象
	curMenu: 0,
	editableTabsValue: '1',
	editableTabs: [{
		  	title: '首页',
		  	name: '1',
		  	id: 0,
		  	router:'/',

		}],
	tabIndex: 1,
	maxTotal: 6
}

const mutations = {		//触发状态的方法，同步
	settings(state){
		state.curMenu = 1
	},
	menus(state){
		state.curMenu = 0
	},
	addTab(state,item) {
		let ok = true;
		let total = state.editableTabs.length;
		if(total >= state.maxTotal){
			alert("您打开的页面太多了,请先关闭几个")
		}else{
			//判断是否已经打开
			state.editableTabs.forEach(function (obj,i){
				if(obj.id == item.id){
					ok = false;
					state.editableTabsValue = i+1+''
					router.push(item.path)
					return;
				}
			})

			//未打开
			if(ok){
				let newTabName = ++ state.tabIndex + '';
				state.editableTabs.push({
				  	title: item.name,
				  	name: newTabName,
				  	content: 'New Tab content',
				  	id: item.id,
				  	router: item.path
				});
				state.editableTabsValue = newTabName;
				router.push(item.path)
			}
		}
    },
    removeTab(state,targetName) {
      	let tabs = state.editableTabs;	//tabs所有数据
      	let activeName = state.editableTabsValue;	//当前tabnum
   		
      	if (activeName === targetName) {
        	tabs.forEach((tab, index) => {
	          	if (tab.name === targetName) {
	            	let nextTab = tabs[index + 1] || tabs[index - 1];
	        		if (nextTab) {
	          			activeName = nextTab.name;
	       	 		}		
	          	}		
        	});		
    	}
    	state.editableTabsValue = activeName;
    	state.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }

}

const getters = {	//计算state
	
}

const actions = {	//异步触发状态
	
}

const moduleA = {
	state,
    mutations,
    getters,
    actions
}

export default new Vuex.Store({
	state,
    mutations,
    getters,
    actions
})