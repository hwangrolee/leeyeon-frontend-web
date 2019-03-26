import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from 'components/Menu';
import { Body } from 'components/Layout';
import { Home, About, Estate, EstateList, EstateAdd, EstateDetail, Account } from 'pages';
import { EditEstateProvider } from '../contexts/EditEstate';

class App extends Component {
  render() {
    return (
     <EditEstateProvider>
          <Menu/>
          <Body>
            <Route exact path="/" component={Home}/>
            <Route exact path="/account" component={Account}/>
            <Switch>
              <Route path="/estate/detail/:realEstateId" component={EstateDetail}/> 
              <Route path="/estate/list" component={EstateList}/> 
              <Route path="/estate/add" component={EstateAdd}/> 
              <Route path="/estate" component={Estate}/>
            </Switch>
            <Switch>
              <Route path="/about/:name" component={About}/>
              <Route path="/about" component={About}/>
            </Switch>
          </Body>
          
          
     </EditEstateProvider> 
    )
  }
}

export default App;
