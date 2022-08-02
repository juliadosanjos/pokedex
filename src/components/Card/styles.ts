import styled, { css } from "styled-components";

interface Props {
    isOpen: boolean;
}

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

export const InfoPokemon = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: display 0.2s ease;
    display: ${p => p.isOpen ? 'block' : 'none'};

    div {
        h2 {
            text-decoration: underline;
            margin-bottom: 3px;
        }
        h2, p {
            font-size: xx-small;
            font-weight: bold;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    img {
        height: 100%;
    }
`