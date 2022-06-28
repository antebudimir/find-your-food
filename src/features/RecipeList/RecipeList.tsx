import { RecipeListContainer, RecipeListText } from './RecipeList.style';
import { ReactNode } from 'react';

export interface RecipeListProps {
	label?: string;
	detailsList?: string | ReactNode[];
	uniqueId: string;
	list: string | undefined;
}

const RecipeList = ({
	label,
	detailsList,
	uniqueId,
	list,
}: RecipeListProps) => {
	return (
		<RecipeListContainer data-testid={`${list}-${uniqueId}`}>
			<RecipeListText>{label ? label : 'Title not available'}:</RecipeListText>{' '}
			{detailsList ? detailsList : ''}
		</RecipeListContainer>
	);
};

export default RecipeList;
