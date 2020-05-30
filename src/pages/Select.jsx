import React from 'react';

import undo from '../../dist/icons/undo.png'


const Select = () => {
    return (
        <div className="container">
            <div className="select">
                <div className="select__content-wrapper">
                    <div className="select__head-wrapper">

                        <div className="title">
                            <h1>Selecteer lichaamsdeel</h1>
                        </div>

                        <div className="back">
                            <img src={undo} alt='undo'></img>
                        </div>

                        <div className="text">
                            <p>Klik op het lichaam om <br /> een interactieve weergave te openen van dit onderdeel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Select;