import "./App.css";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/index";

function App() {
	console.log(process.env.REACT_APP_ACCESS_TOKEN_KEY);
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
