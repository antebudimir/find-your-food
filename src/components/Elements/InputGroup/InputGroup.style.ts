import styled from 'styled-components';
import { hiddenVisually } from 'styles/mixins';

export const FormControl = styled.div``;

export const FieldLabel = styled.label`
	${hiddenVisually};
`;

export const FieldInput = styled.input`
	border-radius: ${(props) => props.theme.borderRadius.primary};
	box-shadow: ${(props) => props.theme.shadow.primary};
	width: 100%;
	margin-block-end: ${(props) => props.theme.spacing.primary};
	padding: ${(props) => props.theme.spacing.primary};
	color: ${(props) => props.theme.color.tertiary};
	text-align: center;

	&:hover,
	&:focus {
		outline: ${(props) => props.theme.outline.primary};
	}

	@media screen and (min-width: 700px) {
		width: ${(props) => props.theme.sizing.inputDesktopWidth};
		margin-inline: auto;
		font-size: ${(props) => props.theme.fontSize.secondary};
	}
`;
