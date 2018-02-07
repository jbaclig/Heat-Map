import React from 'react';
import { Marker } from 'react-google-maps';

export const createMarkers = (marker) => {
    
    return (
        <div>
            <Marker
                position={marker.coordinates}
                id={marker.id}
                key={marker.id}
                style={{height: "5xpx", width: "5px"}}
                className={'marker'}
            />
        </div>
    );
}