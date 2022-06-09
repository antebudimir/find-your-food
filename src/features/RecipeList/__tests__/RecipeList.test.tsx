import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RecipeList, { RecipeListProps } from '../RecipeList';

const props: RecipeListProps = {
	label: 'Test label',
	detailsList: 'Test detail',
};

const renderRecipeList = (props: RecipeListProps) => {
	const wrapper = document.createElement('section');
	wrapper.classList.add('section-wrapper');

	const { asFragment } = render(
		<ThemeProvider theme={variables}>
			<RecipeList {...props} />
		</ThemeProvider>,
		{ container: document.body.appendChild(wrapper) },
	);

	return { fragment: asFragment() };
};

describe('<RecipeList /> component', () => {
	test('if props are being passed', () => {
		renderRecipeList(props);

		const recipeList = screen.getByTestId('recipe-list');
		expect(recipeList).toHaveTextContent('Test label: Test detail');
	});

	test('if the <RecipeList /> matches the snapshot', () => {
		const { fragment } = renderRecipeList(props);
		expect(fragment).toMatchSnapshot();
	});
});
