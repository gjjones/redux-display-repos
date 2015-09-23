import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';
import { fetchRepos } from './actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(todoApp, initialState);

	return store;
}
