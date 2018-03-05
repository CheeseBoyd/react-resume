import React from 'react';
import HeaderCard from './headerCard/HeaderCard';
import Summary from './summary/Summary';
import './Homepage.css';
import styled from 'styled-components';


const StyledMain = styled.div`
    border: 1px solid black;
    display: grid;
    grid-template-column: repeat(12, 1fr);
    grid-template-row: 1fr 1fr 300px;
    min-height: 800px;
`;

// grid-template: minmax(300px, 400px) 1fr / repeat(12, 1fr);

/*
const Styledobjective = styled.div`
    grid-column: 1 /  span 12;
    border: 1px solid green;
`;
*/


const Styledsummary = styled.div`
    grid-column: 1 / span 12;
    border: 1px solid salmon;
`;

const Styledcard = styled.div`
    grid-column: 1 /  span 12;
    border: 1px solid green;
`;



const Homepage = () => {
    return (
        <StyledMain>
            <Styledcard>
                <HeaderCard 
                imageLink={'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_80%2Cw_300/MTIwNjA4NjMzNTM4NTEyMzk2/leonardo-da-vinci-40396-1-402.jpg'}
                name={'Lorem Ipsum Dela bower III'}
                objective={'Lorem ipsum bown lorn dolor fati lagor mi torem mar su fagani munitori formotor fati Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nobis ratione? Dolor aperiam aspernatur doloribus dolores placeat voluptas a nisi.'} 
                 />
            </Styledcard>
            <Styledsummary>
                <Summary/>
            </Styledsummary>
        </StyledMain>
    )
}

export default Homepage;