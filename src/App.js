/* import stylesheet */
import './styles.css'

/* import sections */
import Header from './sections/Header'
import Introduction from './sections/Introduction'
import Background from './sections/Background'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Bops from './sections/Bops'
import ButtonTest from './sections/ButtonTest'
import Gallery from './sections/Gallery'
import Footer from './sections/Footer'

function App() {
	return (
		<div>
			<Header />
			<Introduction />
			<Background />
			<Skills />
			<Bops />
			<Gallery />
			<Footer />
		</div>
	)
}

export default App
