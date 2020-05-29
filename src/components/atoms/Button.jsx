import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={props.link}>
            <button onClick={props.onClick} className={props.className}>
                {props.text}
            </button>
        </Link>
    )
};

export default Button;
