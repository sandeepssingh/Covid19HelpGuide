import React from 'react';
import DashBoard from './components/DashBoard';
import CovidResources from './components/UI/CovidResources';
import ResourceForm from './components/UI/ResourceForm';
import ResourceDetail from './components/UI/ResouceDetail';
import NotFound from './components/NotFound'
import ErrorPage from './components/Error'
import VaccineDetails from './components/UI/Static/VaccineResources';
import OxygenDetails from './components/UI/Static/OxygenDetails';
import ICUDetails from './components/UI/Static/ICUDetails';
import MedicineDetails from './components/UI/Static/MedicineResources'
import RemdesivirDetails from './components/UI/Static/RemdesivirDetails';
import GovermentResources from './components/UI/Static/GovermentResources';
import AmbulanceService from './components/UI/Static/AmbulanceService'
;import ContactUs from './components/UI/ContactUs';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/Home" component={DashBoard} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Resources" component={CovidResources} />
        <Route exact path="/Detail" component={ResourceDetail} />
        <Route exact path="/Vaccine" component={VaccineDetails} />
        <Route exact path="/Oxygen" component={OxygenDetails} />
        <Route exact path="/Fabiflu" component={MedicineDetails} />
        <Route exact path="/ICU" component={ICUDetails} />
        <Route exact path="/Ambulance" component={AmbulanceService} />
        <Route exact path="/Remdesivir" component={RemdesivirDetails} />
        <Route exact path="/GovtInitiatives" component={GovermentResources} />
        <Route exact path="/Resource-form-covid19" component={ResourceForm} />
        <Route exact path="/Contact" component={ContactUs} />
        <Route exact path="/error" component={ErrorPage} />
        <Route path="*" component={NotFound} />
        {/* <Route exact path="/Detail" component={ResourceDetail} /> */}
      </Switch>
    </div>
  );
};