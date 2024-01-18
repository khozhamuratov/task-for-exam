import React from 'react'
import { IconType } from 'react-icons'

type Props = {
	title?: string
	price?: string
	procent?: string
	icon?: IconType
}

const Card = ({ title, price, procent, icon }: Props) => {
	return (
		<div className='flex items-start justify-between p-3 border rounded-md'>
			<div className='flex flex-col'>
				<h1 className='text-[14px] font-bold'>{title}</h1>
				<p className='text-[24px] text-nowrap font-[400]'>{price}</p>
				<p className='text-[12px] opacity-65'>{procent} from last month</p>
			</div>
			{icon && (
				<span className='text-[22px] opacity-65'>
					{React.createElement(icon)}
				</span>
			)}{' '}
		</div>
	)
}

export default Card
