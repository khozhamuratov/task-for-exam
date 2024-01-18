'use client'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { LuArrowUpRightFromCircle } from 'react-icons/lu'
import AvatarBtn from '../avatar/avatar-btn'
import ThemeToggler from '../theme-toggler/theme-toggler'

export default function Header() {
	const { theme, setTheme } = useTheme()
	return (
		<div
			className={`z-10 w-full border-b sticky top-0 ${
				theme === 'light' ? 'bg-white' : ' bg-neutral-950'
			}`}
		>
			<div className='flex items-center w-[90%] justify-between py-5 mx-auto'>
				<Link
					href={'/'}
					className='flex items-center justify-center gap-4 text-xl font-bold'
				>
					<LuArrowUpRightFromCircle className='text-[25px]' />
					<h1>Example IT Solutions</h1>
				</Link>
				<div className='flex items-center gap-8 justify-center'>
					<ul className='sm:hidden md:flex items-center justify-center gap-3 text-lg'>
						<li>
							<Link href={'/'}>Home</Link>
						</li>
						<li>
							<Link href={'/'}>Services</Link>
						</li>
						<li>
							<Link href={'/'}>Pricing</Link>
						</li>
					</ul>
					<ThemeToggler />
					<AvatarBtn />
				</div>
			</div>
		</div>
	)
}
