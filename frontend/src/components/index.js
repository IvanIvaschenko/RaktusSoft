import React, { Component } from 'react'

class Page extends Component {

  componentDidMount() {
    this.props.pageActions.fetchData();
  }

  render() {
    console.log(this.props.page.data);
    const posts = this.props.page.data.map((item, index)=>{
      return(
      <div key={index}>
        <h1>{item.artist}</h1>
        <h2>{item.concertPlace}</h2>
        <h2>{item.perfomansRecords}</h2>
      </div>
    )
    }
  )
  console.log(posts);
    return(
      <div>
        <p>{this.props.page.error ? 'err' : 'nonerror'}</p>
        {posts}
      </div>
    )
  }
}

export default Page;
