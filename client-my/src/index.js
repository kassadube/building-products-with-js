// npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// our packages
import Home from './pages/home';
import App from './app'

ReactDOM.render(
 <Router history={browserHistory}>
    <Route path="/" component={App}>
     <IndexRoute component={Home} />
    </Route>

   </Router>
, document.getElementById('app'));
