import React, { Component } from 'react';
import { Map } from '../Map';
import { createMarkers } from '../Markers';
import { createHeatMap } from '../Heatmap';
import logo from '../../logo.svg';
import './index.css';

class App extends Component {
  render() {      
    //you must give your map a width and a height for your mapElement AND containerElement props or the map will not display 
    let mapWidth = "100%"
    const mapHeight = "600px"
      
    //the markers prop below takes an array of objects.  each object must have a key of coordinates that has a value of an object, with keys of lat and lng.
    const markerList = [
      { coordinates: {lat: 39.7392358, lng: -104.990251} },
      { coordinates: {lat: 41.8781136, lng: -87.6297982} },
    ]
      
    return (
      <div>
        <Map mapElement={ <div className='map-element' style={{ height: mapHeight, width: mapWidth}}/> }
          containerElement={ <div className='container-element' style={{ height: mapHeight, width: mapWidth}}/>}
          markers={markerList}
          createMarkers={(marker) => createMarkers(marker)}
          createHeat={() => createHeatMap()}
          className="g-map"
        />
      </div>
    )
  } 
}

export default App;
