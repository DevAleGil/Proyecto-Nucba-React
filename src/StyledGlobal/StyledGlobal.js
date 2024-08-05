import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --color-1: red;
        --color-2: white;
        --color-3: black;
        --color-4: blue;

    }

    *{        
        padding: 0;
        margin: 0;        
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        
    }

    

   
    a{
        text-decoration: none;
        color: white;
    }
    li{
        list-style: none;
        color: white;
    }
  `;
