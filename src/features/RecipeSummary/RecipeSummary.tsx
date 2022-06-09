import RecipeLine from 'features/RecipeLine/RecipeLine';
import RecipeList from 'features/RecipeList/RecipeList';
import {
	RecipeSummaryContainer,
	SummaryImage,
	SummaryTitle,
} from './RecipeSummary.style';

// create a list
export const createList = (items: string[]) => {
	const list = items.map((item) => {
		return <li key={item}>{item}</li>;
	});
	return list;
};
export interface RecipeSummaryProps {
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
	return (
		<RecipeSummaryContainer>
			<SummaryTitle data-testid="summary-title">
				{label ? label : 'Title not available'}
			</SummaryTitle>

			<SummaryImage
				imageSource={image ? image : 'Photo not available'}
				imageAlt={label ? label : 'Image description not available'}
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
