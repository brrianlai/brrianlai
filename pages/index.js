import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import Layout from '../components/layouts/Layout'
import Introduction from '../components/layouts/Introduction'
import Background from '../components/layouts/Background'
import FadeIn from '../components/FadeIn'

import { motion } from 'framer-motion'

const Contact = dynamic(() => import('../components/layouts/Contact'))
const Education = dynamic(() => import('../components/layouts/Education'))
const Projects = dynamic(() => import('../components/layouts/Projects'))
const WorkExperience = dynamic(() => import('../components/layouts/WorkExperience'))
const VolunteerExperience = dynamic(() => import('../components/layouts/VolunteerExperience'))
const Gallery = dynamic(() => import('../components/Gallery'))

import img3461 from '../public/gallery/IMG_3461.jpeg'
import img6432 from '../public/gallery/IMG_6432.jpg'
import img3060 from '../public/gallery/IMG_3060.jpg'
import img2675 from '../public/gallery/IMG_2675.jpeg'

import img0539 from '../public/gallery/IMG_0539.jpeg'
import img2455 from '../public/gallery/IMG_2455.jpeg'
import img2472 from '../public/gallery/IMG_2472.jpeg'
import img3994 from '../public/gallery/IMG_3994.jpeg'

function App() {
	return (
		<Layout>
			<Head>
				<title>Brian Lai</title>
			</Head>
			<motion.div
				animate='show'
				initial='hidden'
				variants={container}
			>
				<Introduction />
				<Background />
			</motion.div>
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
								src={img3461}
								sizes='50vw'
								quality='90'
								alt=''
							/>
							<Image
								src={img6432}
								sizes='50vw'
								quality='90'
								alt=''
							/>
							<Image
								src={img3060}
								sizes='50vw'
								quality='90'
								alt=''
							/>
							<Image
								src={img2675}
								sizes='50vw'
								quality='90'
								alt=''
							/>
						</Gallery>
					</div>
					<div className='column'>
						<Gallery>
							<Image
								src={img0539}
								sizes='50vw'
								quality='90'
								alt=''
							/>
							<Image
								src={img2455}
								sizes='50vw'
								quality='90'
								alt=''
							/>
							<Image
								src={img2472}
								sizes='50vw'
								quality='90'
								alt=''
							/>		
							<Image
								src={img3994}
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

const container = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.465, 0.183, 0.153, 0.946]
		}
	}
}


export default App
