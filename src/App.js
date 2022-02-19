/* import stylesheet */
import './styles.css';

/* import components */
import Header from './components/Header';
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
