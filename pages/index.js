/* import sections */
import Layout from '../components/layouts/Layout'
import Introduction from '../components/layouts/Introduction'
import Background from '../components/layouts/Background'
import Skills from '../components/layouts/Skills'
import Bops from '../components/layouts/Bops'
import ButtonTest from '../components/layouts/ButtonTest'

function App() {
	return (
		<Layout>
			<Introduction />
			<Background />
			<Skills />
			<Bops />
			<ButtonTest />
		</Layout>
	)
}

export default App
