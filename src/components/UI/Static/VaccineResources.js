import React from 'react';
import {
    Container,    
    Row
  } from 'react-bootstrap';

const VaccineDetails = props => {

    return(
        <Container>
            <Row className="justify-content-center mt-50">              
                    <h3><b><a href="https://selfregistration.cowin.gov.in/" target="_blank">Register for Vaccine</a></b></h3>                              
            </Row>
            <Row className="justify-content-center mt-50">
                <h4>You can also register using Arogya Setu App </h4>               
            </Row>
            <Row className="justify-content-center mt-20">
            <div>
                <h3><b><a href=" https://www.mygov.in/aarogya-setu-app/" target="_blank">Download Aarogya Setu</a></b></h3> </div>                             
               
            </Row>
        </Container>
    )
};

export default VaccineDetails;