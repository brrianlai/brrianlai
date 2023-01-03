import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import Layout from '../components/layouts/Layout'
import Introduction from '../components/layouts/Introduction'
import Background from '../components/layouts/Background'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'

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
				<section className='gallery'>
					<Gallery>
						<Image
							src='/gallery/IMG_6077.jpeg'
							width='4024'
							height='3024'
							sizes='50vw'
							quality='90'
							alt=''
						/>
						<Image
							src='/gallery/IMG_20170628_200243.jpg'
							width='4048'
							height='3036'
							sizes='50vw'
							quality='90'
							alt=''
						/>
					</Gallery>
				</section>
				<Projects />
				<WorkExperience />
				<VolunteerExperience />
				<section className='background-dotted' data-align='center' data-size='large'>
					<h2>Let's connect</h2>
					<div className='row' data-gap='small' data-align='center'>
						<Button link='/brian-lai-resume-221024.pdf' shape='round' size='large' iconRight='ri-arrow-right-line'>View resume</Button>
						<Button link='mailto:laibrian@alum.ubc.ca' shape='round' size='large' iconLeft='ri-mail-line' background='light' outline='true'>Contact me</Button>
					</div>
				</section>
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
