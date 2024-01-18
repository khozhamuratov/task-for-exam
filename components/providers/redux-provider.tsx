'use client'

import { LayoutProps } from '@/.next/types/app/layout'
import { store } from '@/store/store'
import { Provider } from 'react-redux'

export default function ReduxProvider({ children }: LayoutProps) {
	return <Provider store={store()}>{children}</Provider>
}
