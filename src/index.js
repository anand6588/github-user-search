import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import Routes from './js/router/Routes.js'
import ConfigureStore from './js/store/ConfigureStore'
import './css/index.css';

const store		=	ConfigureStore();

ReactDOM.render(
				<Provider store={store}>
					<Router history={browserHistory} routes={Routes} />
				</Provider>
	 			, document.getElementById( 'root' ) );