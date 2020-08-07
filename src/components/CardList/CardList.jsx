import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";
// import beers from "../../data/beers";


class CardList extends Component {
  getBeers = () => {
    return this.props.beers
      .filter((beer) => beer.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      .map((beer, index) => <li key={index} > <Card info={beer} /> </li>);
  }

  
  render() {
    console.log(this.props.beers);
    return (
      <section className={styles.cardParent}>
        {this.getBeers()}

      </section>
    );
  }
}


export default CardList;
