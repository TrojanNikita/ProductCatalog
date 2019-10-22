import React from 'react';
import { Redirect } from 'react-router-dom';

import {connect} from 'react-redux';
import {userPostFetch} from '../actions';


import  './signup.css';




class SignUp extends React.Component {


  state={
      login:'',
      password:'',
      passwordAgain:''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userPostFetch(this.state);
};



  render() {

      const{currentUser}=this.props;

      //Если пользователь зашел, переводим его на главную(пока это продукты)
      if (currentUser.sid)
          return <Redirect to="/"/>;


      return (
        <form className="form-signup">
                <h2 className="form-signup-head"> Sign up </h2>
                <div className="form-signup-div">
                    <label for="inputLogin" className="form-signup-login"> Login **
                    </label>
                    <input  name='login'
                            type="text" value={this.state.login}
                            onChange={this.handleChange}
                           id="inputLogin" className="form-signup-input"
                           placeholder="Login*"/>
                </div>
                <div className="form-signup-div">
                    <label for="inputPassword" className="form-signup-passward"> Password **</label>
                    <input name='password'
                            type="password" value={this.state.password}
                            onChange={this.handleChange}
                           id="inputPassword" className="form-signup-input"
                           placeholder="Password*"/>
                </div>
                <div className="form-signup-div">
                    <label for="inputPasswordAgain" className="form-signup-passward"> Password Again **</label>
                    <input name='passwordAgain'
                            type="password" value={this.state.passwordAgain}
                            onChange={this.handleChange}
                           id="inputPasswordAgain" className="form-signup-input"
                            placeholder="Password Again*"/>
                </div>
                <button onClick={this.handleSubmit} className="form-signup-btn" type="button"> Sign Up
                </button>
       </form>
      )
  }
}

const mapDispatchToProps = (dispatch) => ({
  userPostFetch: (userInfo) => dispatch(userPostFetch(userInfo))
})

const mapStateToProps=(state) =>{
  const currentUser = state.user.currentUser;
  return {
    currentUser
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
