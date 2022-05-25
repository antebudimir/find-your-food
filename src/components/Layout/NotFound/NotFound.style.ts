import styled from 'styled-components';

export const NotFoundContainer = styled.section`
	flex: 1; // sticky footer
	display: grid;
	place-items: start center;
	padding-block-start: ${(props) => props.theme.spacing.primary};
`;

export const NotFoundTitle = styled.h2``;
