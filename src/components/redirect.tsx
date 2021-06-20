import { useEffect } from 'react'

const Redirect = (props: { url: string }) => {
	useEffect(() => {
		window.location.href = props.url
	})

	return (
		<div className={'mt-7 text-center items-center'}>
			<p className='text-3xl'>Redireccionando...</p>
		</div>
	)
}

export default Redirect
