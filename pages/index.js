/* imports */
import Layout from '../components/layouts/Layout'
import Introduction from '../components/layouts/Introduction'
import Background from '../components/layouts/Background'
import Education from '../components/layouts/Education'
import WorkExperience from '../components/layouts/WorkExperience'
import VolunteerExperience from '../components/layouts/VolunteerExperience'
import Courses from '../components/layouts/Courses'
import Skills from '../components/layouts/Skills'
import Bops from '../components/layouts/Bops'
import Gallery from '../components/Gallery'
import Image from 'next/image'
import Button from '../components/Button'

function App() {
	return (
		<Layout>
			<Introduction />
			<Background />
			<Education />
			<Gallery>
				<Image
					src='/IMG_6077.jpeg'
					width='4032'
					height='3024'
				/>
				<Image
					src='/IMG_20170628_200243.jpg'
					width='4048'
					height='3036'
				/>
			</Gallery>
			<WorkExperience />
			<VolunteerExperience />
			<section data-layout='center'>
				<h1>Check out my photos</h1>
				<Button link='https://vsco.co/brrian' size='large' shape='round' iconRight='ri-arrow-right-line'>VSCO</Button>
			</section>
			<Gallery>
				<Image
					src='/IMG_6432.jpg'
					width='4032'
					height='3024'
				/>
				<Image
					src='/IMG_8977.jpeg'
					width='3690'
					height='2768'
				/>
				<Image
					src='/IMG_3994.jpeg'
					width='4032'
					height='3024'
				/>
			</Gallery>
			<Courses />
			<Skills />
			<Bops />
		</Layout>
	)
}

export default App
