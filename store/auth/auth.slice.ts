import { createSlice } from '@reduxjs/toolkit'
import { redirect } from 'next/navigation'

interface IInitialStateType {
	logined: boolean
}

export const initialState: IInitialStateType = {
	logined: true,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginToPage: state => {
			state.logined = false
			redirect('/login')
		},
	},
})

export const { loginToPage } = authSlice.actions
export default authSlice.reducer
