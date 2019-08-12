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
                    <p className="f3">{'Give it a try!'}</p>
                )
                }
                { box.map((item, index) => (
                    <div className='bounding-box' style={{top: item.toprow, right: item.rightcol, bottom: item.bottomrow, left: item.leftcol}} key={index}></div>
                ))}
            </div>
        </div>
    );
}

export default FaceRecognition;