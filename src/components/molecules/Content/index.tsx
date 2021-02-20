import React from "react";
import styled from "styled-components";

export interface ContentProps {
	title: string;
	desc: string;
}

const Content: React.FC<ContentProps> = ({ title, desc, ...props }) => {
	const styleProps = {
		...props,
	};
	return (
		<ContentWrap id={title} {...styleProps}>
			<div>
				<h2>{title}</h2>
				<p>{desc}</p>
			</div>
		</ContentWrap>
	);
};

export default Content;

type ContentType = {};

// style 영역
const ContentWrap = styled.div<ContentType>`
	display: flex;
	flex-direction: column;
	padding-top: 100px;
	div:first-of-type {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 60%;
		color: #3f4165;
		h2 {
			font-family: "Noto Sans KR", sans-serif;
			text-transform: uppercase;
			letter-spacing: -0.05rem;
			font-size: 35px;
			font-weight: 800;
		}
		p {
			margin: 15px 0;
			font-size: 17px;
			font-weight: 300;
			line-height: 1.5;
		}
	}
	div:last-of-type {
	}
`;
