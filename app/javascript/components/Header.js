import React from "react"
import PropTypes from "prop-types"

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        Version: {this.props.version}
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  version: PropTypes.string
};
export default Header
