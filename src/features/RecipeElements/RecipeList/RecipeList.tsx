import { RecipeListContainer, RecipeListText } from './RecipeList.style';
import { ReactNode } from 'react';

interface RecipeListProps {
	label?: string;
	detailsList?: string | ReactNode[];
}

const RecipeList = ({ label = '', detailsList = '' }: RecipeListProps) => {
	return (
		<RecipeListContainer>
			<>
				<RecipeListText>{label}:</RecipeListText> {detailsList}
			</>
		</RecipeListContainer>
	);
};

export default RecipeList;
