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
			<div> Ⓒ 2021. HAM JUN HO 현재 페이지는 아직 미완성입니다.</div>
		</FooterWrap>
	);
};
export default Footer;

// style 영역
const FooterWrap = styled.footer`
	position: relative;
	bottom: 50px;
	font-size: 0.7rem;
	background: #eaeae9;
	width: 100%;
	div {
		&:first-of-type {
			padding: 5px 0;
			font-weight: 400;
			ul {
				display: flex;
				justify-content: space-around;
				li {
					padding: 8px;
					&:hover {
						cursor: pointer;
						color: #9321fd;
						font-weight: 400;
					}
				}
			}
		}
		&:last-of-type {
			font-size: 0.7rem;
			color: #7475aa;
			padding: 5px 0;
			display: flex;
			font-weight: 400;
			justify-content: center;
		}
	}
	p.line {
		width: 100%;
		height: 1.5px;
		background: #d8d8d7;
		margin: 13px 0;
	}
`;
