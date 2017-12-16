import React, { Component } from 'react';
export default class GalleryModal extends Component {
    render() {
        if (this.props.isOpen === false) {
         return null;
        }
       
        return(
        <div className='modal-overlay'>
            {this.props.children} 
            <i className='modal-close icon ion-ios-close-outline' onClick={this.props.onClick}></i>
            <div className='modal-body'>   
                <img className='img-responsive' alt = 'foto' src={this.props.src} />     
            </div>
        </div> 
        )
       }
}
