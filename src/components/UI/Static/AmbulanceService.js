import React from 'react';
import {
    Container,    
    Row
  } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import ResourceDetail from '../ResouceDetail';

const AmbulanceService = props => {
    var allowedAccess = localStorage.getItem("allowedAccess");

    if (!allowedAccess) {
      return <Redirect to="/unavailable#deyd4-425t3-uet53-733t6-3737g" />;
    }
  
    return(
        <Container>
            <Row className="justify-content-center mt-50">              
                <h2 className="text-center">Ambulance Service</h2>                             
            </Row>            
            <ResourceDetail data = {props.location.state}/>    
        </Container>
    )
};

export default AmbulanceService;