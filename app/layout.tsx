import ReduxProvider from '@/components/providers/redux-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './global.scss'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Example IT Solutions',
	description: 'IT Blogers for writing any posts and articles',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={montserrat.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
					storageKey='blog-theme'
				>
					<ReduxProvider>{children}</ReduxProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
