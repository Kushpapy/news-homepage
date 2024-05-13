import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


:root {
  /* Indigo */
 

&, &.light-mode{
  --Soft-orange: hsl(35, 77%, 62%);
--Soft-red: hsl(5, 85%, 63%);
--Off-white: hsl(36, 100%, 99%);
--Grayish-blue: hsl(233, 8%, 79%);
--Dark-grayish-blue: hsl(236, 13%, 42%);
--Very-dark-blue: hsl(240, 100%, 5%);
}


  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Inter", sans-serif;
  color: var(--color-grey-500);
  min-height: 100dvh;
  padding: 10rem;
  line-height: 1.5;
  font-size: 1.6rem;
}

#root{
    max-width: 144rem;
    margin: 0 auto;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  //hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}




`;

export default GlobalStyle;
