import React, { Component } from "react";
import styles from "./MainArea.module.scss";
import CardList from "../../components/CardList"



class MainArea extends Component {


  render() {
const { beers, searchTerm } = this.props
console.log(beers);
return (
  <section className={styles.main}>
    <CardList beers={beers} searchTerm={searchTerm}/>
  </section>
     
    );
  }
}

export default MainArea;
