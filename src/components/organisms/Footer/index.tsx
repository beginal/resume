import React from "react";
import styled from "styled-components";

export interface FooterProps {
	github?: string;
	blog?: string;
}

export const Footer: React.FC<FooterProps> = ({ ...props }) => {
	const styleProps = {
		...props,
	};

	return (
		<FooterWrap {...styleProps}>
			<p className="line"></p>
			<div>
				<span>Ⓒ 2021. HAM JUN HO 현재 페이지는 아직 미완성입니다.</span>
				<span>
					React, TypeScript, Styled-Component, Axios, Storybooks 등을 사용해 제작했습니다.
				</span>
			</div>
		</FooterWrap>
	);
};
export default Footer;

// style 영역
const FooterWrap = styled.footer`
	position: relative;
	font-size: 0.7rem;
	background: #eaeae9;
	width: 100%;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #7475aa;
		font-size: 0.7rem;
		line-height: 1.3;
		padding-top: 20px;
		font-weight: 400;
	}
	p.line {
		width: 100%;
		height: 1.5px;
		background: #d8d8d7;
	}
	@media ${({ theme }) => theme.mobileL} {
		div {
			padding: 20px 25px;
		}
	}
`;
