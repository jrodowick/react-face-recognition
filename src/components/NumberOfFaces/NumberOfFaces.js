import React from 'react';

const NumberOfFaces = ({ length }) => {

  return (
    <div className='center' style={{padding: '20px'}}>
      <p>Number of faces detected: {length}</p>
    </div>
  )
}

export default NumberOfFaces;
