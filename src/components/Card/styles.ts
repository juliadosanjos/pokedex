import styled from "styled-components";

export const CardStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: #222;

    h2 {
        text-transform:capitalize;
    }
`

export const CardContainerStyled = styled.div`
    height: 200px;
    width: 20%;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`