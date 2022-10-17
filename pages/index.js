import Head from 'next/head'
import Image from 'next/future/image'
import dynamic from 'next/dynamic'

import Layout from '../components/layouts/Layout'
import Introduction from '../components/layouts/Introduction'
import Background from '../components/layouts/Background'
import Button from '../components/Button'
import Fade from '../components/Fade'

const Education = dynamic(() => import('../components/layouts/Education'))
const Projects = dynamic(() => import('../components/layouts/Projects'))
const WorkExperience = dynamic(() => import('../components/layouts/WorkExperience'))
const VolunteerExperience = dynamic(() => import('../components/layouts/VolunteerExperience'))
const Gallery = dynamic(() => import('../components/Gallery'))

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
						width='4024'
						height='3024'
						sizes='50vw'
						alt=''
					/>
					<Image
						src='/IMG_20170628_200243.jpg'
						width='4048'
						height='3036'
						sizes='50vw'
						alt=''
					/>
				</Gallery>
				<Projects />
				<WorkExperience />
				<VolunteerExperience />
				<section data-layout='center'>
					<h2>More photos</h2>
					<Button link='https://vsco.co/brrian' size='large' shape='round' iconRight='ri-arrow-right-line'>VSCO</Button>
				</section>
				<Gallery>
					<Image
						src='/IMG_6432.jpg'
						width='3798'
						height='2844'
						sizes='33vw'
						alt=''
					/>
					<Image
						src='/IMG_3060.jpg'
						width='4024'
						height='3024'
						sizes='33vw'
						alt=''
					/>
					<Image
						src='/IMG_3994.jpeg'
						width='4024'
						height='3024'
						sizes='33vw'
						alt=''
					/>
				</Gallery>
			</Fade>
		</Layout>
	)
}

export default App
