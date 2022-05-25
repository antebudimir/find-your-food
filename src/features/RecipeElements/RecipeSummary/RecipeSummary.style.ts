import styled from 'styled-components';
import { FlexLayout, FlexAlignment } from 'styles/mixins';
import Image from 'components/Elements/Image/Image';
import { Link } from 'react-router-dom';

export const RecipeSummaryContainer = styled.section`
	${FlexLayout({ direction: 'column' })};
	${FlexAlignment({ align: 'center' })};
	box-shadow: ${(props) => props.theme.shadow.primary};
	padding: ${(props) => props.theme.spacing.primary};
	width: 100%;
	max-width: ${(props) => props.theme.sizing.summaryContainerWidth};

	:not(:first-child):not(:last-child) {
		margin-block: ${(props) => props.theme.spacing.primary};
	}

	@media screen and (min-width: 700px) {
		:not(:first-child):not(:last-child) {
			margin-block: initial;
		}
	}
`;

export const SummaryTitle = styled.h2`
	margin-block-end: ${(props) => props.theme.spacing.primary};
	color: ${(props) => props.theme.color.tertiary};
`;

export const SummaryImage = styled(Image)`
	border-radius: ${(props) => props.theme.borderRadius.primary};
	box-shadow: ${(props) => props.theme.shadow.primary};
`;

export const SummaryLink = styled(Link)`
	box-shadow: ${(props) => props.theme.shadow.primary};
	width: 100%;
	max-width: ${(props) => props.theme.sizing.summaryLinkWidth};
	border-radius: ${(props) => props.theme.borderRadius.primary};
	margin-block-start: ${(props) => props.theme.spacing.primary};
	padding: ${(props) => props.theme.spacing.secondary};
	background-color: ${(props) => props.theme.color.primary};
	color: ${(props) => props.theme.color.secondary};

	&:hover,
	&:focus {
		background-color: ${(props) => props.theme.color.primaryLighter};
		transition: background-color ${(props) => props.theme.timing.primary};
	}

	@media screen and (min-width: 700px) {
		font-size: ${(props) => props.theme.fontSize.secondary};
	}
`;
