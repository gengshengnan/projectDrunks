import {getUser,getAddressList} from '../service/getData'

import {GET_USERINFO,SAVE_ADDRESS} from './mutation-types.js'

//1.async与await一起使用，指等待await后面对象执行结束后再执行

//2.action负责commit给mutations，并传参数state,通过state取数据
export default {
	async getUserInfo({
		commit,
		state
	}) 
	{
		let res = await getUser();
		commit(GET_USERINFO, res)
	},

	async saveAddress({
		commit,
		state
	})
	 {
		if(state.removeAddress.length > 0) return;
		let addres = await getAddressList(state.userInfo.user_id);
		commit(SAVE_ADDRESS, addres);	
	},
}