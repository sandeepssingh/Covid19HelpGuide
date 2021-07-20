import React from 'react';
import {
    Container,    
    Row,
    Col
  } from 'react-bootstrap';
  import { Redirect } from "react-router-dom";
import './GovermentResources.css';
import GovermentInitiative from '../../DataModel/GovermentInitiative';
const GovermentResources = props => {
    var allowedAccess = localStorage.getItem("allowedAccess");

    if (!allowedAccess) {
      return <Redirect to="/unavailable#deyd4-425t3-uet53-733t6-3737g" />;
    }
    var govtData = GovermentInitiative;
    return (
        <Container>
            <Row className="justify-content-center mt-50">
                <Col>
                    <h2 className="text-center">Goverment Initiatives</h2>
                </Col>
            </Row>
        <Row className="justify-content-center mt-50">  
        <Col className="text-center govt-resources">
        {govtData.map((option) => (
              <div><a href={option.Url}>{option.Name}</a><hr /></div>
              
            ))}
        </Col>  
        </Row>
        </Container>
    )

}
export default GovermentResources;