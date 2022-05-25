import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
}

:root{
    --primary: #ff557f;
    --primary-focus: #ff427f;
    --primary-negative: #59323f;
    --grey-0: #f8f9fa;
    --grey-1: #868e96;
    --grey-2: #343b41;
    --grey-3: #212529;
    --grey-4: #121214;
    --negative: #e83f5b;
    --sucess: #3fe864;
    --black: #000;
    --white: #fff;
}

html, body{
    overflow-x: hidden;
}

body{
    background: var(--grey-4);
    color: var(--grey-0);
}

body, input, button{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
}

h1,h2,h3,h4,h5,h6{
    font-weight: 700;
}

p{
    color: var(--grey-1);
    font-size: 12px;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}
`;
export default GlobalStyle;
