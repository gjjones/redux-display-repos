import fetch from 'isomorphic-fetch';

export const RECEIVE_REPOS = 'RECEIVE_REPOS';
function receiveRepos(repos) {
	return {
		type: RECEIVE_REPOS,
		repos: repos
	};
}

export function fetchRepos(user) {
	return function (dispatch) {
		return fetch('https://api.github.com/users/'+user+'/repos')
			.then(response => response.json())
			.then(data => dispatch(receiveRepos(data)));
	};
}