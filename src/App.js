import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Login from "./pages/auth/Login";

function App() {
	return (
		<div className="App">
			<Header />
			<Product />
			<Footer />
		</div>
	);
}

export default App;
