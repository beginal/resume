import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { prop, ifProp, theme } from "styled-tools";

export interface NavProps {
	navTitle: string;
	menu: string[];
}

export const Nav: React.FC<NavProps> = ({ navTitle, menu, ...props }) => {
	const [switchNav, setSwitchNav] = useState(false);
	const [navLeft, setNavLeft] = useState(-500);

	const moveEvent = (id?: string) => {
		// 해당 항목으로 스무스한 이동
		window.scrollTo({
			top: id ? document.getElementById(id)?.offsetTop : 0,
			left: 0,
			behavior: "smooth",
		});
	};

	const toggleMenu = (bool?: boolean) => {
		//	tablet 미만 사이즈에서 Nav Toggle
		if (bool) {
			setSwitchNav(true);
		} else {
			setSwitchNav(false);
		}
	};

	useEffect(() => {
		//	tablet 미만 사이즈에서 Nav가 스무스하게 움직이게 하기 위함
		if (switchNav) {
			setNavLeft(0);
		} else {
			setNavLeft(-500);
		}
	}, [switchNav]);

	const menuList = (start: number, end: number) => {
		return (
			<div>
				<ul>
					{menu.slice(start, end).map((item, i) => (
						<li key={i} onClick={() => moveEvent(item)}>
							{item}
						</li>
					))}
				</ul>
			</div>
		);
	};

	const styleProps = {
		switchNav,
		navTitle,
		navLeft,
		...props,
	};
	return (
		<NavWrap {...styleProps}>
			<div className="drawer" onClick={() => toggleMenu(true)}>
				삼지창
			</div>
			<div className="background" onClick={() => toggleMenu(false)}>
				<div className="navBar">
					{menuList(0, 3)}
					<div className="navTitle" onClick={() => moveEvent()}>
						{navTitle}
					</div>
					{menuList(3, 6)}
				</div>
			</div>
		</NavWrap>
	);
};

type navType = {
	switchNav: boolean;
	navLeft: number;
};
// style 영역
const NavWrap = styled.nav<navType>`
	position: sticky;
	top: 0;
	background: rgba(184, 184, 184, 0.8);
	padding: 8px 30px;
	z-index: 10;
	.drawer {
		display: none;
	}
	.navBar {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 0;
		color: #6c757d;
		font-weight: 500;
		div {
			display: flex;
			min-width: 250px;
			&:first-of-type {
				justify-content: flex-end;
			}
			&:last-of-type {
				justify-content: flex-start;
			}
			ul {
				display: flex;
				li {
					padding: 8px 10px;
					font-size: 0.9rem;
					cursor: pointer;
					&:hover {
						color: #343a40;
					}
				}
			}
		}
		.navTitle {
			padding: 0 20px;
			min-width: auto;
			font-size: 1.5rem;
			font-weight: 600;
			color: #000000;
			cursor: pointer;
		}
	}
	@media ${({ theme }) => theme.tablet} {
		.drawer {
			display: block;
			cursor: pointer;
		}
		.background {
			${theme("modalBackground")};
			transition: visibility 0.5s;
			visibility: ${ifProp("switchNav", "visibility", "hidden")};
			.navBar {
				flex-direction: column;
				align-items: flex-end;
				position: fixed;
				top: 0;
				left: ${prop("navLeft")}px;
				bottom: 0;
				transition: left 0.5s;
				box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.3);
				width: 200px;
				background: white;
				.navTitle {
					display: none;
				}
				> div {
					min-width: auto;
					ul {
						flex-direction: column;
						li {
							text-align: right;
							font-size: 1.3rem;
						}
					}
				}
			}
		}
	}
`;
