import React, { useState } from "react";
import styled from "styled-components";
import useScroll, { moveEvent } from "hooks/useScroll";

const Nav = () => {
	const { scrollY, scrollPer } = useScroll(0);

	const styleProps = {
		scrollY,
		scrollPer,
	};

	return (
		<NavWrap {...styleProps}>
			<div></div>
		</NavWrap>
	);
};

export default Nav;

type navType = {
	scrollY: number;
	scrollPer: number;
};
// style 영역
const NavWrap = styled.nav<navType>`
	position: fixed;
	top: 0;
	z-index: 999;
	background: #ffffff;
	width: 100%;
	height: 6px;
	div {
		background: #579ff2;
		width: ${({ scrollPer }) => `${scrollPer}%`};
		height: inherit;
	}
`;
