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
				<div>{children}</div>
			</div>
		</DescriptionWrap>
	);
};

export default Description;

// style 영역
const DescriptionWrap = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 100px;
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 80%;
		color: #3f4165;
		h2 {
			font-family: "Noto Sans KR", sans-serif;
			text-transform: uppercase;
			letter-spacing: -0.05rem;
			font-size: 35px;
			font-weight: 800;
		}
		div {
			margin-top: 20px;
			text-align: center;
			font-size: 1.1.rem;
			font-weight: 300;
			line-height: 1.5;
		}
	}
	@media ${({ theme }) => theme.tablet} {
		> div {
			width: 100%;
		}
	}
	@media ${({ theme }) => theme.mobileL} {
		> div {
			> div {
				font-size: 0.9rem;
			}
		}
	}
`;
