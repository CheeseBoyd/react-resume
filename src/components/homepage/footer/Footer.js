import React from 'react';
import styled from 'styled-components';
import LinkToResume from '../buttons/LinkToResume';
// import PropTypes from 'prop-types';

const StyledFooter = styled.footer`
    color: white;
    min-width:100%;
    display: flex;
    min-height: 145px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Footer = ({email})=>{
    return(
        <div>
        <LinkToResume path={'/resume'} />
        <StyledFooter className="background-red-cool">
            <span>{email}</span>
            
        </StyledFooter>
        </div>
    )
}

export default Footer;