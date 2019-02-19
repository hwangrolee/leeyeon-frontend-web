import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from 'components/Menu';
import { Home, About, RealEstate, Login, Logout, Signup, RealEstateList, RealEstateAdd, RealEstateDetail } from 'pages';

class App extends Component {
  render() {
    return (
     <div>
          <Menu/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/logout" component={Logout}/>
          <Route exact path="/signup" component={Signup}/>
          <Switch>
            <Route path="/real-estate/detail/:realEstateId" component={RealEstateDetail}/> 
            <Route path="/real-estate/list" component={RealEstateList}/> 
            <Route path="/real-estate/add" component={RealEstateAdd}/> 
            <Route path="/real-estate" component={RealEstate}/>
          </Switch>
          <Switch>
            <Route path="/about/:name" component={About}/>
            <Route path="/about" component={About}/>
          </Switch>
          
     </div> 
    )
  }
}

export default App;
