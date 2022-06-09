import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import Recipes, { SearchProps } from '../Recipes';

const props: SearchProps = {
	searchTerm: 'steak',
};

const renderRecipes = (props: SearchProps) => {
	const { asFragment } = render(
		<ThemeProvider theme={variables}>
			<Recipes {...props} />
		</ThemeProvider>,
	);

	return { fragment: asFragment() };
};

describe('<Recipes /> component', () => {
	test('if the Component matches snapshot', async () => {
		const { fragment } = renderRecipes(props);

		await waitForElementToBeRemoved(screen.queryByAltText('Loading spinner'));

		expect(fragment).toMatchSnapshot();
	});
});
