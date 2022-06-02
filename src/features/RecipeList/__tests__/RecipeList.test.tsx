import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import RecipeList, { RecipeListProps } from '../RecipeList';

const props: RecipeListProps = {
	label: 'Test label',
	detailsList: 'Test detail',
};

const renderRecipeList = (props: RecipeListProps) => {
	const { asFragment, container } = render(
		<ThemeProvider theme={variables}>
			<RecipeList {...props} />
		</ThemeProvider>,
	);

	return { fragment: asFragment(), container };
};

describe('<RecipeList /> component', () => {
	test('if it renders correctly', () => {
		const { fragment } = renderRecipeList(props);
		expect(fragment).toMatchSnapshot();
	});
});
