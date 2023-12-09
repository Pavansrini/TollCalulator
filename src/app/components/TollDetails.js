import React from 'react';



const TollDetails = ({ tollInfo }) => {

  return (

    <div id="tollDetails" style={tollDetailsStyle}>

      <h3>Toll Information</h3>

      <p>

        <strong>Cost:</strong> {tollInfo.cost}

      </p>

      {/* Include additional toll details as needed */}

    </div>

  );

};



const tollDetailsStyle = {

  background: '#fff',

  padding: '10px',

  borderRadius: '5px',

  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',

  textAlign: 'left',

};



export default TollDetails;