import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import AppBar from './navigation/AppBar';
import Fields from './fields/Fields';
import Content from './content/Content';

const StyledMain = styled.div`
    display: grid;
    grid-template-columns: 0px 1fr;
    height: 100vh;
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
    max-height: 800px;
    overflow: auto;
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

// sample data
const school1 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eum doloremque temporibus ducimus adipisci odio libero quae quaerat commodi eveniet aut tenetur, a incidunt reprehenderit!"
const school2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, cupiditate?"

const work1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
const work2 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam dolore quae expedita provident, impedit optio aliquid consectetur nobis dignissimos sit?"

const skill1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, vitae!"
const skill2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iure."

const data = {
    "education": [school1, school2],
    "experience": [work1, work2],
    "skills": [skill1, skill2],
}

// end of sample data

const dontShowYet = {
    "display": "none",
}

const underContruction = {
    "gridColumn": "1 / span 2",
}

const Resume = ({resume}) =>{
// const entries = Object.entries(resume); // return the resume key val array
    return(
        <div id="resume">
            <AppBar title={'Resume'} />
            <StyledMain>
                <StyledTableOfContent >
                    { /* /resume/:category */ }
                    <Fields />
                </StyledTableOfContent>
                    
                <StyledContent >
                { /* /resume/skills */ }
                <Content />
                </StyledContent>
            </StyledMain>
        </div>
        

    )
}

export default Resume;