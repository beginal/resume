import React from "react";
import styled, { css } from "styled-components";

interface Props {
	size?: "small" | "regular" | "large";
	color?: string;
	children: string | number;
	onClick?: () => void;
}

const Button = (props: Props) => {
	const { size = "small", color, children, onClick } = props;
	const styleProps = { size, color };
	return (
		<ButtonWrap onClick={onClick} {...styleProps}>
			{children}
		</ButtonWrap>
	);
};

export default Button;

interface StyleProps {
	size: "small" | "regular" | "large";
	color?: string;
}

const ButtonWrap = styled.button<StyleProps>`
	border: none;
	outline: none;
	background: ${({ color }) => (color ? color : "#527ee4")};
	color: white;
	border-radius: 4px;
	font-weight: 400;
	margin: 6px;
	cursor: pointer;
	text-transform: uppercase;
	&:hover {
		position: relative;
		top: -2px;
		box-shadow: 3px 4px 5px rgba(20, 50, 93, 0.25);
	}
	${({ size }) =>
		size === "small"
			? css`
					font-size: 12px;
					padding: 4px 10px;
			  `
			: size === "regular"
			? css`
					font-size: 14px;
					padding: 10px 20px;
			  `
			: size === "large" &&
			  css`
					font-size: 14px;
					padding: 14px 16px;
			  `}
`;
