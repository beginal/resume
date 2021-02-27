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
			<div className="container">{children}</div>
		</HeaderWrap>
	);
};

export default Header;

// style 영역
const HeaderWrap = styled.header`
	.container {
		padding: 16rem 4rem;
		background: url("./img/header.png") no-repeat center center/cover;
		opacity: 0.8;
		> * {
			margin: 0 95px;
		}
	}
`;
