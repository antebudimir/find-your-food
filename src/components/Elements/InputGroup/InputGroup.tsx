import { FieldInput, FieldLabel, FormControl } from './InputGroup.style';

interface InputGroupProps {
	name: string;
	label: string;
	type: InputType;
	placeholder?: string;
	value?: string;
	setInput: (value: string) => void;
}

export enum InputType {
	text = 'text',
	number = 'number',
	password = 'password',
	search = 'search',
}

const InputGroup = ({
	name,
	label,
	type,
	placeholder = '',
	value = '',
	setInput,
}: InputGroupProps) => {
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		setInput(value);
	};

	return (
		<FormControl>
			<FieldLabel htmlFor={name}>{label}</FieldLabel>

			<FieldInput
				id={name}
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChangeHandler}
				required
			/>
		</FormControl>
	);
};

export default InputGroup;
