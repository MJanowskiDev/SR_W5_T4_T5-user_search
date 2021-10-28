import './App.css';
import { Home, UserDetails } from './pages';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Redirect to="/users" />
					</Route>
					<Route path="/users" exact>
						<Home />
					</Route>
					<Route path="/user-profile/:id" exact>
						<UserDetails />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
