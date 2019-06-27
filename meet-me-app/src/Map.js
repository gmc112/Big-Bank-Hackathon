import React from 'react';

import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic2FyYWhob3VjaGVpbWkiLCJhIjoiY2p4ZWp6dnY3MGNkNjN6czBrY2RuYml6ZyJ9.oN4O4hk4xXdx84KQRO7gSA';
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

     toGeoJSON = (places_list) => {
        var geojson = {
            "type": "FeatureCollection",
            "features": []
        }

        for(var i=0;i<places_list.length;i++){
            geojson.features.push({
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [places_list[i].lng, places_list[i].lat]
                },
                "properties": {
                    "name": "Rand stuff"
                }
            })
        }

        return geojson;
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
                "data": this.toGeoJSON(this.state.places)
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
