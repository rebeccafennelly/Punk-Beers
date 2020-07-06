import React, { Component } from "react";
import styles from "./MainArea.module.scss";
import CardList from "../../components/CardList"
import beersFromData from "../../data/beers.js";


class MainArea extends Component {


  render() {
const { beersFromData, searchTerm } = this.props
return (
  <section className={styles.main}>
    <CardList beers={beersFromData} searchTerm={searchTerm}/>
  </section>
     
    );
  }
}

export default MainArea;
