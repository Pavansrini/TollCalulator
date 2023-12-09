import React, { useState } from 'react';

import UserEducation from '../components/UserEducation';

import Map from '../components/Map';  // Import other components as needed



const Home = () => {

  const [routePolyline, setRoutePolyline] = useState('');

  const [tollData, setTollData] = useState([]);



  const calculateToll = async () => {

    try {

      // ... (fetch toll info and update state)

    } catch (error) {

      console.error('Error calculating toll:', error);

    }

  };



  return (

    <div>

      {/* User Education Component */}

      <UserEducation />

      <Map routePolyline={routePolyline} />

      {/* Your existing components */}

      <button onClick={calculateToll}>Calculate Toll</button>

      <Map routePolyline={routePolyline} tollData={tollData} />

    </div>

  );

};



export default Home;