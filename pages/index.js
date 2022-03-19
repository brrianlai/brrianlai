/* import sections */
import Layout from '../components/layouts/Layout'
import Introduction from '../components/layouts/Introduction'
import Background from '../components/layouts/Background'
import Skills from '../components/layouts/Skills'
import Bops from '../components/layouts/Bops'
import SectionTest from '../components/layouts/SectionTest'

function App() {
	return (
		<Layout>
			<Introduction />
			<Background />
			<Skills />
			<Bops />
			<SectionTest />
		</Layout>
	)
}

export default App
