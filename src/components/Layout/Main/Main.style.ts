import styled from 'styled-components';
import { sticky } from 'styles/mixins';

export const MainContainer = styled.main`
	${sticky};
	max-width: ${(props) => props.theme.sizing.mainContainerWidth};
	margin-inline: auto;
	padding: ${(props) => props.theme.spacing.primary};
	text-align: center;
`;
