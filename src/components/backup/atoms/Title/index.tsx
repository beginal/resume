import React from "react";
import styled from "styled-components";

export interface TitleProps {
	size?: "small" | "medium" | "large" | "X-large";
	color?: string;
	label: string;
}

export const Title: React.FC<TitleProps> = ({
	size = "medium",
	color = "black",
	label,
	...props
}) => {
	const styleProps = {
		size,
		color,
		...props,
	};
	return <TitleWrap {...styleProps}>{label}</TitleWrap>;
};

type TitleType = {
	size: string;
};

// style 영역
const TitleWrap = styled.h2<TitleType>`
	color: ${({ color }) => color};
	${({ size }) => {
		switch (size) {
			case "small":
				return `font-size: 20px;`;
			case "medium":
				return `font-size: 26px;`;
			case "large":
				return `font-size: 30px;`;
			case "X-large":
				return `font-size: 45px;`;
		}
	}};
`;
