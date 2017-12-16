import React, { Component } from 'react'

export default class NavLeft extends Component {
    render() {
        return (
            
                <i onClick= {this.props.onClick} className = 'icon ion-chevron-left'></i>
            
        )
    }
}
