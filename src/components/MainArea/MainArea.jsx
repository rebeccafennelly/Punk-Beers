import React, { Component } from "react";
import styles from "./MainArea.module.scss";
import CardList from "../../components/CardList"



class MainArea extends Component {


  render() {
const { beers, searchTerm, highAlcoholOnly, classicRangeOnly, highAcidityOnly } = this.props

return (
  <section className={styles.main}>
    <h1> Pick ya' Punk!</h1>
    <CardList beers={beers} searchTerm={searchTerm}/>
  </section>
     
    );
  }
}

export default MainArea;
