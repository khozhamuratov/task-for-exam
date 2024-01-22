import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { redirect } from 'next/navigation'

export default function AvatarBtn() {
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar className='cursor-pointer w-[30px] h-[30px]'>
						<AvatarImage src='https://github.com/shadcn.png' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuItem>
						<button onClick={redirect('/')}>Logout</button>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
