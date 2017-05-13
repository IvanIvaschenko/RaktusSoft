import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../componets'
import * as PageActions from '../actions/PageActions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return <div className="App">
        <Page pageActions = {this.props.pageActions}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,

  }
}


function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
