import React from 'react';
import {
    Container,    
    Row,
    Col,
    Card
  } from 'react-bootstrap';
  import './CustomCard.css'

const CustomCard = props => {

    let casesTimeSeries = props.data.cases_time_series;
    if(casesTimeSeries)
    {
        let totalCount = casesTimeSeries.length;
        let latestRecord = casesTimeSeries[totalCount-1];
        var nf = new Intl.NumberFormat();
    var dailyReport = {
        dailyconfirmed: latestRecord.dailyconfirmed,
        dailydeceased: latestRecord.dailydeceased,
        dailyrecovered: latestRecord.dailyrecovered,
        date: latestRecord.date,
        dateymd: latestRecord.dateymd,
        totalconfirmed: nf.format(latestRecord.totalconfirmed.toLocaleString()),
        totalactive: nf.format(props.data.statewise[0].active.toLocaleString()),
        totaldeceased: nf.format(latestRecord.totaldeceased.toLocaleString()),
        totalrecovered: nf.format(latestRecord.totalrecovered.toLocaleString())
    }
    console.log(dailyReport);
}
const renderResult = () => {
    if (casesTimeSeries) {
      return (<Row className="homepage">
      <Col lg="3" md="6" sm="6" xs="6">
              <Card className="card-stats">
              <Card.Header>Total Cases</Card.Header>
              <Card.Body>
                      <div className="numbers">                    
                      <Card.Title tag="p">{dailyReport.totalconfirmed}</Card.Title>
                      <p />
                      </div>                  
              </Card.Body>               
              </Card> 
          </Col>
          <Col lg="3" md="6" sm="6" xs="6">
              <Card className="card-stats">
              <Card.Header>Total Active Cases</Card.Header>
              <Card.Body>
                    <div className="numbers">
                    <Card.Title tag="p">{dailyReport.totalactive}</Card.Title>
                    <p />
                    </div>
              </Card.Body>               
              </Card> 
          </Col>
          <Col lg="3" md="6" sm="6" xs="6">
              <Card className="card-stats">
              <Card.Header>Total Recovered</Card.Header>
              <Card.Body>             
                <div className="numbers">
                    <Card.Title tag="p">{dailyReport.totalrecovered}</Card.Title>
                    <p />
                </div>
              </Card.Body>               
              </Card> 
          </Col>
          <Col lg="3" md="6" sm="6" xs="6">
              <Card className="card-stats">
              <Card.Header>Total Deceased</Card.Header>
              <Card.Body>
                     <div className="numbers">
                      <Card.Title tag="p">{dailyReport.totaldeceased}</Card.Title>
                      <p />
                      </div>
              </Card.Body>               
              </Card> 
          </Col>
          </Row>
          );
    } else {
      return <div></div>;
    }
  }
return (
    <div>
     {renderResult()}
     </div>    
)
}

export default CustomCard;