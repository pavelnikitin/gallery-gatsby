import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './../scss/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Fotogallery"
      meta={[
        { name: 'description', content: 'BLACKTIE' },
        { name: 'keywords', content: 'black, ties' },
      ]}
    />
    <div>
    <div className="container-fluid">
        <div className="row">
           <div className="header col-xs-12 text-center">
              <h1 >Фотогалерея</h1> 
           </div>
        </div>
    </div>     
      {children()}
      <div className="footer">
        <div className="container">
          <div className="row centered">
            <h2>You Can Contact Us</h2>
            <h5>HELLO@LANDINGSUMO.COM</h5>

            <p className="mt">
              <a href="#"><i className="ion-social-twitter"></i></a>
              <a href="#"><i className="ion-social-dribbble"></i></a>
              <a href="#"><i className="ion-social-instagram"></i></a>
              <a href="#"><i className="ion-social-facebook"></i></a>
              <a href="#"><i className="ion-social-pinterest"></i></a>
              <a href="#"><i className="ion-social-tumblr"></i></a>
            </p>
            <h6 className="mt">COPYRIGHT 2014 - LANDING SUMO</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
