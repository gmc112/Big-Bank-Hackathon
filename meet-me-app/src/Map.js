import React from 'react';

import mapboxgl from 'mapbox-gl';

import MAP_STYLE from './basic-style.json';

export default class Map extends React.Component {
    constructor(props){
        super(props);
        let style = MAP_STYLE;
        this.MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic2FyYWhob3VjaGVpbWkiLCJhIjoiY2p4ZWp6dnY3MGNkNjN6czBrY2RuYml6ZyJ9.oN4O4hk4xXdx84KQRO7gSA';
        style.sources["points-source"] = {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [55.863560, -4.260230]
                        },
                        "properties": {
                            "name": "Rand stuff"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [55.861230, -4.282510]
                        },
                        "properties": {
                            "name": "Rand stuff"
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [55.873410, -4.282510]
                        },
                        "properties": {
                            "name": "Rand stuff"
                        }
                    },
                ]
            }
        }
        style.layers.push({
            "id": "points",
            "type": "symbol",
            "source": "points-source",
            "layout": {
                "icon-image": "favicon.ico",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
            }
        });
        this.state = {
            places: [
                {'lat': 55.861230, 'lng': -4.254540},
                {'lat': 55.873410, 'lng': -4.282510},
                {'lat': 55.869870, 'lng': -4.275300},
                {'lat': 55.866300, 'lng': -4.272220},
                {'lat': 55.864950, 'lng': -4.284750},
                {'lat': 55.860300, 'lng': -4.254190},
                {'lat': 55.864320, 'lng': -4.260580},
                {'lat': 55.863560, 'lng': -4.260230}
            ]
        };
    }

    componentDidMount(){
        console.log("MOUNT");
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWhob3VjaGVpbWkiLCJhIjoiY2p4ZWp6dnY3MGNkNjN6czBrY2RuYml6ZyJ9.oN4O4hk4xXdx84KQRO7gSA';
        this.map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-4.26164, 55.86043],
            zoom: 16,
        });


        this.map.on('load', () => {
            this.map.addSource('places-data', {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-4.26164, 55.86043]
                            },
                            "properties": {
                                "name": "Rand stuff"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-4.260230, 55.863560]
                            },
                            "properties": {
                                "name": "Rand stuff"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-4.282510, 55.861230]
                            },
                            "properties": {
                                "name": "Rand stuff"
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-4.282510, 55.873410]
                            },
                            "properties": {
                                "name": "Rand stuff"
                            }
                        },
                    ]
                }
            });

            this.map.loadImage('/pin.png', (error, image) => {
                if(error){
                    console.log(error);
                }
                else{
                    this.map.addImage('place', image);
                    this.map.addLayer({
                        "id": "places",
                        "type": "symbol",
                        "source": "places-data",
                        "layout": {
                            "icon-image": "place",
                            "icon-size": 0.1,
                            "text-field": "AAAA"
                        }
                    });
                }
            });
        });
    }

    render() {
        return (
            <div id="map-container" style={{"height": "500px", "width": "500px"}}>
            </div>
        );
    }
}
