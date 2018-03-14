import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    background-image: url("https://ps.w.org/under-construction-page/assets/screenshot-18.png?rev=1635810");
    background-size: cover;
    height: 100%;
    color: white;

    display: flex;
    justify-content: center;
    font-size: 1rem;
`;

const Content = (props)=>{
    return(
        <StyledContainer>
           <span>site under construction</span>
        </StyledContainer>
    )
}

export default Content;