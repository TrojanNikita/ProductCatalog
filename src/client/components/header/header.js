import React from 'react';
import {Link, withRouter} from 'react-router-dom';


import {connect} from 'react-redux';

import './header.css';

class Header extends React.Component{

  render(){
        const {currentUser}=this.props;
        const currentPath=this.props.location.pathname;
        const classNames='header-item';


//будем проверять, если адрес совпадает - подсвечиваем header

        return (
          <div className="header">
            <div className="header-left">
                  <h3>
                      <Link to="/" className="header-main">Product Catalog</Link>
                  </h3>
            </div>
            <div className="header-right">
               <ul>
                    <li>
                      <Link to="/category" className={currentPath.search('/category') ? classNames:classNames+' active'}>
                      Change the category
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" className={currentPath.search('/products') ? classNames: classNames+' active' }>
                      Products
                      </Link>
                    </li>
                    <li>
                      {//меняем кнопку LogIn на имя пользователя, если user залогинился
                        currentUser.sid?
                            <div>{currentUser.name}</div> :
                            <Link to="/login"
                                  className={currentPath.search('/login')&&currentPath.search('/signup')?
                                  classNames: classNames+' active' }>
                                  Login
                            </Link>
                      }
                    </li>
              </ul>
            </div>
          </div>
        );
      }

}

function mapStateToProps(state) {
  const currentUser  = state.user.currentUser;
  return {
    currentUser
  }
}


export default connect(mapStateToProps)(withRouter(Header));
