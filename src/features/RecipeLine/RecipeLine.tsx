import { RecipeDetailContainer, RecipeDetailText } from './RecipeLine.style';

interface RecipeLineProps {
	label?: string;
	recipeDetail?: string | string[];
}

const RecipeLine = ({ label, recipeDetail }: RecipeLineProps) => {
	return (
		<RecipeDetailContainer>
			<RecipeDetailText>
				{label ? label : 'Title not available'}:
			</RecipeDetailText>{' '}
			{recipeDetail ? recipeDetail : ''}
		</RecipeDetailContainer>
	);
};

export default RecipeLine;