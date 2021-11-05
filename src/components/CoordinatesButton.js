// Code CoordinatesButton Component Here
import React, { Component } from 'react';
export default class CoordinatesButton extends Component{

    clickedCoordinate = (event)  => {
        const x = event.clientX;
        const y = event.clientY;
        this.props.onReceiveCoordinates([x, y]);
    }

    render(){
        return (
            <button onClick={(event) => {this.clickedCoordinate(event)}}>CoordinatesButton</button>
        )
    }

}