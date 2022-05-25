import {
	ExternalLink,
	RecipeDetailsContainer,
	RecipeImage,
	RecipeTitle,
} from './RecipeDetails.style';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import RecipeLine from 'features/RecipeElements/RecipeLine/RecipeLine';
import RecipeList from 'features/RecipeElements/RecipeList/RecipeList';

interface RecipeDetailsProps {
	recipes: RecipesProps[];
}

interface RecipesProps {
	recipe: RecipeProps;
	uri?: string;
	label?: string;
	cuisineType?: string[];
	mealType?: string;
	dishType?: string[];
	image?: string;
	ingredientLines?: string[];
	totalTime?: number;
	recipeYield?: string;
	calories?: number;
	totalWeight?: number;
	url?: string;
	source?: string;
}

interface RecipeProps {
	uri: string;
}

const RecipeDetails = ({ recipes }: RecipeDetailsProps) => {
	const { id } = useParams();

	// get uri that matches url id
	const recipe: any = recipes.find(
			(selectedRecipe) => selectedRecipe.recipe.uri.slice(-32) === id,
		),
		recipeDetails = recipe.recipe,
		{
			label = '',
			cuisineType,
			mealType,
			dishType,
			image,
			ingredientLines,
			totalTime,
			recipeYield,
			calories,
			totalWeight,
			url,
			source,
		} = recipeDetails;

	function createList(items: string[]) {
		const list = items.map((item) => {
			return <li key={uuidv4()}>{item}</li>;
		});
		return list;
	}

	function createCommaList(items: string[]) {
		return items.join(', ');
	}

	return (
		<RecipeDetailsContainer>
			<RecipeTitle>{label ? label : 'Title not available'}</RecipeTitle>

			<RecipeLine
				label="Cuisine type"
				recipeDetail={
					cuisineType && cuisineType.length > 0
						? createCommaList(cuisineType)
						: 'No info'
				}
			/>

			<RecipeLine
				label="Meal type"
				recipeDetail={mealType && mealType.length > 0 ? mealType : 'No info'}
			/>

			<RecipeLine
				label="Dish type"
				recipeDetail={
					dishType && dishType.length > 0
						? createCommaList(dishType)
						: 'No info'
				}
			/>

			<RecipeImage
				imageSource={image ? image : 'Photo not available'}
				imageAlt={label ? label : 'Title not available'}
			/>

			<RecipeList
				label="Ingredients"
				detailsList={
					ingredientLines && ingredientLines.length > 0
						? createList(ingredientLines)
						: 'No info'
				}
			/>

			<RecipeLine
				label="Total time"
				recipeDetail={
					totalTime && totalTime > 0 ? totalTime + 'min' : 'No info'
				}
			/>

			<RecipeLine
				label="Yield"
				recipeDetail={recipeYield ? recipeYield : 'No info'}
			/>

			<RecipeLine
				label="Calories"
				recipeDetail={calories ? calories.toFixed() : 'No info'}
			/>

			<RecipeLine
				label="Total weight"
				recipeDetail={
					totalWeight && totalWeight > 0
						? totalWeight.toFixed() + 'g'
						: 'No info'
				}
			/>

			{url && (
				<ExternalLink
					href={url}
					target="_blank"
					rel="noopener"
					title={source ? `Go to the ${source} website` : 'No info'}
				>
					{' '}
					Source: {source ? source : 'Source is not available'}
				</ExternalLink>
			)}
		</RecipeDetailsContainer>
	);
};

export default RecipeDetails;
