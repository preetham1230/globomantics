import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import FeaturedHouse from './Components/featured-house';
import HouseFilter from './Components/house-filter';
import search from './Components/search';
import test from './Components/test';

class App extends Component {

state = {
  subtitle : "Provide houses worldwide",
  selDesc: "Look for dream house in countries",
  countries:[]
}
componentDidMount() {
  this.fetchHouses();
  this.determineUniqueCountries();
}

fetchHouses = () => {
  fetch('/houses.json')
  .then(res => res.json())
  .then(allHouses =>{
    this.allHouses = allHouses;
    const featureHouse = this.allHouses[0];
    console.log("house value",featureHouse);
    this.setState({featureHouse});
  })
}

determineUniqueCountries = () =>{
  const countries = ["Switzerland","The Netherlands"];

  this.setState({countries})
}

filterHouses =(country) =>{
  const filteredHouses = this.allHouses.filter(h => h.country == country);
  this.setState({filteredHouses});
  this.setState({country})
}

testDatafunc =() =>{
  return(
    <div>
        New test Function
      </div>
  );
}

testData = (

  <Switch>
        <Route path='/search' component={search} />
        <Route path='/test' component={test} />
  </Switch>
)


  render() {
    
    
    

    return (
      
      <BrowserRouter>
        <div className="container">
          <Header subtitle={this.state.subtitle}/>
          <HouseFilter countries = {this.state.countries} selDesc= {this.state.selDesc} filterHouses= {this.filterHouses}/>
          <FeaturedHouse house = {this.state.featureHouse} />

        </div>
        {this.testDatafunc()}
        
        <ul>
          <li><Link to='/search'>Search</Link></li>
          <li><Link to='/test'>Test</Link></li>
        </ul>
        {this.testData}

      </BrowserRouter>
    );
  }
}

export default App;
