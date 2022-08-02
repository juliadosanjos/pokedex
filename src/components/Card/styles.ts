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
    background-color: #fff;
    cursor: pointer;
    transition: height 0.2s ease;
    margin: 20px 0;
    padding: 20px;

    &.card--expanded {
        height: 270px;
        justify-content: flex-start;
        animation: expand 0.5s ease;

        &.infoPokemon {
            
        }
    }

    h2 {
        margin-top: 10px;
        text-transform:capitalize;
    }

`

export const CardContainerStyled = styled.div`
    height: 200px;
    width: 20%;
    margin: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`