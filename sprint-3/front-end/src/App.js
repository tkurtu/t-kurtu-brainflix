import React, { Component } from 'react';
import './styles/index.css';
import Homepage from './Homepage';
import Upload from './components/Upload';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/homepage" component={Homepage} />
					<Route path="/upload" component={Upload} />
					<Route path="/videos/:id" component={Homepage} />
					<Route path="/videos" component={Homepage} />
				</Switch>
			</div>
		);
	}
}

export default App;
