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
      <div className="row">
      <div className="footer col-xs-12 text-center">
         <h3 >Copyright©2017</h3> 
      </div>
   </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
