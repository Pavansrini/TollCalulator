import React from 'react';

import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';

import L from 'leaflet';

import polyline from '@googlemaps/polyline-codec';



const Map = ({ routePolyline }) => {

  // Parse the routePolyline and convert it into LatLng array

  const decodedRoute = parsePolyline(routePolyline);



  const center = decodedRoute.length > 0 ? decodedRoute[0] : [0, 0];



  return (

    <MapContainer center={center} zoom={13} style={{ width: '100%', height: '400px' }}>

      <TileLayer

        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

      />



      {/* Display the route polyline */}

      <Polyline positions={decodedRoute} color="blue" />



      {/* Integrate markers along the route with toll information */}

      {decodedRoute.map((latLng, index) => (

        <Marker key={index} position={latLng} icon={customIcon}>

          <Popup>

            Toll Information

            {/* Include toll details like cost, additional info, etc. */}

          </Popup>

        </Marker>

      ))}

    </MapContainer>

  );

};



// Helper function to parse polyline

const parsePolyline = (polylineString) => {

  const decoded = polyline.decode(polylineString);

  return decoded.map((point) => [point[0], point[1]]);

};



// Custom marker icon (customize as needed)

const customIcon = new L.Icon({

  iconUrl: 'marker-icon.png',

  iconSize: [25, 41],

  iconAnchor: [12, 41],

  popupAnchor: [1, -34],

  tooltipAnchor: [16, -28],

  shadowUrl: 'marker-shadow.png',

  shadowSize: [41, 41],

});



export default Map;