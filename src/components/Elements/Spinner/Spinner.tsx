import { SpinnerContainer } from './Spinner.style';
import spinner from './spinner.svg';

const Spinner = () => {
	return (
		<SpinnerContainer
			imageSource={spinner}
			imageAlt="Loading spinner"
		></SpinnerContainer>
	);
};

export default Spinner;
