import React from "react";
import styled from "styled-components";
interface Props {
	message: string;
	// way: string | number;
}

const ToolTip = (props: Props) => {
	const { message } = props;
	return <ToolTipWrap>{message}</ToolTipWrap>;
};

export default ToolTip;

const ToolTipWrap = styled.div`
	position: absolute;
	left: 50%;
	transform: translate(-50%, -150%);
	display: flex;
	justify-content: center;
	width: 250px;
	background: white;
	padding: 10px 15px;
	opacity: 0.8;
	border-color: #5e72e4;
	color: #5272e4;
	border-radius: 4px;
	&:before {
		position: absolute;
		bottom: -6px;
		transform: rotate(45deg);
		background: white;
		z-index: -1;
		width: 15px;
		height: 15px;
		content: "";
	}
`;
