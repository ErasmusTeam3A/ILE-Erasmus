import React from 'react';
import undo from '../../dist/icons/undo.png'
import File from "../components/organisms/Dicom-file.jsx";

const Dicom = () => {
    return (
        <div className="container">
            <div className="dicom">
                <div className="dicom__content-wrapper">
                    <div className="dicom__head-wrapper">

                        <div className="title">
                            <h1>Selecteer DICOM</h1>
                        </div>

                        <div className="back">
                            <img src={undo} alt='undo'></img>
                        </div>
                    </div>

                    <div className="files">

                        <File />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dicom