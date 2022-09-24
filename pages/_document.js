import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />
			</Head>
			<body>
				<Main />
				<NextScript />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" />
			</body>
		</Html>
	)
}

export default Document