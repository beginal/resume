import React from "react";
import styled from "styled-components";

export interface FooterProps {
	github?: string;
	blog?: string;
}

export const Footer: React.FC<FooterProps> = ({ github, blog, ...props }) => {
	const styleProps = {
		...props,
	};

	const LinkList = [
		{
			title: "GITHUB",
			link: github,
		},
		{
			title: "BLOG",
			link: blog,
		},
		{
			title: "empty",
			link: "",
		},
		{
			title: "empty",
			link: "",
		},
		{
			title: "empty",
			link: "",
		},
	];

	return (
		<FooterWrap {...styleProps}>
			{/* <div>
				<ul>
					{LinkList.map(({ title, link }) => (
						<li key={title}>
							<a href={link} target="_blank">
								{title}
							</a>
						</li>
					))}
				</ul>
			</div> */}
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
	margin: 0 200px;
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
