import axios from 'axios'
import { data } from 'react-router'
import { create } from 'zustand'

export const useTodoSinch = create(set => ({
	data: [
		{
			id: '1',
			name: 'Parviz',
			age: '20',
			status: false,
		},
		{
			id: '2',
			name: 'Ali',
			age: '30',
			status: true,
		},
		{
			id: '3',
			name: 'Amin',
			age: '26',
			status: false,
		},
		{
			id: '4',
			name: 'Sadaf',
			age: '24',
			status: false,
		},
		{
			id: '5',
			name: 'Messi',
			age: '238',
			status: true,
		},
	],
	openAdd: false,
	addName: '',
	addAge: '',
	addStatus: false,
	editName: '',
	editAge: '',
	editStatus: false,
	openEdit: false,
	idx: null,
	setOpenAdd: e => set(state => ({ openAdd: (state.openAdd = e) })),
	deletUser: id =>
		set(state => ({ data: state.data.filter(el => el.id != id) })),
	addUser: user => set(state => ({ data: [...state.data, user] })),
	setAddName: e => set(state => ({ addName: (state.addName = e) })),
	setAddAge: e => set(state => ({ addAge: (state.addAge = e) })),
	setAddStatus: e => set(state => ({ addStatus: (state.addStatus = e) })),
	setEditAge: e => set(state => ({ editAge: (state.editAge = e) })),
	setEditName: e => set(state => ({ editName: (state.editName = e) })),
	setOpenEdit: e => set(state => ({ openEdit: (state.openEdit = e) })),
	setEditStatus: e => set(state => ({ editStatus: (state.editStatus = e) })),
	setIdx: e => set(state => ({ idx: (state.idx = e) })),
	editUser: user =>
		set(state => ({
			data: state.data.map(el => (el.id == user.id ? user : el)),
		})),
}))
