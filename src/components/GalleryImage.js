import React, { Component } from 'react';

export default class GalleryImage extends Component {
    
    render() {
        return(
         <img  className='gallery-thumbnail' src={this.props.src} alt={this.props.alt} />
        )
       }
}
