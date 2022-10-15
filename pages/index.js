/* import layouts */
import Layout from '../components/layouts/Layout'
import Introduction from '../components/layouts/Introduction'
import Background from '../components/layouts/Background'
import Education from '../components/layouts/Education'
import Projects from '../components/layouts/Projects'
import WorkExperience from '../components/layouts/WorkExperience'
import VolunteerExperience from '../components/layouts/VolunteerExperience'
import Bops from '../components/layouts/Bops'

/* import components */
import Gallery from '../components/Gallery'
import Button from '../components/Button'
import Fade from '../components/Fade'

import Head from 'next/head'
import Image from 'next/future/image'

function App() {
	return (
		<Layout>
			<Head>
				<title>Brian Lai - UBC Biology undergraduate student</title>
			</Head>
			<Introduction />
			<Background />
			<Fade>
				<Education />
				<Gallery>
					<Image
						src='/IMG_6077.jpeg'
						width="4024"
						height="3024"
						sizes="50vw"
					/>
					<Image
						src='/IMG_20170628_200243.jpg'
						width="4048"
						height="3036"
						sizes="50vw"
					/>
				</Gallery>
				<Projects />
				<WorkExperience />
				<VolunteerExperience />
				<section data-layout='center'>
					<h2>Check out my photos</h2>
					<Button link='https://vsco.co/brrian' size='large' shape='round' iconRight='ri-arrow-right-line'>VSCO</Button>
				</section>
				<Gallery>
					<Image
						src='/IMG_6432.jpg'
						width="3798"
						height="2844"
						sizes="33vw"
					/>
					<Image
						src='/IMG_3060.jpg'
						width="4024"
						height="3024"
						sizes="33vw"
					/>
					<Image
						src='/IMG_3994.jpeg'
						width="4024"
						height="3024"
						sizes="33vw"
					/>
				</Gallery>
				<Bops />
			</Fade>
		</Layout>
	)
}

export default App
