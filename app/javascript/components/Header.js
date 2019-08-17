import logo from 'images/logo.png'

import React from "react"
import PropTypes from "prop-types"

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="/" id="brand-name" className="left brand-logo">HapHapHap</a>
            <a href="#" id="brand-logo" className="brand-logo center"><img src={logo} /></a>
            <ul className="right">
              <li><a href="/search"><i className="material-icons">search</i></a></li>
              <li><a href="#"><i className="material-icons">more_vert</i></a></li>
            </ul>
          </div>

          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab"><a href="/lists">Lists</a></li>
              <li className="tab"><a href="/dishes">Dishes</a></li>
              <li className="tab"><a href="/ingredients">Ingredients</a></li>
              <li className="tab"><a href="/stores">Stores</a></li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  version: PropTypes.string
};

export default Header
