'use client'

import { Button } from '@/components/ui/button'
import { LuArrowUpRightFromCircle } from 'react-icons/lu'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { loginToPage } from '@/store/auth/auth.slice'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
export default function Login() {
	const dispatch = useDispatch()
	const router = useRouter()
	const [showPassword, setShowPassword] = useState(false)
	const [password, setPassword] = useState('')
	function handleLogin() {
		const correctPassword = 'Oybek'

		if (password === correctPassword) {
			dispatch(loginToPage())
			router.push('/')
		} else {
			alert('Incorrect password. Please try again.')
		}
	}
	return (
		<div className='relative flex flex-col justify-center items-center min-h-screen overflow-hidden'>
			<div className='m-auto sm:w-[90%] md:w-[400px]'>
				<Card>
					<CardHeader className='space-y-1'>
						<CardTitle className='text-2xl flex items-center justify-center gap-3 text-center'>
							<LuArrowUpRightFromCircle />
							Example IT Solutions
						</CardTitle>
					</CardHeader>
					<CardContent className='grid gap-4'>
						<form
							onSubmit={e => {
								e.preventDefault()
								handleLogin()
							}}
							className='grid grid-cols-1 grid-rows-3'
						>
							<Input
								value={password}
								onChange={e => setPassword(e.target.value)}
								id='password'
								className='text-[14px]'
								placeholder='Enter password:'
								type={showPassword ? 'text' : 'password'}
							/>
							<label className='flex cursor-pointer items-center space-x-2'>
								<Checkbox
									id='terms'
									onClick={() => setShowPassword(!showPassword)}
								/>
								<span className='text-[12px] font-semibold opacity-65 peer-disabled:opacity-70'>
									Show password?
								</span>
							</label>
							<Button onClick={() => handleLogin()} className='w-full'>
								Login
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
