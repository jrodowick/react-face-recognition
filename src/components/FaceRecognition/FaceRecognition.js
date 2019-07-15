import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageURL, box }) => {

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id="input-image" alt='' src={imageURL} width='500px' height='auto'/>
        {/* <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div> */}


    {
      box.map((name, index) => {
        return (
          <div key={index} className='bounding-box' style={{top: box[index].topRow, right: box[index].rightCol, bottom: box[index].bottomRow, left: box[index].leftCol}}></div>
        )
      })
    }
    </div>

    </div>
  )
}

export default FaceRecognition;
