import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import SearchForm from '../SearchForm';

// Render
test('Input field and button render correctly', () => {
	const history = createMemoryHistory();
	history.push = jest.fn();
	const setSearchTerm = jest.fn();

	render(
		<Router location={history.location} navigator={history}>
			<ThemeProvider theme={variables}>
				<SearchForm setSearchTerm={setSearchTerm} />,
			</ThemeProvider>
			,
		</Router>,
	);

	const input = screen.getByPlaceholderText('Enter an ingredient');
	expect(input).toBeInTheDocument(); // vs. expect(input).toBeTruthy(); Ivan?
	expect(input).toHaveAttribute('type', 'search');

	const searchButton = screen.getByTitle('Search for meals');
	expect(searchButton).toBeInTheDocument();
	expect(searchButton).toHaveAttribute('type', 'submit');
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
					<SearchForm setSearchTerm={setSearchTerm} />,
				</ThemeProvider>
				,
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
						<SearchForm setSearchTerm={setSearchTerm} />,
					</ThemeProvider>
					,
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

			// Ivan, how to test redirect?
			// const mockedUseNavigate = jest.fn();

			// jest.mock('react-router-dom', () => ({
			// 	...jest.requireActual('react-router-dom'),
			// 	useNavigate: () => mockedUseNavigate,
			// }));

			render(
				<Router location={history.location} navigator={history}>
					<ThemeProvider theme={variables}>
						<SearchForm setSearchTerm={setSearchTerm} />,
					</ThemeProvider>
					,
				</Router>,
			);

			const searchInput = screen.getByPlaceholderText('Enter an ingredient');
			userEvent.type(searchInput, 'Recipe search');

			const searchButton = screen.getByTitle('Search for meals');
			userEvent.click(searchButton);
			expect(setSearchTerm).toHaveBeenCalled();
			expect(searchInput).toBeEmptyDOMElement();
			// expect(mockedUseNavigate).toHaveBeenCalledTimes(1);,
		});
	});
});
