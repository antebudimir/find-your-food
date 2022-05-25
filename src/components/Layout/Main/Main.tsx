import { MainContainer } from './Main.style';
import { RouteProps } from 'react-router-dom';

interface MainProps {
	children: RouteProps['children'];
}

const Main = ({ children }: MainProps) => {
	return <MainContainer>{children}</MainContainer>;
};

export default Main;
