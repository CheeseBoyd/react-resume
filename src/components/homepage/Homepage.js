import React from 'react';
import HeaderCard from './headerCard/HeaderCard';
import Summary from './summary/Summary';
import Footer from './footer/Footer';
import styled from 'styled-components';
import Resume from '../resume/Resume';
import { Link } from "react-router-dom";


const StyledMain = styled.div`
    border: 1px solid black;
    display: grid;
    grid-template-column: repeat(12, 1fr);
    grid-template-row: 1fr 1fr 300px;
    min-height: 800px;
`;

const Styledsummary = styled.div`
    grid-column: 1 / span 12;
    border: 1px solid salmon;
`;

const Styledcard = styled.div`
    grid-column: 1 /  span 12;
    border: 1px solid green;
`;

const Styledfooter = styled.footer`
    grid-column: 1 / span 12;
    border: 1px solid red;
`;

const summaryObj = {
    "Lorem Ipsum": ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo harum quam ipsa alias molestiae cumque tenetur placeat obcaecati veniam impedit ab, sit, enim sed suscipit! Ratione quod rem enim, repudiandae sit sed quae mollitia iure quidem eum aspernatur, dignissimos minus sunt? Ut reiciendis nostrum atque rerum temporibus perspiciatis est voluptatum architecto?","Sed at condimentum nisl. Aenean lob","i, quis tempor ante pellentesque ac. Cras vitae tempus nisl, non iaculis turpis. Cras non rutrum elit, sed malesuada lacus. Aenean ullamcorper, ante et feugiat molestie, massa arcu tincidunt lectus, et fermentum orci elit quis libero. Mauris risus neque, dignissim sit amet nibh ac, pellentesque interdum metus. Vestibulum non dui urna.","ras id tortor tempus, dignissim dui et, fringilla leo. Nunc at lorem tempus, ullamcorper nibh et, suscipit sem. Quisque nec leo enim. "],
    "Donec eget": ["amet consectetur adipisicing elit. Ipsum explicabo harum quams neque, sed eleifend ", "Quisque tincidunt luctus mollis. Donec pellentesque vel neque molestie cursus. Mauris lobortis turpis quam, sed finibus"],
    "Donec of lectus ": ["The Vestibulum vulputate, ante eu suscipit scelerisque, nunc urna tincidunt leo, ut vehicula turpis urna auctor neque. Morbi iaculis lorem ut libero cursus facilisis.", "Tonec pellentesque vel neque molestie cursus"],
    "consectetur of colors": ["pretium nisi id, mollis eros. Cras id tortor tempus, dignissim dui et, fringilla leo. Nunc at lorem tempus, ullamcorper nibh et, suscipit sem. Quisque nec leo enim. Duis ultrices, justo a congue ultrices, massa justo suscipit purus, sit amet ultrices ipsum turpis sit amet augue. ", "amet", "ultrices", "suscipit"],
    "ante of scelerisque colors": ["dolor sit, amet consectetur adipisicing elit", "Vestibulum vulputate, ante eu suscipit scelerisque, nunc urna tincidunt leo, ut vehicula turpis urna auctor neque. Morbi iaculis lorem ut libero cursus facilisis. Donec lectus augue, elementum dictum leo vitae, blandit pretium ante. Donec sollicitudin, metus vel maximus commodo, erat nibh venenatis augue, id sodales augue erat vel metus. Donec non viverra lorem, vel tempor dolor. In malesuada, orci sed elementum faucibus, dolor erat eleifend tellus, non consequat massa nulla quis nibh. Aliquam eu risus facilisis, accumsan risus a, vulputate eros. Integer faucibus odio nec euismod aliquam. Morbi aliquet nec mauris eu feugiat. Nullam lorem ante, consectetur in est quis, blandit dapibus magna. In nec tincidunt ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus et vestibulum diam. Phasellus congue ex quis enim vulputate egestas."],
}

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
                <Summary summary={summaryObj} title={'Lorem Dipsum'} />
            </Styledsummary>
            <Styledfooter>
                <Link to="/resume">Resume</Link>
                <Footer/>
            </Styledfooter>
        </StyledMain>

    )
}

export default Homepage;