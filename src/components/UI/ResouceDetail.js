import React from "react";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const ResourceDetail = (props) => {
  
  let resources = props.data;
  console.log(props);
  const renderResult = () => {
    if (resources !== null && resources !== undefined) {
      return (
        <Row className="justify-content-center">
          {resources.map((item) => (
            <Col md="6" className="mb-20">
                 <Card className="card-stats">
              <Card.Header>
                <span><b> {item.resourceType} </b></span>
                <span class="floatrht"><b> {item.district} </b></span>
                </Card.Header>
              <Card.Body>
              <p dangerouslySetInnerHTML={{__html: item.resourceDetail.replace(/\r?\n/g, "<br/>")}}></p>
              </Card.Body>               
              </Card>              
            </Col>
          ))}
       </Row>
      );
    } else {
      return <Redirect to="/error" />;
    }
  };
  return (
    <Container>
     
        {renderResult()}
    </Container>
  );
};
export default ResourceDetail;
