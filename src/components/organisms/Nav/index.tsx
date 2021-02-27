import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withProp, ifProp, theme } from "styled-tools";

type Menu = {
	icon?: JSX.Element;
	text: string;
};

export interface NavProps {
	menu: Menu[];
}

export const Nav: React.FC<NavProps> = ({ menu, ...props }) => {
	const [scrollY, setScrollY] = useState(0);
	const [scrollPer, setScrollPer] = useState(0);
	const [foldMenu, setFoldMenu] = useState(false);

	const scrollEvent = () => {
		setScrollY(window.pageYOffset);
		setScrollPer((window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollEvent);
		return () => {
			window.removeEventListener("scroll", scrollEvent);
		};
	});

	const moveEvent = (id?: string) => {
		// 해당 항목으로 스무스한 이동
		window.scrollTo({
			top: id ? document.getElementById(id)?.offsetTop : 0,
			left: 0,
			behavior: "smooth",
		});
	};

	const handleFold = () => {
		setFoldMenu((props) => !props);
	};

	useEffect(() => {
		console.log(foldMenu);
	}, [foldMenu]);
	const styleProps = {
		scrollY,
		scrollPer,
		foldMenu,
		...props,
	};
	return (
		<NavWrap {...styleProps}>
			<ul className="navUl">
				{menu.map((item, i) => (
					<li key={i} onClick={() => moveEvent(item.text)}>
						{item.icon}
						<span>{item.text}</span>
					</li>
				))}
				<li onClick={handleFold}>{"<<"}</li>
			</ul>
		</NavWrap>
	);
};

type navType = {
	scrollY: number;
	scrollPer: number;
	foldMenu: boolean;
};
// style 영역
const NavWrap = styled.nav<navType>`
	position: fixed;
	transition: top 0.7s, left 0.7s;
	top: ${ifProp("foldMenu", "260px", "190px")};
	left: ${ifProp("foldMenu", "3px", "20px")};
	z-index: 20;
	cursor: pointer;
	ul {
		position: relative;
		font-size: 2rem;
		opacity: 0.8;
		transition: all 0.3s;
		&:hover {
			opacity: 1;
		}
		&:before {
			content: "";
			position: absolute;
			top: 0;
			right: -10%;
			width: 6px;
			height: ${withProp("scrollPer", (scrollPer) => scrollPer)}%;
			z-index: 5;
			background: #fd888c;
		}
		li {
			background: #fd555c;
			position: relative;
			transition: padding 0.7s;
			padding: ${ifProp("foldMenu", "2px", "12px")};
			width: 100%;
			height: 100%;
			&:last-of-type {
				display: flex;
				justify-content: center;
				font-size: 1.2rem;
				padding: 5;
				background: white;
			}
			span {
				position: absolute;
				top: 0;
				left: 100%;
				transition: width 0.4s;
				display: flex;
				justify-content: center;
				align-items: center;
				/* visibility: hidden; */
				border-radius: 1px;
				width: 5px;
				font-size: 0;
				font-weight: 500;
				padding: 3px;
				height: inherit;
				background: white;
			}
			&:hover {
				background: white;
				span {
					/* visibility: visible; */
					left: 100%;
					width: 140px;
					font-size: 1.1rem;
				}
			}
		}
	}
	@media ${({ theme }) => theme.tablet} {
	}
	@media ${({ theme }) => theme.mobileL} {
	}
`;
