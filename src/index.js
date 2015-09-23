import 'babel-core/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import RepoList from './RepoList';

import configureStore from './store';
import { fetchRepos } from './actions';

const store = configureStore();
store.dispatch(fetchRepos('gjjones'));

React.render(
  <Provider store={store}>
  	{() => <RepoList />}
  </Provider>,
  document.getElementById('root')
);
