import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

export interface ButtonProps {
	primary?: boolean;
	disabled?: boolean;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	label: string;
	link?: string;
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	primary = false,
	size = "medium",
	backgroundColor,
	disabled,
	label,
	link,
	...props
}) => {
	const styleProps = {
		primary,
		size,
		...props,
	};
	return (
		<ButtonWrap disabled={disabled} type="button" style={{ backgroundColor }} {...styleProps}>
			{link ? (
				<a href={link} target="_blank">
					{label}
				</a>
			) : (
				<>{label}</>
			)}
		</ButtonWrap>
	);
};

export interface FloatingButtonProps {
	children: React.ReactNode;
	link?: string;
	onClick?: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ children, link, onClick }) => {
	return (
		<FloatingButtonWrap>
			{link ? (
				<a href={link} target="_blank">
					{children}
				</a>
			) : (
				<div onClick={onClick}>{children}</div>
			)}
		</FloatingButtonWrap>
	);
};

type ButtonType = {
	primary: boolean;
	size: string;
};

// style 영역
const ButtonWrap = styled.button<ButtonType>`
	font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: 700;
	border: 0;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	outline: none;
	justify-content: center;
	align-items: center;
	transition: background 0.5s;
	background: ${theme("color.sub1")};
	${({ primary }) =>
		primary &&
		`
					color: white;
					background-color: #1ea7fd;
			  `};
	${({ size }) => {
		switch (size) {
			case "small":
				return `font-size: 12px; padding: 10px 16px;`;
			case "medium":
				return `font-size: 14px; padding: 11px 20px`;
			case "large":
				return `font-size: 16px; padding: 12px 24px;`;
		}
	}};
	&:hover {
		background: ${theme("color.sub2")};
	}
`;

const FloatingButtonWrap = styled.button`
	position: fixed;
	bottom: 15px;
	right: 20px;
	padding: 0;
	cursor: pointer;
	/* background: white; */
	border: none;
	/* box-shadow: 0px 5px 5px 0.5px rgba(0, 0, 0, 0.2); */
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	transition: height 0.3s;
	&:hover {
		width: 30px;
		height: 45px;
	}
	a {
		width: 100%;
		height: 100%;
		svg {
			width: inherit;
			height: inherit;
		}
	}
`;
