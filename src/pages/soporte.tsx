import React from 'react'
import Head from 'next/head'
import Redirect from '../components/redirect'

const Soporte = () => (
	<React.Fragment>
		<Head>
			<meta
				content='El primer bot en español enfocado en starboards, unete a mi servidor de soporte!'
				property='og:description'
			/>
			<meta content='Kirby' property='og:site_name' />
			<meta content='/kirby_logo.png' property='og:image' />
			<meta property='og:locale' content='es_MX' />
		</Head>
		<Redirect url='https://discord.gg/gc2rRwVFUF' />
	</React.Fragment>
)

export default Soporte
