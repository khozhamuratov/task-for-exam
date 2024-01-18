import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/auth.slice'

export const store = () =>
	configureStore({
		reducer: { auth: authReducer },
		devTools: process.env.NODE_ENV === 'development' ? true : false,
	})

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
