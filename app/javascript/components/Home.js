import React from "react"
import PropTypes from "prop-types"

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="row"></div>

        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Welkom! Heb je al honger?</span>
                <p>
                  Met HapHapHap heb je altijd een lijstje voor de beste
                  boodschappen. De lekkerste hapjes, van de lekkerste ingredienten, en bewust ingekocht.
                </p>
              </div>
              <div className="card-action">
                <a href="#" className="green-text">Dit is de shit!</a>
                <a href="#" className="red-text text-lighten-2">Nee. Ik vind niks.</a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home
