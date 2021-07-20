import React, { useEffect, useState } from "react";
import Firebase from "firebase";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import EnumResourceType from "../DataModel/EnumResourceType";
// import { FetchCovidResources } from "../HttpInterceptor/HttpInterceptor";

import Districts from "../DataModel/Districts";

import "./CovidResources.css";

const CovidResources = (props) => {
  const [resources, setResources] = useState([]);
  const [state, setstate] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  let history = useHistory();

  const handleResourceClick = (args) => {
    
    if (state != "All") {
      stateDocs = [];
      allDocs.forEach((document) => {
        if (document.district === state) {
          var doc = {
            id: document.id,
            district: document.district,
            resourceType: document.resourceType,
            resourceDetail: document.resourceDetail,
          };
          stateDocs.push(doc);
        }
      });
    } else {
      stateDocs = allDocs;
    }

    stateDocs.forEach((document) => {
      if (document.resourceType === args) {
        var doc = {
          id: document.id,
          district: document.district,
          resourceType: document.resourceType,
          resourceDetail: document.resourceDetail,
        };
        resourceTypeDocs.push(doc);
      }
    });
    var routeStateObject = {
      pathname: args,
      state: resourceTypeDocs, // your data array of objects
    };

      history.push(routeStateObject);
    
  };

  // Reading Data from Database
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const dbRef = Firebase.firestore().collection("/CovidResources");
      dbRef
        .get()
        .then((snapshot) => {
          if (snapshot) {
            setResources(snapshot);
            setIsLoading(false);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchData();
  }, []);
  //end
  
  // Districts handler
  const handleSelect = (event) => {
    setstate(event.target.value);
  };
  //End

  // create resouces logic
  let allDocs = [];
  let stateDocs = [];
  let resourceTypeDocs = [];

  if (!isLoading) {
    var covidResource = resources;

    covidResource.forEach((document) => {
      var childKey = document.id;
      var currDoc = document.data();

      var doc = {
        id: childKey,
        district: currDoc.district,
        resourceType: currDoc.resourceType,
        resourceDetail: currDoc.resourceDetail,
      };
      allDocs.push(doc);
    });
  }
  //end

  const renderResult = () => {
    return (
      <Row>
        <Row className="mb-50 districtBlk">
          <Col md="12">
            <select
              className="select-css"
              value={state}
              onChange={handleSelect}
            >
              <option value="All">All</option>
              {Districts.map((option) => (
                <option value={option.id}>{option.value}</option>
              ))}
            </select>
          </Col>
        </Row>
        <Row className="resource justify-content-center">
          <Col sm="6" md="4" lg="3" xs="6">
            <Card onClick={() => handleResourceClick(EnumResourceType.Oxygen)}>
              <div className="o2icon icon"></div>
              <Card.Body>
                <Card.Title>{EnumResourceType.Oxygen}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md="4" lg="3" xs="6">
            <Card onClick={() => handleResourceClick(EnumResourceType.ICU)}>
              <div className="bedicon icon"></div>
              <Card.Body>
                <Card.Title>ICU Beds</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md="4" lg="3" xs="6">
            <Card
              onClick={() => handleResourceClick(EnumResourceType.Remdesivir)}
            >
              {/* <Card.Img variant="top" src='images/png/injection.png' /> */}
              <div className="injicon icon"></div>
              <Card.Body>
                <Card.Title>Remdesivir</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md="4" lg="3" xs="6">
            <Card onClick={() => handleResourceClick(EnumResourceType.Vaccine)}>
              <div className="vaccicon icon"></div>
              <Card.Body>
                <Card.Title>Vaccination</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md="4" lg="3" xs="6">
            <Card onClick={() => handleResourceClick(EnumResourceType.Fabiflu)}>
              <div className="medicon icon"></div>
              <Card.Body>
                <Card.Title>Fabiflu</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md="4" lg="3" xs="6">
            <Card onClick={() => handleResourceClick(EnumResourceType.GovtInitiatives)}>
              <div className="govtresourceicon icon"></div>
              <Card.Body>
                <Card.Title>Govt. Initiatives</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md="4" lg="3" xs="6">
            <Card onClick={() => handleResourceClick(EnumResourceType.Ambulance)}>
              <div className="ambulanceicon icon"></div>
              <Card.Body>
                <Card.Title>Ambulance Service</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="6" md="4" lg="3" xs="6">
            <Card>
              <div className="hospitalicon icon"></div>
              <Card.Body>
                <Card.Title>Non Covid Hospitals</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    );
  };

  return <Container>{renderResult()}</Container>;
};

export default CovidResources;
