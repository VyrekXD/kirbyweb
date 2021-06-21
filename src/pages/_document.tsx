import React from 'react'

import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from 'next/document'

class KirbyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta name='theme-color' content='#fc9c9c' />
					<meta
						content='Kirby - Bot de Starboards'
						property='og:title'
					/>

					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=PT+Sans:ital@1&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default KirbyDocument
