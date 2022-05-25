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
}

const Button = ({
	buttonType,
	buttonTitle,
	handleClick,
	className = '',
	buttonText = '',
	buttonValue = '',
}: ButtonProps) => {
	return (
		<ButtonContainer
			type={buttonType}
			title={buttonTitle}
			onClick={handleClick}
			className={className}
			value={buttonValue}
		>
			{buttonText}
		</ButtonContainer>
	);
};

export default Button;
