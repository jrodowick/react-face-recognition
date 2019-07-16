import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageURL, box }) => {

  return (
    <div className='center ma'>
      <div className='absolute'>

        <img id="input-image" alt='' src={imageURL} width='500px' height='auto'/>

        {box.map((name, index) => {
          return (
            <div key={index}
                 className='bounding-box'
                 style={{
                   top: box[index].topRow,
                   right: box[index].rightCol,
                   bottom: box[index].bottomRow,
                   left: box[index].leftCol}}></div>
          )
        })}

      </div>
      {/* <p className='relative' style={{bottom:0}}>Number of faces: {box.length} </p> */}


    </div>
  )
}

export default FaceRecognition;
