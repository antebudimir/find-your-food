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
	recipeLabel?: string;
	image?: string;
	mealType?: string;
	ingredientLines?: string[];
	totalTime?: string;
	uniqueId: string;
}

const RecipeSummary = ({
	recipeLabel,
	image,
	mealType,
	ingredientLines,
	totalTime,
	uniqueId,
}: RecipeSummaryProps) => {
	return (
		<RecipeSummaryContainer>
			<SummaryTitle data-testid={recipeLabel}>
				{recipeLabel ? recipeLabel : 'Title not available'}
			</SummaryTitle>

			<SummaryImage
				imageSource={image ? image : 'Photo not available'}
				imageAlt={recipeLabel ? recipeLabel : 'Image description not available'}
				data-testid={image}
			/>

			<RecipeLine
				lineLabel="Meal type"
				lineId="meal-type"
				recipeDetail={mealType && mealType.length > 0 ? mealType : 'No info'}
				uniqueId={uniqueId}
			/>

			<RecipeList
				label="Ingredients"
				detailsList={
					ingredientLines && ingredientLines.length > 0
						? createList(ingredientLines)
						: 'No info'
				}
				list="ingredients"
				uniqueId={uniqueId}
			/>

			<RecipeLine
				lineLabel="Total time"
				lineId="total-time"
				recipeDetail={totalTime ? totalTime + 'min' : 'No info'}
				uniqueId={uniqueId}
			/>
		</RecipeSummaryContainer>
	);
};

export default RecipeSummary;
