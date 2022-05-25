import { css } from 'styled-components';

interface FlexLayoutProps {
	direction?: string;
	wrap?: string;
}

interface FlexAlignmentProps {
	justify?: string;
	align?: string;
}

export const FlexLayout = ({ direction, wrap }: FlexLayoutProps) => css`
	display: flex;
	flex-flow: ${direction} ${wrap};
`;

export const FlexAlignment = ({ justify, align }: FlexAlignmentProps) => css`
	justify-content: ${justify};
	align-items: ${align};
`;

export const hiddenVisually = css`
	position: absolute;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	overflow: hidden;
	width: 1px;
	height: 1px;
	white-space: nowrap;
`;

export const sticky = css`
	display: flex;
	flex-flow: column nowrap;
	min-height: 89.6vh;
`;
