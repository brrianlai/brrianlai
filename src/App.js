/* import stylesheet */
import './styles.css';

/* import components */
import Header from './components/Header';
import Introduction from './components/Introduction';
import Bops from './components/Bops';
import Footer from './components/Footer';


function App() {
	return (
		<div>
			<Header />
			<Introduction />
			<Bops />
			<Footer />
		</div>
	);
}

export default App;
