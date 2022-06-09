import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RecipeLine, { RecipeLineProps } from '../RecipeLine';

const props: RecipeLineProps = {
	label: 'Test label',
	recipeDetail: 'Recipe detail',
};

const renderRecipeLine = (props: RecipeLineProps) => {
	const { asFragment } = render(
		<ThemeProvider theme={variables}>
			<RecipeLine {...props} />
		</ThemeProvider>,
	);

	return { fragment: asFragment() };
};

describe('<RecipeLine /> component', () => {
	test('if props are being passed', () => {
		renderRecipeLine(props);

		const recipeLine = screen.getByTestId('recipe-line');
		expect(recipeLine).toHaveTextContent('Test label: Recipe detail');
	});

	test('if the Component matches snapshot', () => {
		const { fragment } = renderRecipeLine(props);
		expect(fragment).toMatchSnapshot();
	});
});
