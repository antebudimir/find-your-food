import { ThemeProvider } from 'styled-components';
import { variables } from 'styles/variables';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Recipes, { SearchProps } from '../Recipes';
import useAxios, { RecipeProps } from 'hooks/useAxios';

jest.mock('hooks/useAxios');

const mockResponse: RecipeProps[] = [
	{
		recipe: {
			label: 'Test label 1',
			images: {
				REGULAR: {
					url: 'image url',
				},
			},
			mealType: 'breakfast',
			ingredientLines: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
			totalTime: '20',
			uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_db742742099859a8053b992dd3c1f452',
		},
	},
	{
		recipe: {
			label: 'Test label 2',
			images: {
				REGULAR: {
					url: 'image url 2',
				},
			},
			mealType: 'lunch',
			ingredientLines: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
			totalTime: '40',
			uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_b958fb2af215767c51d7545e2f86a722',
		},
	},
];

const props: SearchProps = {
	searchTerm: 'test',
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
	test('should fetch and render recipe titles', async () => {
		jest
			.mocked(useAxios)
			.mockReturnValue({ data: mockResponse, loading: false, error: '' });

		renderRecipes(props);

		const titleOne = await screen.findByTestId('Test label 1');
		expect(titleOne).toHaveTextContent('Test label 1');
		const titleTwo = await screen.findByTestId('Test label 2');
		expect(titleTwo).toHaveTextContent('Test label 2');
	});

	test('if the Component matches snapshot', () => {
		jest
			.mocked(useAxios)
			.mockReturnValue({ data: mockResponse, loading: false, error: '' });

		const { fragment } = renderRecipes(props);

		expect(fragment).toMatchSnapshot();
	});
});
