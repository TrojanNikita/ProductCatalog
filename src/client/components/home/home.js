import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';


//пока что здесь переадресация: на продукты, если вошли
//на вход, если не вошли
const Home = ({ currentUser }) => {

  if (currentUser.sid)
    return <Redirect to="/products" />;
  else
    return <Redirect to="/login" />;
};


function mapStateToProps(state) {
  const currentUser  = state.user.currentUser;
  return {
    currentUser
  }
}


export default connect(mapStateToProps)(Home);
