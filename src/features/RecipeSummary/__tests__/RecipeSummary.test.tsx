import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import RecipeSummary from '../RecipeSummary';

describe('<RecipeSummary /> component', () => {
	test('if the Component matches snapshot', () => {
		const component = TestRenderer.create(
			<ThemeProvider theme={variables}>
				<RecipeSummary />
			</ThemeProvider>,
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
