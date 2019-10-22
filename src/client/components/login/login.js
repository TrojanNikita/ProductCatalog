import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import {connect} from 'react-redux';
import {userLoginFetch} from '../actions';

import './login.css';


class LogIn extends React.Component {

    state={
        login:'',
        password:''
    };

    handleChange = event => {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
}

    render() {

        const{currentUser}=this.props;

        //Если пользователь зашел, переводим его на главную(пока это продукты)
        if (currentUser.sid)
            return <Redirect to="/"/>;


        return (
            <form className="form-login">
                    <h2 className="form-login-head"> Please sign in </h2>
                    <input name='login' type="text" value={this.state.login}
                            onChange={this.handleChange}
                           id="inputLogin" className="form-login-input" placeholder="Login"/>
                    <input name='password' type="password" value={this.state.password}
                            onChange={this.handleChange}
                           id="inputPassword" className="form-login-input" placeholder="Password" />
                    <button onClick={this.handleSubmit} className="form-login-btn" type="button"> Log in
                    </button>
                    <Link to="/signup" className="form-login-btn">Sign Up</Link>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

const mapStateToProps=(state) =>{
  const currentUser = state.user.currentUser;
  return {
    currentUser
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
