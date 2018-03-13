import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const capitalizeFirstLetter = (str)=>{
    let word = str.toLowerCase();
    let upperCase = word.charAt(0);
    let restOfword = word.slice(1);
    return upperCase.toUpperCase() + restOfword;
}

const Styledmain = styled.div`
    color: black;
    display: grid;
    grid-template-columns: 1rem 1fr 1fr 1fr 1rem ;
    min-height: 300px;
    width: 100%;
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

const Styledlist = styled.ul`
    flex-basis: 50%;
    box-shadow: 0px 2px grey;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    margin-bottom: 2rem;
    @media (min-width: 576px) { flex-direction: column; }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { flex-direction: column; }
    @media (min-width: 1200px) { flex-direction: column; }
`;
const StyledlistItem = styled.li`
    margin-bottom: 1rem;
    margin-left: 1.5rem;
    span {font-size: 0.8rem;}
    @media (min-width: 576px) { span {font-size: 0.8rem;} }
    @media (min-width: 768px) { }
    @media (min-width: 992px) { span {font-size: 1rem;} }
    @media (min-width: 1200px) { span {font-size: 1rem;} }
`;


const Styledtitle = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 1.5em;
    grid-column: 2 / span 3;
    text-align: center;
    justify-content: center;
`;

const Items = ({item})=>{
    return(
        <StyledlistItem>
            <span>{item}</span>
        </StyledlistItem> 
    )   
}

const Lists = (props) =>{
const mapper = (array)=>(
    array.map(items => (<Items item={items} key={array.indexOf(items)}/>))
)
// <i class="material-icons">location_city</i>
// <i class="material-icons">school</i>
// <i class="material-icons">check</i>
// <i class="material-icons">work</i>
// <i class="material-icons">code</i>
return(
    <Styledlist>
        <h5>{props.listName} {props.icon}</h5>
        {mapper(props.item)}              
    </Styledlist>
    ) 
}

const Summary = ({summary, title}) =>{
const mapper = (array)=>(
    array.map(element =>{
        switch (capitalizeFirstLetter(element[0])) {
            case "Experience":
                return(<Lists icon={<i className="material-icons">work</i>} listName={capitalizeFirstLetter(element[0])} item={element[1]} key={array.indexOf(element)} />);
            case "Skill":
                return(<Lists icon={<i className="material-icons">code</i>} listName={capitalizeFirstLetter(element[0])} item={element[1]} key={array.indexOf(element)} />);
            case "Education":
                return(<Lists icon={<i className="material-icons">school</i>} listName={capitalizeFirstLetter(element[0])} item={element[1]} key={array.indexOf(element)} />);    
            default:
            return(<Lists listName={capitalizeFirstLetter(element[0])} item={element[1]} key={array.indexOf(element)} />);
        }    
    })
)
const entries = Object.entries(summary);
    return(
        <Styledmain className="font-black">
            <Styledtitle>
                <h3>{title}</h3>
            </Styledtitle>
            <StyledlistContainer>
                {
                    mapper(entries)
                }
            </StyledlistContainer>

        </Styledmain>
    )
}


Summary.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.shape({
        education: PropTypes.array,
        experience: PropTypes.array,
        skills: PropTypes.array,
    }).isRequired

};


export default Summary