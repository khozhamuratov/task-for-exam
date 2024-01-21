import { redirect } from 'next/navigation'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	redirect('/login')
	return <div>{children}</div>
}
