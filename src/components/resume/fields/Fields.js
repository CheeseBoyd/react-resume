import React from 'react';
import styled from 'styled-components';

// background-image: url("https://ps.w.org/under-construction-page/assets/screenshot-18.png?rev=1635810");
// background-attachment: scroll;
// background-size: cover;
// height: 100%;
// color: white;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    margin-top: 1rem;
    border: 1px solid red;
    align-items: flex-start;
`;

const StyledListItem = styled.li`
    list-style: none;
    border: 1px solid black;
    margin-bottom: 0.8rem;
    padding-left: 2rem;
`;

class Fields extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <StyledList>
                <StyledListItem>
                    <span>Link for Experience</span>
                </StyledListItem>

                <StyledListItem>
                    <span>Link for Education</span>
                </StyledListItem>

                <StyledListItem>
                    <span>Link for Skills</span>
                </StyledListItem>                
            </StyledList>
        )
    }
}

export default Fields;