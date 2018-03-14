import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledAppbar = styled.header`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    a {color: white;}
    a: hover {color: #f7ce3e;}
`;

const AppBar = (props)=>{

    const spanStyle={
        "paddingLeft": "1.5rem",
    }

    const linkStyle={
        "textDecoration": "none",
        "marginLeft": "auto",
        "paddingRight": "1.5rem",
    }

    return(
    <StyledAppbar className="background-red-warm" >
        <span style={spanStyle}>{props.title}</span>
        <Link style={linkStyle} to={"/"}><i class="material-icons">keyboard_backspace</i></Link>
    </StyledAppbar>
    )
}


export default AppBar;