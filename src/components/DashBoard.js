import React, { useEffect, useState } from 'react';
import {GetCovid19Data} from './HttpInterceptor/HttpInterceptor';
import Home from './UI/Home';
import '../assets/scss/dashboard.scss'

const DashBoard = () => {
    const [list, setList] = useState([]);
    useEffect(() => {    
      GetCovid19Data()
        .then(items => items)
        .then(response => 
          setList(response)
        )    
    }, [setList]);

    localStorage.setItem('allowedAccess', true);
  
  const renderAuthButton = () => {
    if (list) {
      return   <Home data = {list} />;
    } else {
      return <button>Login</button>;
    }
  }

    return (
      <div>
          {renderAuthButton()}
      </div>
    )
  };

  export default DashBoard