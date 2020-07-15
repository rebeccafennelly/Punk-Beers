import React, { Component } from 'react';
import styles from './App.scss';
import MainArea from './components/MainArea';
import NavBar from './components/NavBar';
import beersFromData from "./data/beers.js";

export default class App extends Component {
  state = {
    beers: beersFromData,
    searchTerm: "",
    highAlcoholOnly: false,
    classicRangeOnly: false,
    highAcidityOnly: false
  };


  handleChange = (event) => {
    this.setState ({ searchTerm: event.target.value })
    console.log("changed")
  }

  filterClassic = () => {
    this.setState({
      classicRangeOnly: !this.state.classicRangeOnly,
    })
  }

  filterABV = () => {
    this.setState({
      highAlcoholOnly: !this.state.highAlcoholOnly,
    })
  }

  filterAcidic = () => {
    this.setState({
      highAcidityOnly: !this.state.highAcidityOnly,
    })
  }

  

  render() {
    const { beers, searchTerm, highAlcoholOnly, classicRangeOnly, highAcidityOnly } = this.state
    return (
      <section className={styles.app}>
      <NavBar handleChange={this.handleChange} />
      <MainArea beers={beers} searchTerm={searchTerm} highAlcoholOnly={highAlcoholOnly} classicRangeOnly={classicRangeOnly} highAcidityOnly={highAcidityOnly} />
      </section>
    );
  }
}