import { Input } from '@/components/ui/input'

type Props = {}

export const SidebarMenu = (props: Props) => {
	return (
		<div className='lg:w-[340px] sm:w-full p-4 h-[80vh] border rounded-lg'>
			<form>
				<Input placeholder='Search...' />
			</form>
			<div className='py-4 flex flex-col gap-2'>
				<div className='p-2 w-full border rounded-md flex items-center justify-between'>
					<div className='flex items-center justify-center gap-3'>
						<img
							className='w-[30px] h-[30px] rounded-full'
							src='https://picsum.photos/300'
						/>
						<div className='flex flex-col justify-center gap-1'>
							<h4 className='text-[14px]'>John Doe</h4>
							<p className='text-[12px] opacity-65'>johndoe@gmail.com</p>
						</div>
					</div>
					<span>+156</span>
				</div>
				<div className='p-2 w-full border rounded-md flex items-center justify-between'>
					<div className='flex items-center justify-center gap-3'>
						<img
							className='w-[30px] h-[30px] rounded-full'
							src='https://picsum.photos/200'
						/>
						<div className='flex flex-col justify-center gap-1'>
							<h4 className='text-[14px]'>Nurman Khojamuratov</h4>
							<p className='text-[12px] opacity-65'>khozhamuratov@gmail.com</p>
						</div>
					</div>
					<span>+122</span>
				</div>
				<div className='p-2 w-full border rounded-md flex items-center justify-between'>
					<div className='flex items-center justify-center gap-3'>
						<img
							className='w-[30px] h-[30px] rounded-full'
							src='https://picsum.photos/500'
						/>
						<div className='flex flex-col justify-center gap-1'>
							<h4 className='text-[14px]'>Mark Twain</h4>
							<p className='text-[12px] opacity-65'>twanmark@email.com</p>
						</div>
					</div>
					<span>+88</span>
				</div>
			</div>
		</div>
	)
}

export default SidebarMenu
