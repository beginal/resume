import React from "react";
import styled from "styled-components";

export const Footer = ({ ...props }) => {
	const styleProps = {
		...props,
	};

	return (
		<FooterWrap {...styleProps}>
			<div>
				<span>HAM JUN HO 포트폴리오 & 이력서용 페이지입니다. </span>
				<span>React, TypeScript, Styled-Component로 제작했습니다.</span>
			</div>
		</FooterWrap>
	);
};
export default Footer;

// style 영역
const FooterWrap = styled.footer`
	position: relative;
	font-size: 0.7rem;
	background: #f4f5f7;
	width: 100%;
	padding-bottom: 50px;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #333333;
		font-size: 0.8rem;
		line-height: 1.6;
		padding-top: 20px;
		font-weight: 400;
	}
	@media ${({ theme }) => theme.mobileL} {
		div {
			padding: 20px 25px;
		}
	}
`;
