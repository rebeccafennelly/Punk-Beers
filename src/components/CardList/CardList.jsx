import React, { Component } from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";
import beersFromData from "../../data/beers.js";

class CardList extends Component {
  getBeers = () => {
    return this.props.beers
            .filter((beer) => beer.includes(this.props.searchTerm))
            .map((beer) => <Card />
            );
  // }
  }

render() {
    return (
   <>

      <Card />
      <Card />
          {/* {this.getBeers()} */}
    </>
    );
  }
}


export default CardList;
