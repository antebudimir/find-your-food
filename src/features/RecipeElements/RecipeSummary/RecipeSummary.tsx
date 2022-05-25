import {
	RecipeSummaryContainer,
	SummaryImage,
	SummaryTitle,
	SummaryLink,
} from './RecipeSummary.style';

interface RecipeSummaryProps {
	label?: string;
	image?: string;
	recipeId?: string;
}

const RecipeSummary = ({
	label = '',
	image = '',
	recipeId = '',
}: RecipeSummaryProps) => {
	return (
		<RecipeSummaryContainer>
			<SummaryTitle>{label ? label : 'Title not available'}</SummaryTitle>

			<SummaryImage
				imageSource={image ? image : 'Photo not available'}
				imageAlt={label ? label : 'Title not available'}
			/>

			<SummaryLink to={`recipe/${recipeId}`}>View Recipe Details</SummaryLink>
		</RecipeSummaryContainer>
	);
};

export default RecipeSummary;
