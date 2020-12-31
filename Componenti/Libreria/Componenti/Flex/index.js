import styled from "styled-components"

const Flex = styled.div`
display: flex;
flex-direction: ${({direzione}) => direzione || "row"};
justify-content: ${({content}) => content || "start"};
align-items: ${({items}) => items || "flex-start"};
flex-wrap:${({wrap}) => wrap || "no-wrap"};
`

export default Flex