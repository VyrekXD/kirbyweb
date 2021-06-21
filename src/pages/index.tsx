import React from 'react'
import Head from 'next/head'

import Header from '../components/home/index'

export default function Home() {
	return (
		<div className={'flex justify-center text-center bg-pink-main full'}>
			<Head>
				<meta
					content='El primer bot en español enfocado en starboards, un sistema de pins democraticos'
					property='og:description'
				/>
				<meta content='Kirby' property='og:site_name' />
				<meta content='/kirby_logo.png' property='og:image' />
				<meta property='og:locale' content='es_MX' />
			</Head>

			<Header />
		</div>
	)
}
