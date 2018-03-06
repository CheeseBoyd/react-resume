import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
/*
    Shape: PropTypes.shape({
    summary: PropTypes.object,
    }),
 * Props.summary type of 
*/

const Styledmain = styled.div`
    color: white;
    display: grid;
    grid-template-columns: 1rem 1fr 1fr 1fr 1rem ;
    min-height: 300px;
    width: 100%;
    border: 1px solid black;
    @media (min-width: 576px) { grid-template-columns: 1rem 1fr 1fr 1fr 1rem; }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { grid-template-columns: 200px 1fr 1fr 1fr 200px; }
    @media (min-width: 1200px) { grid-template-columns: 200px 1fr 1fr 1fr 200px; }
`;

const StyledlistContainer = styled.div`
    grid-column: 2 / span 3;
    grid-template-columns: repeat(3, 1fr);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: column;
    @media (min-width: 576px) { flex-direction: column; }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { flex-direction: row; }
    @media (min-width: 1200px) { flex-direction: row; }
`;
/*
    display: grid;
    grid-row-gap: 20px;
 */

const Styledlist = styled.ul`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    margin-bottom: 2rem;
    @media (min-width: 576px) { flex-direction: column; }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { flex-direction: column; }
    @media (min-width: 1200px) { flex-direction: column; }
`;
/*
     border: 1px solid grey;
    padding: 0px;
    margin: 0px;
    display: grid;
    grid-column: 1 / span 3;
    @media (min-width: 576px) { grid-column: 1 / span 3; }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { grid-column: auto; }
    @media (min-width: 1200px) { grid-column: auto; }
 */

const StyledlistItem = styled.li`
    margin-bottom: 1rem;
`;
/*
    align-self: stretch;
    line-height: 150%;
    border: 1px solid grey;
    list-style: none;
    padding-left: 1em;
*/

const Styledtitle = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 1.5em;
    grid-column: 2 / span 3;
    text-align: center;
    justify-content: center;
`;



/*
    @media (min-width: 576px) { }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { }
    @media (min-width: 1200px) { }

*/

const Items = (props)=>{

    return(
        <StyledlistItem>
            <span>{props.item}</span>
        </StyledlistItem> 
    )
   
}

const Lists = (props) =>{

const mapper = (array)=>(
    array.map(items => (<Items item={items} key={array.indexOf(items)}/>))
)

const listItem = {
    
}

    return(
            <Styledlist>
                <h5>{props.listName}</h5>
                {mapper(props.item)}              
            </Styledlist>       
    )
}



const Summary = (props) =>{

 const mapper = (array)=>(
    array.map(element =>{
        return(
            <Lists listName={element[0]} item={element[1]} key={array.indexOf(element)} />
        )
        
    })
)

// Test props ----------------- >
const obj = {
    "Lorem Ipsum": ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum explicabo harum quam ipsa alias molestiae cumque tenetur placeat obcaecati veniam impedit ab, sit, enim sed suscipit! Ratione quod rem enim, repudiandae sit sed quae mollitia iure quidem eum aspernatur, dignissimos minus sunt? Ut reiciendis nostrum atque rerum temporibus perspiciatis est voluptatum architecto?","Sed at condimentum nisl. Aenean lob","i, quis tempor ante pellentesque ac. Cras vitae tempus nisl, non iaculis turpis. Cras non rutrum elit, sed malesuada lacus. Aenean ullamcorper, ante et feugiat molestie, massa arcu tincidunt lectus, et fermentum orci elit quis libero. Mauris risus neque, dignissim sit amet nibh ac, pellentesque interdum metus. Vestibulum non dui urna.","ras id tortor tempus, dignissim dui et, fringilla leo. Nunc at lorem tempus, ullamcorper nibh et, suscipit sem. Quisque nec leo enim. "],
    "Donec eget": ["amet consectetur adipisicing elit. Ipsum explicabo harum quams neque, sed eleifend ", "Quisque tincidunt luctus mollis. Donec pellentesque vel neque molestie cursus. Mauris lobortis turpis quam, sed finibus"],
    "Donec of lectus ": ["The Vestibulum vulputate, ante eu suscipit scelerisque, nunc urna tincidunt leo, ut vehicula turpis urna auctor neque. Morbi iaculis lorem ut libero cursus facilisis.", "Tonec pellentesque vel neque molestie cursus"],
    "consectetur of colors": ["pretium nisi id, mollis eros. Cras id tortor tempus, dignissim dui et, fringilla leo. Nunc at lorem tempus, ullamcorper nibh et, suscipit sem. Quisque nec leo enim. Duis ultrices, justo a congue ultrices, massa justo suscipit purus, sit amet ultrices ipsum turpis sit amet augue. ", "amet", "ultrices", "suscipit"],
    "ante of scelerisque colors": ["dolor sit, amet consectetur adipisicing elit", "Vestibulum vulputate, ante eu suscipit scelerisque, nunc urna tincidunt leo, ut vehicula turpis urna auctor neque. Morbi iaculis lorem ut libero cursus facilisis. Donec lectus augue, elementum dictum leo vitae, blandit pretium ante. Donec sollicitudin, metus vel maximus commodo, erat nibh venenatis augue, id sodales augue erat vel metus. Donec non viverra lorem, vel tempor dolor. In malesuada, orci sed elementum faucibus, dolor erat eleifend tellus, non consequat massa nulla quis nibh. Aliquam eu risus facilisis, accumsan risus a, vulputate eros. Integer faucibus odio nec euismod aliquam. Morbi aliquet nec mauris eu feugiat. Nullam lorem ante, consectetur in est quis, blandit dapibus magna. In nec tincidunt ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus et vestibulum diam. Phasellus congue ex quis enim vulputate egestas."],
}
const entries = Object.entries(obj);
// Test props < -----------------

    return(
        <Styledmain className="background-blackboard">
            <Styledtitle>
                <h3>Lorem ipsum dolor sit amet.</h3>
            </Styledtitle>
            <StyledlistContainer>
                {
                    mapper(entries)
                }
            </StyledlistContainer>

        </Styledmain>
    )
}
/*

Summary.propTypes = {

    imageLink: PropTypes.string,
    name: PropTypes.string,
    objective: PropTypes.string

};

*/

export default Summary