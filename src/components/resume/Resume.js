import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledMain = styled.div`
    display: grid;
    grid-template-columns: 0px 1fr;
    min-height: 720px;
    z-index: 2;
    @media (min-width: 576px) {grid-template-columns: 0px 1fr;}
    @media (min-width: 768px) {grid-template-columns: 320px 1fr; }
    @media (min-width: 992px) {grid-template-columns: 320px 1fr;} 
    @media (min-width: 1200px) {grid-template-columns: 320px 1fr;} 
`;

const StyledTableOfContent = styled.div `
    grid-column: 1 / span 1;
    height: 100%;
    border: 1px solid black;
    display: none;
    @media (min-width: 576px) { display: none; }
    @media (min-width: 768px) {display: block; }
    @media (min-width: 992px) {display: block;} 
    @media (min-width: 1200px) {display: block;} 
`;

const StyledContent = styled.div`
    grid-column: 1 / span 2;
    height: 100%;
    border: 1px solid red;
    @media (min-width: 576px) {grid-column: 1 / span 2;}
    @media (min-width: 768px) {grid-column: 2 / span 1;}
    @media (min-width: 992px) {grid-column: 2 / span 1;} 
    @media (min-width: 1200px) {grid-column: 2 / span 1;}
`;

const StyledAppbar = styled.header`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const AppBar = (props)=>{

    const spanStyle={
        "paddingLeft": "1.5rem",
    }

    const elementStyle={
        "marginLeft": "auto",
        "paddingRight": "1.5rem",
    }

    return(
    <StyledAppbar>
        <span style={spanStyle}>{props.title}</span>
        <Link style={elementStyle} to={"/"}>Home</Link>
    </StyledAppbar>
    )
}



const Resume = ({resume, element}) =>{
// const entries = Object.entries(resume); // return the resume key val array

    return(
        <div>
            <AppBar title={'AppBar'} />
            <StyledMain>
                <StyledTableOfContent>
                    Table of Content
                </StyledTableOfContent>
                    
                <StyledContent>
                Content: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio accusantium molestias, commodi placeat, ullam nostrum vitae, maxime quia veritatis deleniti earum libero odit quaerat cum!
                </StyledContent>
            </StyledMain>
        </div>
        

    )
}

export default Resume;