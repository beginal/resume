import React from "react";
import styled from "styled-components";

export interface DescriptionProps {
	title: string;
	children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ title, children, ...props }) => {
	const styleProps = {
		...props,
	};
	return (
		<DescriptionWrap id={title} {...styleProps}>
			<div>
				<h2>{title}</h2>
				<p>{children}</p>
			</div>
		</DescriptionWrap>
	);
};

export default Description;

type DescriptionType = {};

// style 영역
const DescriptionWrap = styled.div<DescriptionType>`
	display: flex;
	justify-content: center;
	padding-top: 100px;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
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
			margin-top: 20px;
			text-align: center;
			font-size: 17px;
			font-weight: 300;
			line-height: 1.5;
		}
	}
`;
