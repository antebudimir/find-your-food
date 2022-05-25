import styled from 'styled-components';
import { FlexLayout, FlexAlignment } from 'styles/mixins';
import Image from 'components/Elements/Image/Image';

export const RecipeDetailsContainer = styled.section`
	${FlexLayout({ direction: 'column' })};
	${FlexAlignment({ align: 'center' })};
	box-shadow: ${(props) => props.theme.shadow.primary};
	padding: ${(props) => props.theme.spacing.primary};
	width: 100%;
	color: ${(props) => props.theme.color.tertiary};
	line-height: ${(props) => props.theme.lineHeight.secondary};

	@media screen and (min-width: 700px) {
		font-size: ${(props) => props.theme.fontSize.quinary};
	}
`;

export const RecipeTitle = styled.h2`
	margin-block-end: ${(props) => props.theme.spacing.primary};
`;

export const RecipeImage = styled(Image)`
	border-radius: ${(props) => props.theme.borderRadius.primary};
	box-shadow: ${(props) => props.theme.shadow.primary};
	margin-block: ${(props) => props.theme.spacing.primary};
`;

export const ExternalLink = styled.a`
	&:hover,
	&:focus {
		background-color: ${(props) => props.theme.color.primaryLighter};
		color: ${(props) => props.theme.color.secondary};
		transition: all ${(props) => props.theme.timing.primary};
	}
`;
