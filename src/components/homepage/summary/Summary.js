import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 20px;
`;


const Styledlist = styled.ul`
    border: 1px solid grey;
    padding: 0px;
    margin: 0px;
    display: grid;
    grid-column: 1 / span 3;
    @media (min-width: 576px) { grid-column: 1 / span 3; }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { grid-column: auto; }
    @media (min-width: 1200px) { grid-column: auto; }
`;


const StyledlistItem = styled.li`
    align-self: stretch;
    line-height: 150%;
    border: 1px solid grey;
    list-style: none;
    padding-left: 1em;
`;

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
                <div>{props.listName}</div>
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

const obj = {
    "list of numbers": [1,2,3,5],
    "List of words": ["hello", "goodbye"],
}


const entries = Object.entries(obj);
console.log(entries);


    return(
        <Styledmain className="background-blackboard">
            <Styledtitle>
                <h3>Summary</h3>
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