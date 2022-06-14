export const mockResponse = [
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
			totalTime: '20min',
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
			totalTime: '40min',
			uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_db742742099859a8053b992dd3c1f452',
		},
	},
];

const AxiosMock = {
	get: jest.fn().mockResolvedValue(mockResponse),
};

export default AxiosMock;
