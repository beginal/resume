import React from "react";
import styled from "styled-components";

export interface NavProps {
	navTitle: string;
	firstMenu: string[];
	lastMenu?: string[];
}

export const Nav: React.FC<NavProps> = ({ navTitle, firstMenu, lastMenu, ...props }) => {
	const styleProps = {
		navTitle,
		...props,
	};

	const moveEvent = (id?: string) => {
		window.scrollTo({
			top: id ? document.getElementById(id)?.offsetTop : 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<NavWrap {...styleProps}>
			<div className="navBar">
				<div>
					<ul>
						{firstMenu.map((item) => (
							<li onClick={() => moveEvent(item)}>{item}</li>
						))}
					</ul>
				</div>
				<div className="navTitle" onClick={() => moveEvent()}>
					{navTitle}
				</div>
				<div>
					<ul>
						{lastMenu?.map((item) => (
							<li onClick={() => moveEvent(item)}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</NavWrap>
	);
};

// style 영역
const NavWrap = styled.nav`
	position: sticky;
	top: 0;
	background: rgba(184, 184, 184, 0.8);
	padding: 8px 30px;
	z-index: 10;
	.navBar {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 0;
		color: #6c757d;
		font-weight: 500;
		div {
			min-width: 200px;
			&:first-of-type {
				text-align: right;
			}
			&:last-of-type {
				text-align: left;
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
	}
	.navTitle {
		padding: 0 20px;
		min-width: auto;
		font-size: 1.5rem;
		font-weight: 600;
		color: #000000;
		cursor: pointer;
	}
`;
