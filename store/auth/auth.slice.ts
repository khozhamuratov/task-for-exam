import { createSlice } from '@reduxjs/toolkit'

interface IInitialStateType {
	logined: boolean
}

export const initialState: IInitialStateType = {
	logined: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginToPage: state => {
			state.logined = true
		},
	},
})

export const { loginToPage } = authSlice.actions
export default authSlice.reducer
