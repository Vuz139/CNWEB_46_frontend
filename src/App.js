import "./App.css";
<<<<<<< HEAD
import "./assets/CSS/order.css";
=======
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/index";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
