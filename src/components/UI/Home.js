import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {
    Container,    
    Row,
    Col
  } from 'react-bootstrap';  
import CustomCard from './CustomCard';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './Home.css'


const Home = (props) => {
     let lastupdatedtime = "";
     var updateDateTime  ="";
    //console.log(props.data);
    const len = props.data.length !== 0 ? true : false;
    let stateData = [];
    if(len)
    {
        let tempData = props.data.statewise.slice(1);
        lastupdatedtime= tempData[0].lastupdatedtime;
        var nf = new Intl.NumberFormat();
        for (let i = 0; i < tempData.length-1; i++) {
            stateData.push({
                Id: i+1,
                state: tempData[i].state,
                active:  nf.format(tempData[i].active),
                confirmed:  nf.format(tempData[i].confirmed),
                deaths:  nf.format(tempData[i].deaths),
                recovered:  nf.format(tempData[i].recovered),
            });
        }
        
        updateDateTime = lastupdatedtime != null && lastupdatedtime != undefined ? lastupdatedtime: "";

    }
    function formatDate(date) {
        let p = new Intl.DateTimeFormat('en',{
          year:'numeric',
          month:'2-digit',
          day:'2-digit',
          hour:'2-digit',
          minute:'2-digit',
          hour12: false
        }).formatToParts(date).reduce((acc, part) => {
            acc[part.type] = part.value;
            return acc;
        }, {});
        
        return `${p.month}/${p.day}/${p.year}, ${p.hour}:${p.minute} ${p.dayPeriod}`; 
      }
      
    
    const onRowSelected = (event) => {
        // window.alert(
        //   'row ' +
        //     event.node.data.athlete +
        //     ' selected = ' +
        //     event.node.isSelected()
        // );
      };
      const renderResult = () => {
        if (props != null && props.data !== null  && props.data !== undefined) {
            return (<Container>
                <Row className="justify-content-center mb-20">
                    <Col>
                    <h3 className="text-center india">INDIA</h3>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-20">
                    <Col>
                    <h5 className="text-center last-upd-date">Last Updated <span>{updateDateTime}</span> IST</h5>
                    </Col>
                </Row>
                <CustomCard data = {props.data}/>
              <Row>
                <div className="ag-theme-alpine">
                        <AgGridReact
                             rowSelection={'single'}
                            rowData={stateData}  onRowSelected={onRowSelected}>
                            <AgGridColumn width={100} field="Id" sortable={ true }></AgGridColumn>
                            <AgGridColumn width={250} field="state" sortable={ true }></AgGridColumn>
                            <AgGridColumn width={150} field="active" sortable={ true }></AgGridColumn>
                            <AgGridColumn width={150} field="confirmed" sortable={ true }></AgGridColumn>
                            <AgGridColumn width={150} field="deaths" sortable={ true }></AgGridColumn>
                            <AgGridColumn width={150} field="recovered" sortable={ true }></AgGridColumn>
                        </AgGridReact>
                    </div>
                    </Row>
            </Container>)
        }
        else{
            return( <Container>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
            </Container>)
        }
    }
return(
    <div>
    {renderResult()}
    </div>
    ) 
}

export default Home;