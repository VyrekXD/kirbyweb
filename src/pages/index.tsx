import React from 'react'
import Head from 'next/head'

import Header from '../components/home/index'

export default function Home() {
	return (
		<div className={'flex justify-center text-center bg-pink-main full'}>
			<Head>
				<meta name='theme-color' content='#000000' />
				<meta name='msapplication-TileColor' content='#fc9c9c' />
				<meta content='Kirby - Bot de Starboards' property='og:title' />
				<meta
					content='El primer bot en español enfocado en starboards, un sistema de pins democraticos'
					property='og:description'
				/>
				<meta content='Kirby' property='og:site_name' />
				<meta
					content='https://vyrek.please-fuck.me/rXcQNB.png'
					property='og:image'
				/>
				<meta property='og:locale' content='es_MX' />
			</Head>

			<Header />
		</div>
	)
}
