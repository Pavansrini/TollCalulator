import axios from 'axios';



const TOLLGURU_API_BASE_URL = 'https://api.tollguru.com/v1/calculation';



export const fetchTollInfo = async (startLocation, endLocation) => {

  try {

    const response = await axios.post(`${TOLLGURU_API_BASE_URL}`, {

      source: startLocation,

      destination: endLocation,

      vehicleType: '2AxlesAuto',

      apiKey: 'YOUR_TOLLGURU_API_KEY', // Replace with your actual API key

    });



    return response.data;

  } catch (error) {

    console.error('Error fetching toll info:', error);

    throw error;

  }

};