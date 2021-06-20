import React from 'react'

import { HomeButton, Logo } from './components'

export default function Home() {
	return (
		<header className='flex-col'>
			<div className='flex flex-col my-auto'>
				<div data-aos='fade-down'>
					<div className='flex items-center justify-center'>
						<Logo
							imageSrc='/kirby_logo.png'
							alt='Kirby Logo Full Size'
						/>
					</div>

					<p className='font-primary_font text-5xl font-bold text-red-light'>
						Kirby
					</p>
				</div>

				<p className='font-secondary_font text-3xl italic font-semibold mt-5 text-red-lightest'>
					Kirby es el primer bot en español <br /> enfocado en
					&quot;starboard&quot;
				</p>

				<div className='flex flex-row justify-between mt-6'>
					<HomeButton link='/soporte'>Servidor de Soporte</HomeButton>
					<HomeButton link='/invite'>Invitame</HomeButton>
				</div>
			</div>
		</header>
	)
}
