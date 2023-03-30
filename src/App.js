import PhoneContainer from "./components/PhoneContainer";
import TvContainer from "./components/TvContainer";
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
			<CommentsContainer />
		</Provider>
	);
}

export default App;
