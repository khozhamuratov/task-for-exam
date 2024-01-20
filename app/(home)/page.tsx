'use client'

import { toast } from '@/components/ui/use-toast'
import { RootState } from '@/store/store'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Header from './components/header/header'
import SidebarMenu from './components/sidebar/sidebar-menu'
import UserTable from './components/users-table/usersTable'

type Props = {}

export default function Page(props: Props) {
	const logined = useSelector((state: RootState) => state.auth.logined)
	const router = useRouter()

	if (logined) {
		router.push('/login')
	} else {
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
