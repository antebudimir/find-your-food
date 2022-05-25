import styled from 'styled-components';

export const ButtonContainer = styled.button`
	border-radius: ${(props) => props.theme.borderRadius.primary};
	box-shadow: ${(props) => props.theme.shadow.quaternary};
	margin-inline: auto;
	margin-block-end: ${(props) => props.theme.spacing.primary};
	padding-block: ${(props) => props.theme.spacing.primary};
	padding-inline: ${(props) => props.theme.spacing.quaternary};
	background-color: ${(props) => props.theme.color.primary};
	color: ${(props) => props.theme.color.secondary};
	font-size: ${(props) => props.theme.fontSize.primary};

	@media screen and (min-width: 1024px) {
		font-size: ${(props) => props.theme.fontSize.tertiary};
		cursor: pointer;
	}

	&:hover,
	&:focus {
		background-color: ${(props) => props.theme.color.primaryLighter};
		transition: ${(props) => props.theme.timing.primary};
	}
`;
