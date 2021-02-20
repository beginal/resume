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
		<HeaderWrap {...styleProps}>
			<div className="container">{children}</div>
		</HeaderWrap>
	);
};

export default Header;

type HeaderType = {};

// style 영역
const HeaderWrap = styled.header<HeaderType>`
	.container {
		padding: 16rem 4rem;
		background: #949993;
	}
`;
