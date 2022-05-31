import RecipeLine from 'features/RecipeLine/RecipeLine';
import RecipeList from 'features/RecipeList/RecipeList';
import {
	RecipeSummaryContainer,
	SummaryImage,
	SummaryTitle,
} from './RecipeSummary.style';
import { v4 as uuidv4 } from 'uuid';

interface RecipeSummaryProps {
	label?: string;
	image?: string;
	mealType?: string;
	ingredientLines?: string[];
	totalTime?: string;
}

const RecipeSummary = ({
	label,
	image,
	mealType,
	ingredientLines,
	totalTime,
}: RecipeSummaryProps) => {
	// create a list
	function createList(items: string[]) {
		const list = items.map((item) => {
			return <li key={uuidv4()}>{item}</li>;
		});
		return list;
	}

	return (
		<RecipeSummaryContainer>
			<SummaryTitle>{label ? label : 'Title not available'}</SummaryTitle>

			<SummaryImage
				imageSource={image ? image : 'Photo not available'}
				imageAlt={label ? label : 'Image description not available'}
			/>

			<RecipeLine
				label="Meal type"
				recipeDetail={mealType && mealType.length > 0 ? mealType : 'No info'}
			/>
			<RecipeLine
				label="Meal type"
				recipeDetail={mealType && mealType.length > 0 ? mealType : 'No info'}
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
				recipeDetail={totalTime ? totalTime + 'min' : 'No info'}
			/>
		</RecipeSummaryContainer>
	);
};

export default RecipeSummary;
