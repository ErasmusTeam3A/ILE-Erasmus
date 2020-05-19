import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="left">
                <p className="title">
                    {props.title}
                </p>
                <span className="">Laatst geopend: {props.opend}</span>
            </div>
            <div className="right">
                <p>Geslacht: <span>{props.gender}</span></p>
            </div>
        </div>
    )
};

export default Card;