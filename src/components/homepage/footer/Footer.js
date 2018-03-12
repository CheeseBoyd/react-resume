import React, {Component} from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const StyledFooter = styled.footer`
    min-width:100%;
    display: flex;
    min-height: 288px;
    border: 1px solid green;
    justify-content: center;
    align-items: center;
`;

const Footer = (props)=>{
    return(
        <StyledFooter>
            <span>{'Footer Text'}</span>
        </StyledFooter>
    )
}

export default Footer;