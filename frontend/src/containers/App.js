import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../components'
import * as AuthActions from '../actions/AuthActions'
import * as PostActions from '../actions/PostsActions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <Page authActions = {this.props.authActions} postActions={this.props.postActions} post={this.props.post} auth={this.props.auth}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    post: state.post
  }
}


function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(AuthActions, dispatch),
    postActions: bindActionCreators(PostActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
