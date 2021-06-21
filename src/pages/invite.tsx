import React from 'react'
import Head from 'next/head'
import Redirect from '../components/redirect'

const Invite = () => (
	<React.Fragment>
		<Head>
			<meta
				content='El primer bot en español enfocado en starboards, invitame a tu servidor!'
				property='og:description'
			/>
			<meta content='Kirby' property='og:site_name' />
			<meta content='/kirby_logo.png' property='og:image' />
			<meta property='og:locale' content='es_MX' />
		</Head>
		<Redirect url='https://discord.com/api/oauth2/authorize?client_id=770308348766584883&permissions=388160&scope=bot%20applications.commands' />
	</React.Fragment>
)

export default Invite
