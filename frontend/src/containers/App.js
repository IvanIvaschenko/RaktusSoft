import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../components'
import * as PageActions from '../actions/PageActions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="App">
        <Page pageActions = {this.props.pageActions} page={this.props.page}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    page: state.page
  }
}


function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(PageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
