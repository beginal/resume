import React from "react";
import styled from "styled-components";

export interface HeaderProps {
	children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
	const styleProps = {
		...props,
	};
	return (
		<HeaderWrap id="TOP" {...styleProps}>
			<div>
				<h2>
					안녕하세요
					<br />
					개발자 함준호입니다.
				</h2>
			</div>
		</HeaderWrap>
	);
};

export default Header;

// style 영역
const HeaderWrap = styled.header`
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	height: 500px;
	&:after {
		position: absolute;
		background: url("./img/header.png") no-repeat center center/cover;
		top: 0;
		left: 0;
		position: absolute;
		opacity: 0.6;
		z-index: -1;
		content: "";
		width: 100%;
		height: 100%;
	}
	div {
		margin: 0 95px;
		h2 {
			font-size: 3.5vw;
			font-weight: 500;
			line-height: 1.3;
		}
	}
	@media ${({ theme }) => theme.mobileL} {
		div {
			h2 {
				font-size: 25px;
				font-weight: 500;
				line-height: 1.3;
			}
		}
	}
`;
