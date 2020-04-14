
import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'

const Header = ({startLogout}) => (
    <header className="header">
      
     <div className="content-container">
       <div className="header-content">

    
      <Link className="header-title" to="/dashboard" >
       <h1>Expensify App</h1>
      </Link>
      <button className="button button-modify" onClick = {startLogout}>Log Out</button>
      </div>
      </div>
    </header>
  );
  
  const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
  });
  export default connect(undefined,mapDispatchToProps)(Header);