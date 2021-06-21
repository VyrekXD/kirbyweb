import { NavbarLink, Logo } from './components'

export default function Navbar() {
	return (
		<nav className='w-full h-20 bg-pink-main items-center mx-auto'>
			<div className='flex justify-between lg:items-center flex-col md:flex-row'>
				<Logo
					imageSrc='/kirby_logo.png'
					alt='Kirby Logo'
					link='/'
					text='Kirby'
				/>
				<div className='flex items-center text-base md:text-lg p-2'>
					<NavbarLink text='Comandos' link='/comandos' />
					<NavbarLink text='Guia' link='/guia' />
					<NavbarLink text='Inicio' link='/' />
				</div>
			</div>
		</nav>
	)
}
