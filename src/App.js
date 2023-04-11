import PhoneContainer from "./components/PhoneContainer";
import TvContainer from "./components/TvContainer";
import AdminContainer from "./components/AdminContainer";
import CommentsContainer from "./components/CommentsContainer";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<div className="section-one">
				<PhoneContainer />
				<TvContainer />
			</div>
			<AdminContainer />
			<CommentsContainer />
		</Provider>
	);
}

export default App;
