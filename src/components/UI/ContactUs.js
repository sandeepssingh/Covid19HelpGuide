import React from 'react';
import {
    Container,    
    Row,
    Col,
    Card
  } from 'react-bootstrap';

const ContactUs = props => {

    return(
        <Container>
             <Row className="justify-content-center mt-50">
                <h4>You can contact us at </h4>               
            </Row>
            <Row className="justify-content-center mt-20">
            <p><b><a href="mailto:covid19helpindia@gmail.com">covid19helpindia@gmail.com</a></b></p>
            </Row>
            <Row className="justify-content-center mt-20">
                <div className="mb-20"><h1>Disclaimer</h1></div>
                <Row>
                <ul>
                    <li>Convid 19 help guide in an initiative to help people during this panademic.</li>
                    <li>We Covid19helpguide.in is a non-profit  aggregator compiled by friends and family.</li>
                    <li>We neither encourage ourselves into any monetry benefits nor promote such things.</li>
                    <li>Our purpose is to give potential sources of help to those who require it</li>
                    <li>All information on this site is here only for your awareness.</li>
                    <li>Nothing on this website is medical advice, so please speak to your Doctor or a health worker for needs specific to you in case you have Covid19 or any complication arising from it.</li>
                    <li>We cannot guarantee absolute accuracy of all the information here.</li>
                    <li>And We are also not responsible for the quality of the goods or the services mentioned here.</li>
                    <li>Clicking on links on this website may take you to other websites, whose content we cannot vouch for. Be careful in relying on information on third party links and read their privacy policy carefully.</li>
                    <li>Any goods and services you avail on the basis of information on this website is at your own risk.</li>
                    <li>Covid19helpguide.in is not liable for any kind of damages.</li>
                </ul>
                </Row>
            </Row>
        </Container>
    )

};

export default ContactUs;