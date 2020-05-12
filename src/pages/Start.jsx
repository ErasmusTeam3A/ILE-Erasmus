import React from 'react';
import {Link} from 'react-router-dom'

const Start = () => {
    return(
        <div>
            Dit is de startpagina
            {/* <Model/> */}
            <Link to='/modelview' >modelview</Link>
        </div>
    )
};

export default Start;
