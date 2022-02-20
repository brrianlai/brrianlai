/* import stylesheet */
import './styles.css';

/* import sections */
import Header from './sections/Header';
import Introduction from './sections/Introduction';
import Skills from './sections/Skills';
import Bops from './sections/Bops';
import ButtonTest from './sections/ButtonTest'
import Footer from './sections/Footer';

/* import images */
import background from './assets/background.jpg';

function App() {
	return (
		<div>
			<Header />
			<Introduction />
			<img src={background} />
			<Skills />
			<Bops />
			<ButtonTest />
			<Footer />
		</div>
	);
}

export default App;
