import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "components/Menu";
import { Body } from "components/Layout";
import { SnackbarProvider } from "notistack";
import {
  Home,
  About,
  EstateList,
  EstateAdd,
  EstateDetail
} from "pages";

import {
  VisitReservationListForBuyer,
  VisitReservationDetailForBuyer
} from "pages/visitReservation/buyer";

import {
  VisitReservationListForSeller,
  VisitReservationDetailForSeller
} from "pages/visitReservation/seller";

import {
  Main as AccountMain,
  ReadEstate as AccountReadEstate,
  AddedEstate as AccountAddedEstate
} from '../pages/account';

import { EditEstateProvider } from "../contexts/EditEstate";
import 'rc-pagination/assets/index.css';
class App extends Component {
  render() {
    return (
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <EditEstateProvider>
          <Menu />
          <Body>
            <Route exact path="/" component={Home} />
            
            <Switch>
              <Route exact path="/account/estate/list" component={AccountAddedEstate} />
              <Route exact path="/account/estate/history/read" component={AccountReadEstate} />
              <Route exact path="/account" component={AccountMain} />
            </Switch>
            <Switch>
              <Route
                path="/estate/detail/:realEstateId"
                component={EstateDetail}
              />
              <Route path="/estate/list" component={EstateList} />
              <Route path="/estate/add" component={EstateAdd} />
            </Switch>
            <Switch>
              <Route
                extract
                path="/account/estate/buyer/visit-reservation/detail/:estateId"
                component={VisitReservationDetailForBuyer}
              />
              <Route
                extract
                path="/account/estate/buyer/visit-reservation/list"
                component={VisitReservationListForBuyer}
              />
              <Route
                extract
                path="/account/estate/buyer/visit-reservation"
                component={VisitReservationListForBuyer}
              />
            </Switch>
            <Switch>
              <Route
                extract
                path="/account/estate/seller/visit-reservation/detail/:estateId"
                component={VisitReservationDetailForSeller}
              />
              <Route
                extract
                path="/account/estate/seller/visit-reservation"
                component={VisitReservationListForSeller}
              />
              <Route
                extract
                path="/account/estate/seller/visit-reservation/list"
                component={VisitReservationListForSeller}
              />
            </Switch>
            <Switch>
              <Route path="/about/:name" component={About} />
              <Route path="/about" component={About} />
            </Switch>
          </Body>
        </EditEstateProvider>
      </SnackbarProvider>
    );
  }
}

export default App;
