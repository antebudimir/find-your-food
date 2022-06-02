import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Spinner from '../Spinner';

test('Spinner renders correctly', () => {
	render(
		<ThemeProvider theme={variables}>
			<Spinner />
		</ThemeProvider>,
	);

	const spinnerAlt = screen.getByAltText('Loading spinner');
	expect(spinnerAlt).toBeTruthy();
});

describe('<Spinner /> component', () => {
	test('if the Component matches snapshot', () => {
		const component = TestRenderer.create(
			<ThemeProvider theme={variables}>
				<Spinner />
			</ThemeProvider>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
