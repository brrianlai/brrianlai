/* import stylesheet */
import './styles.css';

/* import sections */
import Header from './sections/Header';
import Introduction from './sections/Introduction';
import Background from './sections/Background';
import Skills from './sections/Skills';
import Bops from './sections/Bops';
import ButtonTest from './sections/ButtonTest'
import Footer from './sections/Footer';

function App() {
	return (
		<div>
			<Header />
			<Introduction />
			<Background />
			<Skills />
			<Bops />
			<ButtonTest />
			<Footer />
		</div>
	);
}

export default App;
