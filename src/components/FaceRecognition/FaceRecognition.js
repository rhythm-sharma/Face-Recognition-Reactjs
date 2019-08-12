import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box, showImage}) => {
    return(
        <div className="center ma">
            <div className='image-container absolute mt2'>
                { showImage === true && (
                    <img id='inputimage' alt={"I'm waiting for Url please Insert it!"} src={imageUrl} width="400px" height="auto" />
                )
                }
                { showImage === false && (
                    <p>{"I'm waiting for Url please Insert it!"}</p>
                )
                }
                <div className='bounding-box' style={{top: box.toprow, right: box.rightcol, bottom: box.bottomrow, left: box.leftcol}} >
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;