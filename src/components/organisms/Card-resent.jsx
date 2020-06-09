import React from 'react';

import FileIcon from '../../../dist/icons/file.png'

const Card = (props) => {
    return (
        <div className="card">
            <div className="left">
                <h3 className="title">
                    Pelvis
                </h3>
                <p className="specials">Bijzonderheden:</p>
                <span>- N.v.t.</span>

                <strong>Laats geopend: 2 Dagen geleden</strong>
            </div>
            <div className="right">
                <p>Geslacht: <span>V</span></p>

                <div className='type'>
                    <div className="left">
                        <span>CT</span> 
                        <p>scan</p>
                    </div>
                    <div className="right">
                        <img src={FileIcon}></img>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
};

export default Card;