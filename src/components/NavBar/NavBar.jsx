import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "../../components/SearchBar"


class NavBar extends Component {


  render() {
    return (
      <section className={styles.nav}>
         <SearchBar handleChange={this.props.handleChange}/>
      </section>
    );
  }
}

export default NavBar;
