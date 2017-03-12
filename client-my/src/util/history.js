import { browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from '../store';

// create history that syncs with the store
export const history = syncHistoryWithStore(browserHistory, store);
