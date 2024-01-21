import { redirect } from 'next/navigation'

type Props = {}

function Page({}: Props) {
	redirect('/login')
	return <div>Page</div>
}

export default Page
