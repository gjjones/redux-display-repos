import React, { Component } from 'react';
import { connect } from 'react-redux';

class RepoList extends Component {
  render () {
    return (
      <ul>
        {this.props.repos.map((repo, i) =>
          <li key={i}>{repo.full_name}</li>
        )}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { repos: state.repos };
}
export default connect(mapStateToProps)(RepoList);