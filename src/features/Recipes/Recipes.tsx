import { RecipesContainer } from './Recipes style';
import RecipeSummary from 'features/RecipeSummary/RecipeSummary';
import Message from 'components/Elements/Message/Message';
import Spinner from 'components/Elements/Spinner/Spinner';
import useAxios from 'hooks/useAxios';

export interface SearchProps {
	searchTerm?: string;
}

const APP_ID = '548667f6';
const APP_KEY = '2f9fdc0a12e13af8ed2b0ba5c5deb2ef';

const Recipes = ({ searchTerm }: SearchProps) => {
	const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`,
		{ data, error, loading } = useAxios(endpoint);

	const renderRecipes = data.map((recipe) => {
		const singleRecipe = recipe.recipe,
			uniqueKey = singleRecipe.uri.slice(-32),
			{ label, images, mealType, ingredientLines, totalTime } = singleRecipe;

		return (
			<RecipeSummary
				key={uniqueKey}
				label={label}
				image={images.REGULAR.url}
				mealType={mealType}
				ingredientLines={ingredientLines}
				totalTime={totalTime}
			/>
		);
	});

	return (
		<RecipesContainer>
			{loading && <Spinner />}

			{error && <Message warning messageText={error} />}

			{data.length > 0 && renderRecipes}
		</RecipesContainer>
	);
};

export default Recipes;
