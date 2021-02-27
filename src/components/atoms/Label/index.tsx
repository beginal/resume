import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

export interface LabelProps {
	text: string;
	type?: string;
	bgColor?: string;
	onClick?: () => void;
}

const Label: React.FC<LabelProps> = ({ text, type = "skill", onClick, bgColor, ...props }) => {
	const styleProps = {
		type,
		bgColor,
		onClick,
		...props,
	};
	return (
		<LabelWrap onClick={onClick} {...styleProps}>
			{text}
		</LabelWrap>
	);
};

export default Label;

type LabelType = {
	type?: string;
	bgColor?: string;
};

// style 영역
const LabelWrap = styled.span<LabelType>`
	display: inline-flex;
	align-items: center;
	text-transform: uppercase;
	background: ${prop("bgColor", "#c5c6c4")};
	font-weight: 300;
	border-radius: 4px;
	font-size: 0.6rem;
	line-height: 0.8;
	color: white;
	padding: 5px 6px;
	margin: 1px;
`;
