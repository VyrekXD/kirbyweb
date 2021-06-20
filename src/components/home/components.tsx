import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Logo: React.FC<{
	imageSrc: string
	alt: string
}> = (props) => {
	return (
		<div className='rounded-full my-10 border-8 border-pink-min_dark shadow-2xl md:block h-64 w-64'>
			<Image
				src={props.imageSrc}
				alt={props.alt}
				width={250}
				height={250}
				className='rounded-full'
			/>
		</div>
	)
}

export const HomeButton: React.FC<{
	link: string
}> = (props) => {
	return (
		<Link href={props.link} passHref>
			<button className={'custom_button color'} type='button'>
				{props.children}
			</button>
		</Link>
	)
}
