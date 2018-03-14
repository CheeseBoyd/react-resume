import React from 'react';
import HeaderCard from './headerCard/HeaderCard';
import Summary from './summary/Summary';
import Footer from './footer/Footer';
import styled from 'styled-components';


const StyledMain = styled.div`
    display: grid;
    grid-template-column: repeat(12, 1fr);
    grid-template-row: 1fr 1fr 300px;
    min-height: 800px;
`;

const Styledsummary = styled.div`
    grid-column: 1 / span 12;
`;

const Styledcard = styled.div`
    grid-column: 1 /  span 12;
`;

const Styledfooter = styled.footer`
    grid-column: 1 / span 12;
`;

// Test data
const summaryObj = {
    "experience": ["2015-2016 Worked as a Customer Service Representative", "2016-2017 Worked as a Front End Developer for Manilla Bulletin"],
    "skill": ["Front-end web development with Javascript, HTML,CSS and Front-end frameworks (i.e React)", "Backend web development with node.js and Express.js", "Multi role developer and autodidact (self-teaching)"],
    "education": ["2001-2007 Graduate of Elementary LJCS Elementary", "2007-2011 Graduate of High School at Siena College of Taytay", "2011-2015 Graduate of Bachelor of Science major in Operations Management at Far Eastern Universiy"],

}

const Homepage = () => {
    return (
        <StyledMain>
            <Styledcard>
                <HeaderCard 
                imageLink={'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_80%2Cw_300/MTIwNjA4NjMzNTM4NTEyMzk2/leonardo-da-vinci-40396-1-402.jpg'}
                name={'Aaron James Lanot'}
                objective={'A young web developer. Honing his skills for full-stack web development. Self-motivated and self-reliant'} 
                 />
            </Styledcard>
            <Styledsummary>
                <Summary summary={summaryObj} title={'Breif Overview'} />
            </Styledsummary>
            <Styledfooter>
                <Footer email={'ajlanot@gmail.com'}/>
            </Styledfooter>
        </StyledMain>

    )
}

export default Homepage;