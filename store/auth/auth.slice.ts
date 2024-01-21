'use client'
import { createSlice } from '@reduxjs/toolkit'
import { useRouter } from 'next/navigation'

interface IInitialStateType {
	logined: boolean
}

export const initialState: IInitialStateType = {
	logined: true,
}

const router = useRouter()

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginToPage: state => {
			state.logined = false
			router.push('/login')
		},
	},
})

export const { loginToPage } = authSlice.actions
export default authSlice.reducer
