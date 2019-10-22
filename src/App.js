import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import FeaturedHouse from './Components/featured-house';
import HouseFilter from './Components/house-filter';

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

  render() {
    return (
      <div className="container">
        <Header subtitle={this.state.subtitle}/>
        <HouseFilter countries = {this.state.countries} selDesc= {this.state.selDesc}/>
        <FeaturedHouse house = {this.state.featureHouse} />

      </div>
    );
  }
}

export default App;
