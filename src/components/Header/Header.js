import React, { Component } from 'react';
import css from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={css.header}>
        <div className={css.logo}></div>
      </div>
    );
  }
}

export default Header;