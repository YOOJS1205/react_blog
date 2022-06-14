import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Post from './pages/post/Post';
import './styles/reset.css';
import './styles/global.css';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/post-view' exact component={Post} />
			</Switch>
		</BrowserRouter>
	)
}

export default App;