import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100vh;
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`