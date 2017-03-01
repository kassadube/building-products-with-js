// npm packages
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';

// our packages
import Home from './pages/home';
import NotFound from './pages/notFound';
import App from './app';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));
