import React from 'react';

import DicomHip from '../../../dist/icons/dicom-pelvic.jpg'

const DicomFile = (props) => {
    return (
        <div className="dicom-file">
            <div className='image'>
                <img src= {DicomHip}></img>
            </div>
            <div className="file-name">
                <strong>Bestand:</strong>
                <h2>Pelvic.dicom</h2>
            </div>
        </div>
    )
};

export default DicomFile;