import { HeaderContainer, HeaderLink, HeaderTitle } from './Header.style';

const Header = () => {
	return (
		<HeaderContainer data-cy="header">
			<HeaderLink to="/" title="Go back to the start page">
				<HeaderTitle>Find Your Food</HeaderTitle>
			</HeaderLink>
		</HeaderContainer>
	);
};

export default Header;
