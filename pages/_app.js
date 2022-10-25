import '../styles/styles.css'
import 'remixicon/fonts/remixicon.css'

import Head from 'next/head'

export default function App({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<meta charSet='UTF-8' />
				<meta name='author' content='Brian Lai' />
				<meta name='description' content='Biology undergraduate student from UBC with an interest in web and app design' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Component {...pageProps } />
		</div>
	)
}