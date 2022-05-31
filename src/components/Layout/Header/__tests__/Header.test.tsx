import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from 'components/Layout/Header/Header';

test('Header Link and Header title render correctly', () => {
	const history = createMemoryHistory();
	history.push = jest.fn();

	render(
		<Router location={history.location} navigator={history}>
			<ThemeProvider theme={variables}>
				<Header />
			</ThemeProvider>
		</Router>,
	);

	const HeaderLink = screen.getByTitle('Go back to the start page');
	expect(HeaderLink).toBeInTheDocument();

	const HeaderTitle = screen.getByText('Find Your Food');
	expect(HeaderTitle).toBeInTheDocument();
	expect(HeaderTitle.tagName.toLowerCase()).toEqual('h1');
});

describe('<Header />', () => {
	test('Header Link navigates to root on click', () => {
		const history = createMemoryHistory();
		history.push = jest.fn();

		render(
			<Router location={history.location} navigator={history}>
				<ThemeProvider theme={variables}>
					<Header />,
				</ThemeProvider>
				,
			</Router>,
		);

		const HeaderLink = screen.getByTitle('Go back to the start page');
		userEvent.click(HeaderLink);
		expect(HeaderLink.getAttribute('href')).toBe('/');
	});
});
