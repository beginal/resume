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
	return (
		<NavWrap {...styleProps}>
			<div className="navBar">
				<div>
					<ul>
						{firstMenu.map((item) => (
							<li>
								<a href={`#${item}`}>{item}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="navTitle">
					<a href="#">{navTitle}</a>
				</div>
				<div>
					<ul>
						{lastMenu?.map((item) => (
							<li>
								<a href={`#${item}`}>{item}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</NavWrap>
	);
};

type NavType = {};

// style 영역
const NavWrap = styled.nav<NavType>`
	background: gray;
	padding: 8px 30px;
	.navBar {
		display: flex;
		justify-content: space-between;
		div {
			min-width: 300px;
			ul {
				display: flex;
				li {
					a {
						padding: 8px;
					}
				}
			}
		}
		.navTitle {
			min-width: auto;
			font-size: 1.25rem;
		}
	}
`;
