import { RecipeDetailContainer, RecipeDetailText } from './RecipeLine.style';

export interface RecipeLineProps {
	lineLabel?: string;
	recipeDetail?: string | string[];
	lineId: string;
	uniqueId: string;
}

const RecipeLine = ({
	lineLabel,
	recipeDetail,
	lineId,
	uniqueId,
}: RecipeLineProps) => {
	return (
		<RecipeDetailContainer id={lineId} data-testid={`${lineId}-${uniqueId}`}>
			<RecipeDetailText>{lineLabel}:</RecipeDetailText>{' '}
			{recipeDetail ? recipeDetail : ''}
		</RecipeDetailContainer>
	);
};

export default RecipeLine;
