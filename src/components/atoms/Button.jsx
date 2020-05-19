import React from 'react';

const Button = (props) => {
    return(
        <button className="button">
            { props.text }
        </button>
    )
};

export default Button;