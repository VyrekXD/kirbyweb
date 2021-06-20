import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Logo: React.FC<{
	imageSrc: string
	alt: string
	link: string
	text: string
}> = (props) => {
	return (
		<div className={'flex items-center my-2 mx-4'} data-aos='fade-right'>
			<Image
				src={props.imageSrc}
				alt={props.alt}
				height='50'
				width='50'
				className='rounded-full'
			/>

			<Link href={props.link}>
				<a
					className={
						'text-2xl font-bold text-red-light hover:underline hover:text-red-main px-3 font-primary_font'
					}
				>
					{props.text}
				</a>
			</Link>
		</div>
	)
}

export const NavbarLink: React.FC<{ text: string; link: string }> = (props) => {
	return (
		<Link href={props.link} data-aos='fade-left'>
			<a
				className={
					'text-2xl font-semibold rounded-lg px-3 md:px-6 font-primary_font text-red-light hover:text-red-main hover:underline'
				}
			>
				{props.text}
			</a>
		</Link>
	)
}
