import { createGlobalStyle } from 'styled-components';
import RalewayRegular from 'fonts/Raleway-Regular.woff';
import RalewayBold from 'fonts/Raleway-Bold.woff';
import RalewayExtraBold from 'fonts/Raleway-ExtraBold.woff';

export const GlobalStyles = createGlobalStyle`
@font-face {
	font-family: 'Raleway Regular';
	src: url(${RalewayRegular}) format('woff');
	font-weight: normal;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Raleway Bold';
	src: url(${RalewayBold}) format('woff');
	font-weight: bold;
	font-style: normal;
	font-display: swap;
}


@font-face {
    font-family: 'Raleway Extra Bold';
    src: url(${RalewayExtraBold}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

* {
	outline: none;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	scroll-behavior: smooth;
}

html {
    font-family: 'Raleway Regular';
	word-wrap: break-word;
}

button,
input {
	border: none;
	display: block;
}

input,
select,
textarea,
button {
	color: inherit;
	font-size: inherit;
}

input,
select,
textarea {
	font-family: inherit;
}

h1 {
    font-family: 'Raleway Extra Bold';
}

h2,
button,
a {
	font-family: 'Raleway Bold';
}

ul,
li {
	list-style: none;
}

a {
	text-decoration: none;
}

img {
	display: block;
	max-width: 100%;
}
`;
