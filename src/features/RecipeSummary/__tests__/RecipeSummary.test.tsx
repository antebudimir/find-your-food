import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RecipeSummary, {
	RecipeSummaryProps,
	createList,
} from '../RecipeSummary';

const props: RecipeSummaryProps = {
	label: 'Test label',
	image: 'wwww.imagesource.com/image-1',
	mealType: 'Exotic meal',
	ingredientLines: ['Ingredient 1, Ingredient 2'],
	totalTime: '20',
};

const renderRecipeSummary = (props: RecipeSummaryProps) => {
	const { asFragment } = render(
		<ThemeProvider theme={variables}>
			<RecipeSummary {...props} />
		</ThemeProvider>,
	);

	return { fragment: asFragment() };
};

describe('<RecipeSummary /> component', () => {
	test('if the Component matches snapshot', () => {
		const { fragment } = renderRecipeSummary(props);
		expect(fragment).toMatchSnapshot();
	});

	test('should pass and render title and image props', () => {
		renderRecipeSummary(props);

		const summaryTitle = screen.getByTestId('Test label');
		expect(summaryTitle).toHaveTextContent('Test label');

		const summaryImage = screen.getByAltText('Test label');
		expect(summaryImage).toHaveAttribute('src', 'wwww.imagesource.com/image-1');
	});
});

describe('function createList(items)', () => {
	test('if the expected input returns expected output', () => {
		const expectedInput = ['Item 1', 'Item 2', 'Item 3'],
			expectedOutput = [
				<li key="Item 1">Item 1</li>,
				<li key="Item 2">Item 2</li>,
				<li key="Item 3">Item 3</li>,
			];

		const list = createList(expectedInput);
		expect(list).toStrictEqual(expectedOutput);
	});

	test('if the unexpected input returns expected output', () => {
		const unexpectedInput = [{ item: 1 }, { item: 2 }, { item: 3 }],
			expectedOutput = [
				<li key="Item 1">Item 1</li>,
				<li key="Item 2">Item 2</li>,
				<li key="Item 3">Item 3</li>,
			];

		const list = createList(unexpectedInput);
		expect(list).not.toStrictEqual(expectedOutput);
	});
});
