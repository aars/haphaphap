import React from "react"
import PropTypes from "prop-types"

const style = {
  background: '#d90075'
}

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <nav>
        </nav>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  version: PropTypes.string
};
export default Header
