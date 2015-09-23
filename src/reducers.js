import { RECEIVE_REPOS } from './actions';

const initialState = {
	repos: []
};

export default function todoApp(state = initialState, action) {
	switch (action.type) {
	case RECEIVE_REPOS:
		return Object.assign({}, state, {
			repos: action.repos
		});
	default:
		return state;
	}
}
