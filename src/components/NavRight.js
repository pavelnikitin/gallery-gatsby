import React, { Component } from 'react'

export default class NavRight extends Component {
    render() {
        return (
            
                <i onClick= {this.props.onClick}  className = 'icon ion-chevron-right'></i>
            
        )
    }
}