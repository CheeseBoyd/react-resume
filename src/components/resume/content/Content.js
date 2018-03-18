import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: grid;
    grid-auto-rows: minmax(400px, 1fr);
    margin-top: 1rem;
    font-size: 1rem;
    border: 1px solid red;
    max-width: 1200px;
`;

const SytledTitle = styled.h2`
    margin-left: 2rem;
    margin-bottom: 1rem;
`;

const StyledParagraphs = styled.p`
    margin-left: 2rem;
    maring-left: 3rem;
    margin-bottom: 4rem;
`;


const Content = ({data, optionalElement})=>{
    return(
        <StyledContainer>
            <article>
                <SytledTitle>Lorem</SytledTitle>
                <StyledParagraphs>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quasi minus neque, mollitia quae recusandae delectus voluptas nostrum vero cum, harum nulla voluptatum? Ipsa alias quas atque libero officia incidunt temporibus nisi reprehenderit repudiandae totam obcaecati blanditiis corporis non praesentium possimus, excepturi odio minus. Debitis qui quaerat quis libero iste!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, illum dicta ab saepe error iste recusandae nobis. Assumenda delectus provident id distinctio laborum consectetur molestiae earum aperiam pariatur possimus quasi, a, impedit, sed nam at maxime. Nobis vel ad itaque! Provident debitis unde accusantium a, enim velit, sequi ipsa minima, id repellendus corrupti ab est! Corrupti perspiciatis est magnam vitae qui, impedit delectus earum molestiae harum eveniet, exercitationem quaerat neque! Debitis itaque esse molestiae perspiciatis sapiente, quo neque ullam exercitationem magnam totam libero doloribus sint nesciunt ducimus incidunt officiis voluptas porro tenetur magni assumenda enim? Sed atque temporibus eius voluptate facere quo aperiam sunt, doloribus dignissimos autem magnam odio, eos distinctio quod numquam aspernatur iusto quas corporis totam. Ipsa deserunt voluptatum ratione. Eveniet, explicabo. A hic aliquam sapiente cumque ducimus corporis culpa quo mollitia corrupti rem cum reprehenderit, ea amet delectus eius voluptatem praesentium! Ea eum laborum, aperiam asperiores vitae vel voluptate voluptatum hic quae reprehenderit sequi qui quas ipsa amet culpa reiciendis unde et alias soluta odio voluptatibus totam eos porro at! Sunt deserunt maxime veniam recusandae pariatur incidunt odit? Non saepe nobis nesciunt dolore excepturi eveniet voluptate, repudiandae laudantium consectetur minus hic animi! Soluta laudantium quae in quo.
                {optionalElement}
                </StyledParagraphs>
            </article>

            <article>
                <SytledTitle>Lorem</SytledTitle>
                <StyledParagraphs>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quasi minus neque, mollitia quae recusandae delectus voluptas nostrum vero cum, harum nulla voluptatum? Ipsa alias quas atque libero officia incidunt temporibus nisi reprehenderit repudiandae totam obcaecati blanditiis corporis non praesentium possimus, excepturi odio minus. Debitis qui quaerat quis libero iste!
                {optionalElement}
                </StyledParagraphs>
            </article>                               

        </StyledContainer>
    )
}

export default Content;