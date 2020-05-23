import React from 'react';
import Model from '../components/organisms/Model';
import Back from '../components/atoms/Back';


const Interactive = () => {
    return (
        <div className="container">
            <div className="interactive">
                <Back />
                <Model />
            </div>
        </div>
    )
}

export default Interactive;