import React from "react";
import styled from "styled-components";

export interface LabelProps {
	text: string;
	type?: string;
}

const Label: React.FC<LabelProps> = ({ text, type = "skill", ...props }) => {
	const styleProps = {
		type,
		...props,
	};
	return <LabelWrap {...styleProps}>{text}</LabelWrap>;
};

export default Label;

type LabelType = {
	type?: string;
};

// style 영역
const LabelWrap = styled.span<LabelType>`
	display: inline-flex;
	align-items: center;
	text-transform: uppercase;
	background: #c5c6c4;
	font-weight: 300;
	border-radius: 4px;
	font-size: 0.6rem;
	line-height: 0.8;
	color: white;
	padding: 5px 6px;
	margin: 1px;
`;
