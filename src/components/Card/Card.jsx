import React, { Component } from "react";
import styles from "./Card.module.scss";
import beers from "../../data/beers.js";

class Card extends Component {

  render() {
    const {
      image_url,
      name,
      description,
    } = this.props.beers;

  
    return (
      <div className={styles.card}>
        <img className={styles.image} src={image_url} alt="A beer" />
        <section className={styles.beerDetails}>
          <h2 className={styles.beerTitle}>{name}</h2>
          <p>
            <span className={styles.description}>{description}</span>
          </p>
        </section>
      </div>
    );
  
  }
}


export default Card;
