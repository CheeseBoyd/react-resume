import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const LinkToResume = ({path}) =>{
    const style={
        "fontSize": "1rem",
        "borderRadius": "0px 0px 0px 0px"
    }
    return(
        <Link style={style} className="btn btn-primary btn-lg btn-block background-blue-warm" to={`${path}`}>Proceed To Resume</Link>
    )
    
}

LinkToResume.propTypes = {
    path: PropTypes.string.isRequired,
}

export default LinkToResume;
