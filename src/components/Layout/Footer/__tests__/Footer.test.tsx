import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';

import Footer from '../Footer';

test('Footer text and Footer Link render correctly', () => {
	render(
		<ThemeProvider theme={variables}>
			<Footer />
		</ThemeProvider>,
	);

	const FooterText = screen.getByText('Powered by');
	expect(FooterText).toBeInTheDocument();

	const FooterLink = screen.getByTitle('Go to the Edamam website');
	expect(FooterLink).toBeInTheDocument();
});

describe('<Footer />', () => {
	test('Footer Link navigates to root on click', () => {
		render(
			<ThemeProvider theme={variables}>
				<Footer />,
			</ThemeProvider>,
		);

		const FooterLink = screen.getByTitle('Go to the Edamam website');
		userEvent.click(FooterLink);
		expect(FooterLink.getAttribute('href')).toBe('https://www.edamam.com');
	});

	test('if the Component matches snapshot', () => {
		const component = TestRenderer.create(
			<ThemeProvider theme={variables}>
				<Footer />
			</ThemeProvider>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
