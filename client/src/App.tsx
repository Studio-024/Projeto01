import './css/App.css';
import Dashboard from './pages/Dashboard';
import {Switch, Route} from "react-router-dom";
import Login from './pages/Login';
import Registry from './pages/Registry';

const App = () => {
	return(
		<>
		<Switch>
			<Route path="/Dashboard">
				<Dashboard/>
			</Route>		
			<Route path="/login">
				<Login/>
			</Route>
			<Route path="/registry">
				<Registry/>
			</Route>
		</Switch>
		</>
	)
}

export default App;