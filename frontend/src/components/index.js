import React, { Component } from 'react'

class Page extends Component {

  componentDidMount() {
    this.props.pageActions.fetchData();
  }

  render() {
    return(
      hello
    )
  }
}

export default Page;
