import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Footer from '../Footer';

test('Footer text and Footer Link render correctly', () => {
	const history = createMemoryHistory();
	history.push = jest.fn();

	render(
		<Router location={history.location} navigator={history}>
			<ThemeProvider theme={variables}>
				<Footer />,
			</ThemeProvider>
			,
		</Router>,
	);

	const FooterText = screen.getByText('Powered by');
	expect(FooterText).toBeInTheDocument();

	const FooterLink = screen.getByTitle('Go to the Edamam website');
	expect(FooterLink).toBeInTheDocument();
});

describe('<Footer />', () => {
	test('Footer Link navigates to root on click', () => {
		const history = createMemoryHistory();
		history.push = jest.fn();

		render(
			<Router location={history.location} navigator={history}>
				<ThemeProvider theme={variables}>
					<Footer />,
				</ThemeProvider>
				,
			</Router>,
		);

		const FooterLink = screen.getByTitle('Go to the Edamam website');
		userEvent.click(FooterLink);
		expect(FooterLink.getAttribute('href')).toBe('https://www.edamam.com');
	});
});
