import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" />
				<link rel="preconnect" href="https://cdn.jsdelivr.net/" />
				<link rel="preconnect" href="https://cdn.jsdelivr.net/" crossorigin />
				<link rel="preload" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" as="style" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document