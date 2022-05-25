import styled from 'styled-components';

export const FooterContainer = styled.footer`
	padding: ${(props) => props.theme.spacing.primary};
	background-color: ${(props) => props.theme.color.primary};
	text-align: center;
`;

export const FooterText = styled.p`
	color: ${(props) => props.theme.color.secondary};
`;

export const FooterLink = styled.a`
	color: ${(props) => props.theme.color.secondary};
	line-height: ${(props) => props.theme.lineHeight.primary};

	&:hover,
	&:focus {
		background-color: ${(props) => props.theme.color.secondary};
		color: ${(props) => props.theme.color.primary};
		transition: all ${(props) => props.theme.timing.primary};
	}

	@media screen and (min-width: 1024px) {
		font-size: ${(props) => props.theme.fontSize.secondary};
	}
`;
