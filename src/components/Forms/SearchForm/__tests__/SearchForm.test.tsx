import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen, rerender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SearchForm, { SearchFormProps } from '../SearchForm';

const props: SearchFormProps = {
	setSearchTerm: jest.fn(),
};

const renderSearchForm = (props: SearchFormProps) => {
	const history = createMemoryHistory();

	const { asFragment } = render(
		<Router location={history.location} navigator={history}>
			<ThemeProvider theme={variables}>
				<SearchForm {...props} />
			</ThemeProvider>
		</Router>,
	);

	return { fragment: asFragment(), history };
};

// Render
describe('<SearchForm /> component', () => {
	test('Input field and button render correctly', () => {
		renderSearchForm(props);

		const input = screen.getByPlaceholderText('Enter an ingredient');
		expect(input).toBeVisible();
		expect(input).toHaveAttribute('type', 'search');

		const searchButton = screen.getByTitle('Search for meals');
		expect(searchButton).toBeVisible();
		expect(searchButton).toHaveAttribute('type', 'submit');
	});

	test('if the Component matches snapshot', () => {
		const { fragment } = renderSearchForm(props);
		expect(fragment).toMatchSnapshot();
	});
});

// Input field
describe('Input field', () => {
	test('Value updates on change', () => {
		renderSearchForm(props);

		const searchInput = screen.getByPlaceholderText('Enter an ingredient');
		userEvent.type(searchInput, 'Test search');
		expect(searchInput).toHaveValue('Test search');
	});
});

// Search button
describe('Search button', () => {
	it('should render with a red background', () => {
		renderSearchForm(props);

		const searchButton = screen.getByTitle('Search for meals');
		expect(searchButton).toHaveStyle('background-color: #d45464');
	});

	describe('Empty input field', () => {
		test('Does not submit the form', () => {
			const { history } = renderSearchForm(props),
				baseURL = '/';

			const searchButton = screen.getByTitle('Search for meals');
			userEvent.click(searchButton);
			expect(props.setSearchTerm).not.toHaveBeenCalled();
			expect(history.location.pathname).not.toMatch(baseURL + 'recipes');
		});
	});

	describe('User typed a query in the input field', () => {
		test('Submits the form, resets the input field and navigates to the recipes route', () => {
			const { history } = renderSearchForm(props),
				baseURL = '/';

			const searchInput = screen.getByPlaceholderText('Enter an ingredient');
			userEvent.type(searchInput, 'Recipe search');

			const searchButton = screen.getByTitle('Search for meals');
			userEvent.click(searchButton);
			expect(props.setSearchTerm).toHaveBeenCalled();
			expect(searchInput).toBeEmptyDOMElement();
			expect(history.location.pathname).toMatch(baseURL + 'recipes');
		});
	});
});
