import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
	primary?: boolean;
	disabled?: boolean;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	label: string;
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	primary = false,
	size = "medium",
	backgroundColor,
	disabled,
	label,
	...props
}) => {
	const styleProps = {
		primary,
		size,
		...props,
	};
	return (
		<ButtonWrap disabled={disabled} type="button" style={{ backgroundColor }} {...styleProps}>
			{label}
		</ButtonWrap>
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
	border-radius: 3em;
	cursor: pointer;
	display: inline-block;
	line-height: 1;
	${({ primary }) =>
		primary
			? css`
					color: white;
					background-color: #1ea7fd;
			  `
			: css`
					color: #333;
					background-color: transparent;
					box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
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
`;
