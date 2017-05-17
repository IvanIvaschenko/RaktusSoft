import React, { Component } from 'react'
import Auth from './Auth'
import Post from './Post'

class Page extends Component {

  componentDidMount() {
    this.props.postActions.fetchData();
  }

  onClickLogOut(e){
    e.preventDefault();
    this.props.authActions.logout();
  }

  onClikShowForm(e){
    e.preventDefault();
    this.props.authActions.showForm();
  }



  render() {

  const login = <div onClick={this.onClikShowForm.bind(this)}><h3>Login</h3></div>
  const logout = <div onClick={this.onClickLogOut.bind(this)}><h3>Logout</h3></div>
    return(
      <div>
        <header>
          <h3>Concert list</h3>
          <div className='auth' >{this.props.auth.login ? logout : login}</div>
        </header>
        {this.props.post.deleteErr ? <h1 className='err'>DELETE ERROR</h1> : null}
        {this.props.post.updateErr ? <h1 className='err'>UPDATE ERROR</h1> : null}
        {this.props.post.error ? <h1 className='err'>Failed to retrieve data</h1> : null}
        {this.props.post.addPostErr ? <h1 className='err'>ADD POST ERROR</h1> : null}
        <Post post={this.props.post} auth={this.props.auth}  postActions={this.props.postActions}/>
        {this.props.auth.authIsVisible ? <Auth authActions={this.props.authActions} auth={this.props.auth}/> : null}
      </div>
    )
  }
}

export default Page;
