import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import {Marker} from 'react-map-gl';

export default class MapDif extends Component {

    state = {
        viewport: {
            width: "100%",
            height: "50vh",
            latitude: 55.8607,
            longitude: -4.2605,
            zoom: 14
        }
    };

    marker = () => {
        return (
            <Marker latitude={55.861055} longitude={-4.259181}>
                <div>Marker</div>
            </Marker>
        );
    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapboxApiAccessToken = {'pk.eyJ1Ijoic2FyYWhob3VjaGVpbWkiLCJhIjoiY2p4ZWp6dnY3MGNkNjN6czBrY2RuYml6ZyJ9.oN4O4hk4xXdx84KQRO7gSA'}
                onViewportChange={(viewport) => this.setState({viewport})}
            >
                {this.marker}
            </ReactMapGL>
        );
    }
}