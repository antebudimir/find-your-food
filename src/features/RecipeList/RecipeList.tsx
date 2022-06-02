import { RecipeListContainer, RecipeListText } from './RecipeList.style';
import { ReactNode } from 'react';

export interface RecipeListProps {
	label?: string;
	detailsList?: string | ReactNode[];
}

const RecipeList = ({ label, detailsList }: RecipeListProps) => {
	return (
		<RecipeListContainer>
			<RecipeListText>{label ? label : 'Title not available'}:</RecipeListText>{' '}
			{detailsList ? detailsList : ''}
		</RecipeListContainer>
	);
};

export default RecipeList;
