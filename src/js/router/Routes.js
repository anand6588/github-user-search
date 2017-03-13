import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from '../component/Home.jsx';
import SearchResult from '../containers/SearchContainer';
import User from '../containers/User.js';

// Define routes
export default (
		<Route path="/">
			<IndexRoute component={Home} />
			<Route path="search/:query" component={SearchResult}></Route>
			<Route path="user/:tab/:id" component={User}></Route>
		</Route>
);