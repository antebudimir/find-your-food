import styled from 'styled-components';

interface MessageProps {
	info?: boolean;
	warning?: boolean;
}

interface ThemeProps {
	theme: ThemeDetails;
}

interface ThemeDetails {
	color: Color;
}

interface Color {
	primaryLighter: string;
}

export const Text = styled.p`
	position: absolute;
	margin-block-start: ${(props) => props.theme.spacing.primary};
	color: ${(props) => props.theme.color.primary};
	font-size: ${(props) => props.theme.fontSize.secondary};

	${({ info, warning }: MessageProps) => {
		switch (true) {
			case info:
				return `color: brown`;
			case warning:
				return `color: red`;
			default:
				return `color: ${(props: ThemeProps) =>
					props.theme.color.primaryLighter}`;
		}
	}};
`;
