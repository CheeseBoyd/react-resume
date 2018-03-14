import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
    display: grid;
    grid-template-columns: 320px 1fr;
    min-height: 720px;
`;

const StyledTableOfContent = styled.div `
    height: 100%;
    border: 1px solid black;
`;

const StyledContent = styled.div`
    height: 100%;
    border: 1px solid red;
`;

const Resume = (props) =>{
    return(
        <StyledMain>
            <StyledTableOfContent>
                Table of Content
            </StyledTableOfContent>
                
            <StyledContent>
            Content: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio accusantium molestias, commodi placeat, ullam nostrum vitae, maxime quia veritatis deleniti earum libero odit quaerat cum!
            </StyledContent>
        </StyledMain>
    )
}

export default Resume;