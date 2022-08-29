import Navbar from './Navbar';
import Footer from './Footer';
import 'normalize.css';
import '../styles/globals.css';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
