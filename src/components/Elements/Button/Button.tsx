import { ButtonContainer } from './Button.style';

export enum ButtonType {
	button = 'button',
	submit = 'submit',
	reset = 'reset',
}

interface ButtonProps {
	buttonType: ButtonType;
	buttonTitle: string;
	handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
	buttonText?: string;
	buttonValue?: string;
	dataCy?: string;
}

const Button = ({
	buttonType,
	buttonTitle,
	handleClick,
	className = '',
	buttonText = '',
	buttonValue = '',
	dataCy = '',
}: ButtonProps) => {
	return (
		<ButtonContainer
			type={buttonType}
			title={buttonTitle}
			onClick={handleClick}
			className={className}
			value={buttonValue}
			data-cy={dataCy}
		>
			{buttonText}
		</ButtonContainer>
	);
};

export default Button;
