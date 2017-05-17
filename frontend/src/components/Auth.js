import React, { Component } from 'react'

class Auth extends Component {
  onClickCloseForm(e){
    e.preventDefault();
    this.refs.form.classList.add('fadeInUp');
    this.props.authActions.closeForm();
  }

  onClikAuth(e){
    e.preventDefault();
    let pass = this.refs.password.value,
    username = this.refs.username.value,
    obj={
      username: username,
      password: pass
    }
    if(pass.length > 3 && username.length > 3){
      return  this.props.authActions.logIn(obj)
    }

    return this.props.authActions.loginErr();
  }

  render() {
    return(

  <div ref='form' className='login fadeInDown'>
    <h1><strong>Welcome.</strong> Please login.</h1>
    <h1 onClick={this.onClickCloseForm.bind(this)}><span className='close-btn'>X</span></h1>
    <form>
        <input ref='username' style={{ border: this.props.auth.loginError ? '2px solid #e74c3c' : 'none'}}
         type='text' placeholder='username' />
        <input ref='password' style={{ border: this.props.auth.loginError ? '2px solid #e74c3c' : 'none'}}
         type='password' placeholder='password'/>
        <button className='send-btn' onClick={this.onClikAuth.bind(this)}>login</button>
    </form>
  </div>
  )
 }
}

export default Auth;
