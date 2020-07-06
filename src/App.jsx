import React, { Component } from 'react';
import styles from './App.scss';
import MainArea from './components/MainArea';
import NavBar from './components/NavBar';
import beers from "./data/beers.js";

export default class App extends Component {
  state = {
    beers:beers,
    searchTerm: "",
  };

  handleChange = (event) => this.setState({searchTerm: event.target.value});



  render() {
    const { beers, searchTerm } = this.state
    return (
      <section className={styles.app}>
      <NavBar handleChange={this.handleChange} />
      <MainArea beers={beers}searchTerm={searchTerm}/>
      </section>
    );
  }
}