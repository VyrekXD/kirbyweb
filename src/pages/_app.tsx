import type { AppProps } from 'next/app'
import { useEffect, Fragment } from 'react'
import AOS from 'aos'
import '../styles/tailwind.css'

import Head from 'next/head'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			useClassNames: true,
			disable: 'mobile',
			easing: 'ease-in',
			offset: 200,
			duration: 700
		})
	})

	return (
		<Fragment>
			<Head>
				<title>Kirby - Bot de Starboards</title>
				<link
					href='https://unpkg.com/aos@2.3.1/dist/aos.css'
					rel='stylesheet'
				/>
				<link rel='icon' href='/kirby_logo.png' />
			</Head>

			<Navbar />
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp
