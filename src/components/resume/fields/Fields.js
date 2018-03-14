import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    background-image: url("https://ps.w.org/under-construction-page/assets/screenshot-18.png?rev=1635810");
    background-attachment: scroll;
    background-size: cover;
    height: 100%;
    color: white;





    display: flex;
    justify-content: center;
    align-ites: flex-start;
`;

const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    align-ites: flex-start;
`;

const StyledListItem = styled.li`
    list-style: none;
`;

class Fields extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <StyledContainer>
            <StyledList>
                <StyledListItem>
                    I'll be working on this soon
                </StyledListItem>
            </StyledList>
            </StyledContainer>
        )
    }
}

export default Fields;