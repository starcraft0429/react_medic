import React from 'react';
import { Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';

import App from './App';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NotFound from './views/NotFound';

export default (
	<Route path="/" component={App}>
		<IndexRedirect to="Home" />
		<Route path="Home" component={Home} />
		<Route path="Dashboard/:category" component={Dashboard} />
		<Route path="404" component={NotFound} />
		<Redirect from="*" to="404" />
	</Route>
);

