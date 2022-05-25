import { FooterContainer, FooterLink, FooterText } from './Footer.style';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterText>
				Powered by{' '}
				<FooterLink
					href="https://www.edamam.com"
					title="Go to the Edamam website"
				>
					Edamam API
				</FooterLink>
			</FooterText>
		</FooterContainer>
	);
};

export default Footer;
