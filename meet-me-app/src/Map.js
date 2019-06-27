import React from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

export default class Map extends React.Component {

    state = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 55.86043,
            longitude: -4.26164,
            zoom: 16,
            style: 'mapbox://styles/venio/cje3bx7jm50yj2rly99cmjt33',
        },

    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapboxApiAccessToken = {'pk.eyJ1Ijoic2FyYWhob3VjaGVpbWkiLCJhIjoiY2p4ZWp6dnY3MGNkNjN6czBrY2RuYml6ZyJ9.oN4O4hk4xXdx84KQRO7gSA'}
                onViewportChange={(viewport) => this.setState({viewport})}
            />
        );
    }
}
