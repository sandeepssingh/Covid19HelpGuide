import React, { useState } from 'react';
import {
    Container,    
    Row
  } from 'react-bootstrap';  
import Firebase from "firebase";
import Districts from '../DataModel/Districts';
import ResourceType from '../DataModel/ResourceType';

const ResourceForm = () => {

    const [district, setDistrict] = useState('Delhi');
    const [resourceValue, setResourceType] = useState('Any');
    const [resourceDetail, setResourceDetail] = useState('');
    const [verified, setResourceVerified] = useState(false);

    const districtsHandler = (event) => {
        setDistrict(event.target.value);
     };
    
      const resourceTypeChangeHandler = (event) => {
        setResourceType(event.target.value);
      };
    
      const resourceDetailHandler = (event) => {
        setResourceDetail(event.target.value);
      };

      const resourceVerifiedHandler = (event) => {
        setResourceVerified(event.target.checked);
      }

      function writeResourceData(resourceData) {         
        //const dbRef = Firebase.database().ref();
        // Firebase.database().ref('CovidResources/' + resourceData.district +"/"+ resourceData.resourceType + "/" + Math.floor(1000 + Math.random() * 9000)).set({
        //    detail: resourceData.detail
        // }, (error) => {
        //     if (error) {
        //         console.log(resourceData);
        //     } else {
        //       console.log("Saved Successfully");
        //     }
        //   });
        var dbContext = Firebase.firestore().collection("/CovidResources");
        var doc = {
          district: resourceData.district,
          resourceType : resourceData.resourceType,
          resourceDetail: resourceData.detail
        };
        dbContext.add(doc)
        .then(function(docRef) {
          window.alert("Succefully added");
          setDistrict('Delhi');
          setResourceType('Any');
          setResourceDetail('');
          //console.log("Succefully added: ", docRef.id);
        })
        .catch(function(error) {
          window.alert("Error while pushing record. Please try after some time.");
          //console.error("Error adding data: ", error);
        });;
      }

      const submitHandler = (event) => {
        event.preventDefault();
    
        const resourceData = {
          district: district,
          resourceType: resourceValue,
          detail: resourceDetail,
          verified : verified
        };
        if(resourceData.verified)
        {
            writeResourceData(resourceData);
        }else{
          window.alert('Lead is not verified.');
        }
       // console.log(resourceData);
    };

      return (
        <Container>
        <Row className="justify-content-center mb-50">
            <h4>Resouce Details Forms </h4>
        </Row>
          <Row className="justify-content-center">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Select District</label>
                    <select className="select-css" value={district} onChange={districtsHandler}>
                        {Districts.map((option) => (
                        <option value={option.id}>{option.value}</option>
                        ))}
                    <option value="Others">Others</option> 
                    </select>                                     
                </div>
                <div className="form-group">
                    <label>Resource Type</label>
                    <select className="select-css" value={resourceValue} onChange={resourceTypeChangeHandler}>
                        {ResourceType.map((option) => (
                        <option value={option.id}>{option.value}</option>
                        ))}
                    </select>     
                    {/* <input type='text' value={resourceType} onChange={resourceTypeChangeHandler} class="form-control" id="exampleInputPassword1" placeholder="Password" /> */}
                </div>
                <div className="form-group">
                    <label>Resource Detail</label>
                    <textarea type='text' value={resourceDetail} onChange={resourceDetailHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter details" />
                </div>
                <div className="form-check">
                    <input type="checkbox" value={verified} onChange={resourceVerifiedHandler}  className="form-check-input" id="verfied" />
                    <label className="form-check-label">Verified</label>
                </div>
                <br/>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>            
          </Row>
        </Container>
    );
}

export default ResourceForm;