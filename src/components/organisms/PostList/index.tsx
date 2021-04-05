import Content from "components/molecules/Content";
import React from "react";
import styled from "styled-components";
import { postsType } from "types";

interface Props {
	posts: postsType[];
	title: string;
	desc?: string;
}

const PostList = ({ posts, title, desc }: Props) => {
	return (
		<StyledWrap>
			<Content title={title} desc={desc} />
			<div className="postList">
				{posts[0] &&
					posts.map(({ title, link, date, new: newPost }) => (
						<div>
							<a href={link} target="_blank">
								<span key={title + link}>{title}</span>
							</a>
							<p>{date}</p>
							<div>{newPost ? "N" : ""}</div>
						</div>
					))}
			</div>
		</StyledWrap>
	);
};

export default PostList;

const StyledWrap = styled.div`
	display: flex;
	flex-direction: column;
	.postList {
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
		> div {
			display: flex;
			align-items: center;
			font-size: 18px;
			padding: 18px;
			margin-top: -1px;
			background: white;
			border: 1px solid #f1f3f6;
			border-bottom: none;
			&:last-of-type {
				border-bottom: 1px solid #f1f3f6;
			}
			&:hover {
				background: #f3f5f7;
			}
			a {
				&:hover {
					text-decoration: underline;
				}
				span {
					padding-left: 10px;
					padding-right: 5px;
				}
			}
			p {
				font-size: 13px;
				color: #808080;
			}
			> div {
				color: red;
				padding-left: 9px;
				font-weight: 600;
			}
		}
	}
`;
