import React from "react";
import styled, { css } from "styled-components";

export interface ContentProps {
	title: string;
	desc?: string;
	center?: boolean;
}

const Content: React.FC<ContentProps> = ({ title, desc, center = false, ...props }) => {
	const styleProps = {
		center,
		...props,
	};
	return (
		<ContentWrap id={title} {...styleProps}>
			<h2>{title}</h2>
			{desc && <p>{desc}</p>}
		</ContentWrap>
	);
};

export default Content;

type styleType = {
	center: boolean;
};

// style 영역
const ContentWrap = styled.div<styleType>`
	display: flex;
	flex-direction: column;
	padding-top: 100px;
	justify-content: center;
	width: 60%;
	color: #3f4165;
	margin-bottom: 20px;
	h2 {
		font-family: "Noto Sans KR", sans-serif;
		text-transform: uppercase;
		letter-spacing: -0.05rem;
		font-size: 35px;
		font-weight: 800;
		text-align: ${({ center }) => (center ? "center" : "unset")};
	}
	p {
		font-size: 17px;
		font-weight: 300;
		line-height: 1.5;
		padding: 5px 0;
	}
`;
