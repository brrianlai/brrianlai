/* import stylesheet */
import './styles.css';

/* import components */
import Header from './components/Header';
import Social from './components/Social';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Bops from './components/Bops';
import Footer from './components/Footer';


function App() {
	return (
		<div>
			<Header />
			<Introduction />
			<Projects />
			<Bops />
			<Footer />
		</div>
	);
}

export default App;
