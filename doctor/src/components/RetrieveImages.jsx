import React, { useState } from 'react';
import './retrieve.css'; // Import your CSS file

const RetrieveImages = () => {
  const [dataToRetrieve, setDataToRetrieve] = useState('');
  
  const handleRetrieveImages = () => {
    // Logic to retrieve data based on dataToRetrieve
    alert(`Retrieving data for: ${dataToRetrieve}`);
    // You can add actual logic here to fetch data using APIs or other methods
  };

  return (
    <div className='retrieve-images-container'>
      <h2>Enter email of patient</h2>
      <div className='input-group'>
        <input
          type='text'
          placeholder='Enter data to retrieve'
          value={dataToRetrieve}
          onChange={(e) => setDataToRetrieve(e.target.value)}
        />
      </div>
      <div className='button-group'>
        <button className='retrieve-images-button' onClick={handleRetrieveImages}>
          Retrieve Images
        </button>
        <button className='retrieve-images-button' onClick={handleRetrieveImages}>
          Retrieve Videos
        </button>
        <button className='retrieve-images-button' onClick={handleRetrieveImages}>
          Retrieve Wordfile
        </button>
      </div>
    </div>
  );
};

export default RetrieveImages;
