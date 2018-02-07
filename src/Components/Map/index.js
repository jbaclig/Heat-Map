import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { mapStyle } from './mapStyle.js';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';

export const Map = withGoogleMap((props) => {
  let {  markers, createMarkers, createHeat } = props
  return (
    <div>
    <GoogleMap
      defaultOptions={{ styles: mapStyle }} //for custom styles
      defaultZoom={2} 
      defaultCenter={{ lat: 21.9071923, lng: -45.0368707 }}>
        {markers.map(createMarkers)}
        {createHeat()}
    </GoogleMap>
  </div>
  )
});