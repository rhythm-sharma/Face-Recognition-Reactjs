import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className="center ma">
            <div className='image-container absolute mt2'>
                <img id='inputimage' alt={"I'm waiting for Url please Insert it!"} src={imageUrl} width="400px" height="auto" />
                <div className='bounding-box' style={{top: box.toprow, right: box.rightcol, bottom: box.bottomrow, left: box.leftcol}} >
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;