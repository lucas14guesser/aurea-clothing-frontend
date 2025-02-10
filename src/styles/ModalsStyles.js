import styled from "styled-components";

export const ModalOverlay = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);
`
export const ModalContent = styled.div`
background-color: #FFFFFF;
padding: 20px;
border-radius: 10px;
max-width: 45rem;
width: 100%;
color: #000D20;
`
export const ModalInternalContainer = styled.div`
  text-align: start;
`
export const ModalInternalContainerFlex = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;
text-align: start;
`
export const ButtonModal = styled.button`
padding: .7rem;
width: 7rem;
background: #A87826;
border: .1rem solid #A87826;
border-radius: .7rem;
cursor: pointer;
color: #FFFFFF;
font-size: 1.1rem;

    &:hover {
        transition: 0.3s;
        background: #FFFFFF;
        color: #A87826;
    }
`
export const ButtonModalInternal = styled.button`
width: 10rem;
padding: .5rem;
margin-top: 1rem;
border: 1px solid #A87826;
cursor: pointer;
border-radius: 8px;
background: #A87826;
color: #FFFFFF;
font-size: 1.1rem;
    &:hover {
        transition: 0.3s;
        background: #FFFFFF;
        color: #A87826;
    }
`
export const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const Star = styled.span`
  font-size: 2rem;
  cursor: pointer;
  color: ${(props) => (props.$filled ? "#A87826" : "#ccc")};
  transition: color 0.2s;

  &:hover {
    color: #A87826;
  }
`
export const FlexRowModalFlexSt = styled.div`
display: flex;
flex-direction: row;
gap: .5rem;
align-items: flex-start;
`