import axios from 'axios'
import { create } from 'zustand'

export const useTodoAsynch = create((set, get) => ({
	data: [],
	getCategory: async () => {
		try {
			const { data } = await axios.get(
				'https://to-dos-api.softclub.tj/api/categories'
			)
			set(() => ({ data: data.data }))
		} catch (error) {
			console.log(error)
		}
	},
	deletCategory: async id => {
		try {
			await axios.delete(
				`https://to-dos-api.softclub.tj/api/categories?id=${id}`
			)
			get().getCategory()
		} catch (error) {
			console.log(error)
		}
	},
	addCategory: async (user) => {
		try {
			await axios.post('https://to-dos-api.softclub.tj/api/categories',user)

			get().getCategory()
		} catch (error) {
			console.log(error)
		}
	},
	editCategory: async user => {
		try {
			await axios.put('https://to-dos-api.softclub.tj/api/categories', user)
			get().getCategory()
		} catch (error) {
			console.log(error)
		}
	},
	addName: '',
	editName:'',
	idx:null,
	setAddName: e => set(state => ({ addName: (state.addName = e) })),
	setEditName: e => set(state => ({ editName: (state.editName = e) })),
	setIdx: e => set(state => ({ idx: (state.idx = e) })),
}))
