import { Text } from './Message.style';

interface MessageTextProps {
	messageText: string;
	info?: boolean;
	warning?: boolean;
}

const Message = ({ messageText }: MessageTextProps) => {
	return <Text>{messageText}</Text>;
};

export default Message;
