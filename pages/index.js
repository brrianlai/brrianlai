/* import sections */
import Layout from '../components/layouts/Layout'
import Introduction from '../components/layouts/Introduction'
import Background from '../components/layouts/Background'
import Education from '../components/layouts/Education'
import WorkExperience from '../components/layouts/WorkExperience'
import VolunteerExperience from '../components/layouts/VolunteerExperience'
import Courses from '../components/layouts/Courses'
import Skills from '../components/layouts/Skills'
import Bops from '../components/layouts/Bops'
import SectionTest from '../components/layouts/SectionTest'

function App() {
	return (
		<Layout>
			<Introduction />
			<Background />
			<Education />
			<WorkExperience />
			<VolunteerExperience />
			<Courses />
			<Skills />
			<Bops />
		</Layout>
	)
}

export default App
