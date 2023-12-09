import React, { useState } from 'react';



const UserEducation = () => {

  const [showEducation, setShowEducation] = useState(true);



  const handleClose = () => {

    setShowEducation(false);

  };



  return (

    showEducation && (

      <div id="userEducation" style={educationStyle}>

        <h2>Understanding Toll Calculations</h2>

        <p>

          Toll calculations are based on factors such as distance, vehicle type,

          and toll rates. Our application uses the TollGuru API to provide

          accurate toll information for your route.

        </p>

        {/* Include more educational content as needed */}

        <button onClick={handleClose} style={closeButtonStyle}>

          Close

        </button>

      </div>

    )

  );

};



const educationStyle = {

  position: 'fixed',

  top: '50%',

  left: '50%',

  transform: 'translate(-50%, -50%)',

  padding: '20px',

  background: '#fff',

  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',

  borderRadius: '5px',

  zIndex: '999',

};



const closeButtonStyle = {

  marginTop: '10px',

  padding: '8px 16px',

  background: '#007BFF',

  color: '#fff',

  border: 'none',

  borderRadius: '4px',

  cursor: 'pointer',

};



export default UserEducation