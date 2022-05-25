import styled from 'styled-components';

export const RecipesContainer = styled.section`
	display: grid;
	place-items: center;

	@media screen and (min-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
		gap: ${(props) => props.theme.spacing.tertiary};
	}

	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
