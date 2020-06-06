import React from 'react';
import undo from '../../dist/icons/undo.png'
import File from "../components/organisms/Card-resent.jsx";

const Dicom = () => {
    return (
        <div className="container">
            <div className="recent">
                <div className="recent__content-wrapper">
                    <div className="recent__head-wrapper">

                        <div className="title">
                            <h1>Selecteer DICOM</h1>
                        </div>

                        <div className="back">
                            <img src={undo} alt='undo'></img>
                        </div>
                    </div>

                    <div className="files">

                        <input type='search' placeholder="zoeken"></input>

                        <File />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dicom