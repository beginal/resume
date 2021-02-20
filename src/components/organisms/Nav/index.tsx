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
	position: sticky;
	background: rgba(184, 184, 184, 0.6);
	padding: 8px 30px;
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
					&:hover {
						color: #343a40;
					}
					a {
						font-size: 0.9rem;
						padding: 8px 10px;
					}
				}
			}
		}
		.navTitle {
			padding: 0 10px;
			min-width: auto;
			font-size: 1.5rem;
			font-weight: 600;
			color: #000000;
		}
	}
`;
