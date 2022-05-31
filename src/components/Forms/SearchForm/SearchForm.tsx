import { FormContainer } from './SearchForm.style';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import InputGroup, {
	InputType,
} from 'components/Elements/InputGroup/InputGroup';
import Button, { ButtonType } from 'components/Elements/Button/Button';

interface SearchFormProps {
	setSearchTerm: (searchTerm: string) => void;
}

const SearchForm = ({ setSearchTerm }: SearchFormProps) => {
	const [input, setInput] = useState<string>('');
	let navigate = useNavigate();

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (input !== '') {
			setSearchTerm(input);
			navigate('/recipes');
			setInput('');
		}
	};

	return (
		<FormContainer onSubmit={onSubmitHandler}>
			<InputGroup
				name="search-input"
				label="Enter an ingredient"
				type={InputType.search}
				placeholder="Enter an ingredient"
				value={input}
				setInput={setInput}
			/>

			<Button
				buttonType={ButtonType.submit}
				buttonTitle="Search for meals"
				buttonText="Search"
			/>
		</FormContainer>
	);
};

export default SearchForm;
