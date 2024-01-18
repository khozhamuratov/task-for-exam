import { createSlice } from '@reduxjs/toolkit'

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
			state
		},
	},
})

export const { loginToPage } = authSlice.actions
export default authSlice.reducer
