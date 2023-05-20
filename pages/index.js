import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import Layout from '../components/layouts/Layout'
import Introduction from '../components/layouts/Introduction'
import Background from '../components/layouts/Background'
import FadeIn from '../components/FadeIn'

const Contact = dynamic(() => import('../components/layouts/Contact'))
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
			<FadeIn>
				<Education />
				<Projects />
				<WorkExperience />
				<VolunteerExperience />
				<Contact />
				<section className='gallery'>
					<div className='column'>
						<Gallery>
							<Image
								src='/gallery/IMG_3461.jpeg'
								width='3024'
								height='4032'
								sizes='50vw'
								quality='90'
								alt=''
							/>
							<Image
								src='/gallery/IMG_6432.jpg'
								width='3798'
								height='2844'
								sizes='50vw'
								quality='90'
								alt=''
							/>
							<Image
								src='/gallery/IMG_3060.jpg'
								width='4024'
								height='3024'
								sizes='50vw'
								quality='90'
								alt=''
							/>
							<Image
								src='/gallery/IMG_2675.jpeg'
								width='3024'
								height='4032'
								sizes='50vw'
								quality='90'
								alt=''
							/>
						</Gallery>
					</div>
					<div className='column'>
						<Gallery>
							<Image
								src='/gallery/IMG_0539.jpeg'
								width='3798'
								height='2844'
								sizes='50vw'
								quality='90'
								alt=''
							/>
							<Image
								src='/gallery/IMG_2455.jpeg'
								width='3024'
								height='4032'
								sizes='50vw'
								quality='90'
								alt=''
							/>
							<Image
								src='/gallery/IMG_2472.jpeg'
								width='3024'
								height='4032'
								sizes='50vw'
								quality='90'
								alt=''
							/>		
							<Image
								src='/gallery/IMG_3994.jpeg'
								width='4024'
								height='3024'
								sizes='50vw'
								quality='90'
								alt=''
							/>
						</Gallery>
					</div>
				</section>
			</FadeIn>
		</Layout>
	)
}

export default App
