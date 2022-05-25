import { RecipesContainer } from './Recipes style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeSummary from '../RecipeElements/RecipeSummary/RecipeSummary';
import Message from 'components/Elements/Message/Message';
import Spinner from 'components/Elements/Spinner/Spinner';

interface RecipesProps {
	searchTerm: string;
	recipes: RecipesCollection[];
	setRecipes: Function;
}

interface RecipesCollection {
	recipe: RecipeDetails;
}

interface RecipeDetails {
	uri: string;
	label: string;
	images: ImagesProps;
}

interface ImagesProps {
	REGULAR: ImageSource;
}

interface ImageSource {
	url: string;
}

interface ResponseProps {
	hits: []; // works whatever I put here. Why??
}

const APP_ID = '42edf3ff',
	APP_KEY = '6a34d46d87fae6291096de9c0d483ce8';

const Recipes = ({ searchTerm, recipes, setRecipes }: RecipesProps) => {
	const [loading, setLoading] = useState(false),
		[error, setError] = useState('');

	const endpoint = 'https://api.edamam.com/api/recipes/v2',
		query = `?type=public&q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	useEffect(() => {
		const getRecipes = async () => {
			setLoading(true);

			try {
				const { data } = await axios.get<ResponseProps>(endpoint + query);
				console.log(data.hits);
				setRecipes(data.hits);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		getRecipes();
	}, [query, setRecipes]);

	const renderRecipes = recipes.map((recipe) => {
		const details = recipe.recipe,
			uniqueKey = details.uri.slice(-32);

		return (
			<RecipeSummary
				key={uniqueKey}
				label={details.label}
				image={details.images.REGULAR.url}
				recipeId={uniqueKey}
			/>
		);
	});

	return (
		<RecipesContainer>
			{loading && <Spinner />}

			{error && <Message warning messageText={error} />}

			{recipes.length > 0 && renderRecipes}
		</RecipesContainer>
	);
};

export default Recipes;
