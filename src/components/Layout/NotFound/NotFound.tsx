import { NotFoundContainer, NotFoundTitle } from './NotFound.style';
import Message from 'components/Elements/Message/Message';

const NotFound = () => {
	return (
		<NotFoundContainer>
			<NotFoundTitle>Error 404 - Page not found</NotFoundTitle>

			<Message
				info
				messageText="The page you are looking for cannot be found."
			/>
		</NotFoundContainer>
	);
};

export default NotFound;
