'use client'

import { toast } from '@/components/ui/use-toast'
import { loginToPage } from '@/store/auth/auth.slice'
import { RootState } from '@/store/store'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/header/header'
import SidebarMenu from './components/sidebar/sidebar-menu'
import UserTable from './components/users-table/usersTable'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const router = useRouter()
	const logined = useSelector((state: RootState) => state.auth.logined)
	const dispatch = useDispatch()

	if (logined) {
		dispatch(loginToPage())
		router.push('/login')
	} else if (!logined) {
		toast({
			variant: 'default',
			title: 'Welcome to Dashboard',
		})
	}
	return (
		<div>
			<Header />
			<div className='w-full p-4 flex gap-4 sm:flex-col lg:flex-row'>
				<SidebarMenu />
				<UserTable />
			</div>
		</div>
	)
}
