import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styledheader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 35px;
    min-height: 100%;
    @media (min-width: 576px) { grid-column-gap: 38px; }
    @media (min-width: 768px) { grid-column-gap: 45px; }
    @media (min-width: 992px) { grid-column-gap: 50px; }
    @media (min-width: 1200px) { grid-column-gap: 50px; }
`;

const StyledimgContainer = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    grid-column: 1 / span 2;
    padding-bottom: 20px;
    padding-top: 20px;
    @media (min-width: 576px) { grid-column: 1 / span 2; }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { grid-column: 1 / span 1; }
    @media (min-width: 1200px) { grid-column: 1 / span 1; }  
`;

const StyledheaderImage = styled.img`
    justify-self: center;
    align-self: center;
    object-fit: cover;
    border: 4px solid #f7ce3e;
    box-shadow: 3px 3px 2px 1px;
    height: 250px; width: 250px; 
    @media (min-width: 576px) { height: 300px; width: 300px; justify-self: center; }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { height: 350px; width: 350px; justify-self: end; }
    @media (min-width: 1200px) { height: 350px; width: 350px; justify-self: end; }
`;

const StyledtxtContainer = styled.div`
    display: grid;
    justify-self: center;
    width: 100%;
    height: 100%;
    grid-column: 1 / span 2;
    margin-bottom: 2rem;
    @media (min-width: 576px) { justify-self: center; grid-column: 1 / span 2; margin-bottom: 2rem; }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { justify-self: start; grid-column: 2 / span 1; }
    @media (min-width: 1200px) { justify-self: start; grid-column: 2 / span 1 }
`;

const StyledheaderText = styled.div`
    text-align:center;
    color: #EEEEEE;
    justify-self: center;
    align-self: center;
    h2 {font-size: 1.5rem;}
    text-shadow: 1px 1px 2px black;
    span {font-size: 0.9;}
    padding-left: 10px; padding-right: 10px;
    @media (min-width: 576px) { h2 {font-size: 1.5rem;} span {font-size: 0.9;} justify-self: center; padding-left: 10px; padding-right: 10px; text-align:center; }
    @media (min-width: 768px) { h2 {font-size: 25px;} span {font-size: 19px;} padding-left: 1rem; padding-right: 1rem; }
    @media (min-width: 992px) { h2 {font-size: 2rem;} span {font-size: 1rem;} justify-self: start; padding-left: 1rem; padding-right: 1rem; text-align:start;}
    @media (min-width: 1200px) { h2 {font-size: 2rem;} span {font-size: 1rem;} justify-self: start;  padding-left: 1rem; padding-right: 1rem; }
`;


const HeaderCard = (props)=>{
    return (
        <Styledheader className="background-red-warm">
            <StyledimgContainer> 
                <StyledheaderImage src={props.imageLink} className="rounded-circle" alt="round-image"/> 
            </StyledimgContainer>
           <StyledtxtContainer>
                <StyledheaderText>
                    <h2>{props.name}</h2>
                    <span>{props.objective}</span>
                </StyledheaderText>
            </StyledtxtContainer>
 
        </Styledheader>
    )
}


HeaderCard.propTypes = {
    imageLink: PropTypes.string,
    name: PropTypes.string,
    objective: PropTypes.string
};



export default HeaderCard;