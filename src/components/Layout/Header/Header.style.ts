import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
	box-shadow: ${(props) => props.theme.shadow.primary};
	padding: ${(props) => props.theme.spacing.primary};
	background-color: ${(props) => props.theme.color.primary};
	color: ${(props) => props.theme.color.secondary};
	text-align: center;

	@media screen and (min-width: 1024px) {
		padding: ${(props) => props.theme.spacing.tertiary};
	}
`;

export const HeaderTitle = styled.h1`
	text-shadow: ${(props) => props.theme.shadow.tertiary};
`;

export const HeaderLink = styled(Link)`
	color: inherit;
`;
