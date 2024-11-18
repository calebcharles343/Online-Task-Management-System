import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`:root {
  /* Light Mode Variables */
  &, &.light-mode {
    --body-bg: #e7e8e9;
    --bg-color: #f4f6f8;
    --bg-color-2: #ffffff;
    --header-color: #19202d;
    --btn2-bg-color: rgba(89, 100, 224, 0.1);
    --btn2-bg-hover-color: rgba(89, 100, 224, 0.35);
    --btn2-font-color: #5964e0;
    --job-bg-color: #ffffff;

    --backdrop-color: rgba(255, 255, 255, 0.1);
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --image-grayscale: 0;
    --image-opacity: 100%;
  }

  /* Dark Mode Variables */
  &.dark-mode {
    --body-bg: #B8B9BC;
    --bg-color: #181c28;
    --bg-color-2: #19202d;
    --header-color: #ffffff;
    --btn2-bg-color: rgba(255, 255, 255, 0.1);
    --btn2-bg-hover-color: rgba(255, 255, 255, 0.35);
    --btn2-font-color: #ffffff;
    --job-bg-color: #19202d;

    --backdrop-color: rgba(0, 0, 0, 0.3);
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }

  /* Shared Color Variables */
  --font-color: #6e8098;
  --violet: #5964e0;
  --light-violet: #939bf4;
  --very-dark-blue: #19202d;
  --midnight: #121721;
  --white: #ffffff;
  --light-grey: #f4f6f8;
  --grey: #9daec2;
  --dark-grey: #6e8098;

  --backdrop-color:
}

/* Global Reset and Transitions */
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.2s, border 0.2s;
}

html {
  font-size: 62.5%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Kumbh Sans", sans-serif;
  line-height: 2.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  background-color: var(--body-bg);
  color: var(--dark-grey);
  overflow-x: hidden;
  overflow-y: scroll;
}

input, button, textarea, select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

input::placeholder {
  opacity: 0.7;
}
`;

export default GlobalStyles;
