import React, { Component } from "react";
import styles from "./SearchBar.module.scss";


class SearchBar extends Component {


  render() {
   
    return (
      <div className={styles.search}>
        <input type="text" onChange={this.props.handleChange} placeholder="Search..." />
      </div>
    );
}
}
export default SearchBar;
