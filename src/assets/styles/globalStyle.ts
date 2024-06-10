"use client";

/* The code is importing the `createGlobalStyle` function from the `styled-components` library. */
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        --line-color: #e5e7eb;
    }

    html.dark {
        --line-color: rgba(255, 255, 255, 0.2);
    }

    .borderBlack {
        @apply border border-black/10;
    }

    ::-webkit-scrollbar {
        display: none;
    }
`;
