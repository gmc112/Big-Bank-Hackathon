import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Component} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

import './App.css';

function App() {

    let map = new Map();

    return (
        map.render()
    );
}

class Map extends Component {

    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        );
    }
}

export default App;
