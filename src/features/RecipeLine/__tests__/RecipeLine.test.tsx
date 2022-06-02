import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import RecipeLine from '../RecipeLine';

describe('<RecipeLine /> component', () => {
	test('if it passes props correctly', () => {
		render(
			<ThemeProvider theme={variables}>
				<RecipeLine label="Test label" recipeDetail="Recipe detail" />
			</ThemeProvider>,
		);

		const recipeLine = screen.getByTestId('recipe-line');
		expect(recipeLine).toHaveTextContent('Test label: Recipe detail');
	});

	test('if the Component matches snapshot', () => {
		const { act } = TestRenderer;

		act(() => {
			const component = TestRenderer.create(
				<ThemeProvider theme={variables}>
					<RecipeLine label="Title not available" recipeDetail="" />
				</ThemeProvider>,
			);
			let tree = component.toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
});
