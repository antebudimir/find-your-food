import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SearchForm from '../SearchForm';

// Render
describe('<SearchForm /> component', () => {
	test('Input field and button render correctly', () => {
		const history = createMemoryHistory();
		history.push = jest.fn();
		const setSearchTerm = jest.fn();

		const { container, asFragment, rerender, debug, baseElement, ...queries } =
			render(
				<Router location={history.location} navigator={history}>
					<ThemeProvider theme={variables}>
						<SearchForm setSearchTerm={setSearchTerm} />
					</ThemeProvider>
				</Router>,
			);

		const input = screen.getByPlaceholderText('Enter an ingredient');
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('type', 'search');

		const searchButton = screen.getByTitle('Search for meals');
		expect(searchButton).toBeInTheDocument();
		expect(searchButton).toHaveAttribute('type', 'submit');
	});

	test('if the Component matches snapshot', () => {
		const history = createMemoryHistory();
		history.push = jest.fn();
		const setSearchTerm = jest.fn();

		const component = TestRenderer.create(
			<Router location={history.location} navigator={history}>
				<ThemeProvider theme={variables}>
					<SearchForm setSearchTerm={setSearchTerm} />
				</ThemeProvider>
			</Router>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});

// Input field
describe('Input field', () => {
	test('Value updates on change', () => {
		const history = createMemoryHistory();
		history.push = jest.fn();
		const setSearchTerm = jest.fn();

		render(
			<Router location={history.location} navigator={history}>
				<ThemeProvider theme={variables}>
					<SearchForm setSearchTerm={setSearchTerm} />
				</ThemeProvider>
			</Router>,
		);

		const searchInput = screen.getByPlaceholderText('Enter an ingredient');
		userEvent.type(searchInput, 'Test search');
		expect(searchInput).toHaveValue('Test search');
	});
});

// Search button
describe('Search button', () => {
	describe('Empty input field', () => {
		test('Does not submit the form', () => {
			const history = createMemoryHistory();
			history.push = jest.fn();
			const setSearchTerm = jest.fn();

			render(
				<Router location={history.location} navigator={history}>
					<ThemeProvider theme={variables}>
						<SearchForm setSearchTerm={setSearchTerm} />
					</ThemeProvider>
				</Router>,
			);

			const searchButton = screen.getByTitle('Search for meals');
			userEvent.click(searchButton);
			expect(setSearchTerm).not.toHaveBeenCalled();
		});
	});

	describe('User typed a query in the input field', () => {
		test('Submits the form, resets the input field and navigates to the recipes route', () => {
			const history = createMemoryHistory();
			history.push = jest.fn();
			const setSearchTerm = jest.fn();

			render(
				<Router location={history.location} navigator={history}>
					<ThemeProvider theme={variables}>
						<SearchForm setSearchTerm={setSearchTerm} />
					</ThemeProvider>
				</Router>,
			);

			const searchInput = screen.getByPlaceholderText('Enter an ingredient');
			userEvent.type(searchInput, 'Recipe search');

			const searchButton = screen.getByTitle('Search for meals');
			userEvent.click(searchButton);
			expect(setSearchTerm).toHaveBeenCalled();
			expect(searchInput).toBeEmptyDOMElement();
			expect(history.push).toHaveBeenCalled();
		});
	});
});
