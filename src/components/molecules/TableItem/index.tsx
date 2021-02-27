import React, { useState } from "react";
import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";
import Label from "components/atoms/Label";
import styled from "styled-components";
import Modal from "../Modal";

interface Props {
	title: string;
	image: string[];
	intro: string;
	description: string[];
	details: string[];
	stack: string[];
	period: string;
	link: { github: string; youtube: string };
}

const TableItems = ({ title, image, intro, description, details, stack, period, link }: Props) => {
	const [defaultModal, setDefaultModal] = useState(false);
	const [youtubeModal, setYoutubeModal] = useState(false);

	const handleModal = (item?: string) => {
		if (item === "defaultModal") {
			setYoutubeModal(false);
			setDefaultModal(true);
		} else if (item === "youtubeModal") {
			setDefaultModal(false);
			setYoutubeModal(true);
		} else {
			setDefaultModal(false);
			setYoutubeModal(false);
		}
	};

	return (
		<TableItemWrap>
			<th className="title">
				<div onClick={() => handleModal("defaultModal")}>
					{/* <span>{title}</span> */}
					{image && <img src={image[0]} alt={title} />}
				</div>
			</th>
			<td className="descirption">
				<div>
					<div className="description_text">
						<div>{intro}</div>
						{description.map((item, i) => (
							<div key={i}>{item}</div>
						))}
						<div className="period">{period}</div>
					</div>
					<div>
						{stack.map((item: string, i) => (
							<Label key={i} type="skill" text={item} />
						))}
					</div>
				</div>
			</td>
			<td className="etc">
				{link.github && (
					<div>
						<a href={link.github} target="_blank">
							<AiOutlineGithub />
						</a>
					</div>
				)}
				{link.youtube && (
					<div onClick={() => handleModal("youtubeModal")}>
						<AiFillYoutube />
					</div>
				)}
			</td>
			<td>
				{defaultModal && (
					<Modal image={image} title={title} details={details} setVisable={setDefaultModal} />
				)}
				{youtubeModal && <Modal type="youtube" link={link.youtube} setVisable={setYoutubeModal} />}
			</td>
		</TableItemWrap>
	);
};

export default TableItems;

const TableItemWrap = styled.tr`
	border-bottom: 1px solid gray;
	height: 100%;
	> .title,
	.etc {
		vertical-align: middle;
		text-align: center;
	}
	> .title {
		padding: 20px 0;
		margin: 0 auto;
		div {
			cursor: pointer;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-weight: 700;
			img {
				width: 160px;
				height: 110px;
				opacity: 0.9;
			}
			span {
				width: 160px;
				height: 110px;
				display: flex;
				align-items: center;
				justify-content: center;
				z-index: 3;
				background: rgba(0, 0, 0, 0.4);
				box-shadow: rgba(0, 0, 0, 0.15) 4px 4px;
				font-weight: 400;
				color: white;
				position: absolute;
				transition: all 0.3s;
				padding: 5px 0;
				&:hover {
					background: rgba(0, 0, 0, 0.1);
					color: black;
				}
			}
		}
	}
	.descirption {
		height: 1px;
		// 높이 꼼수
		> div {
			display: flex;
			flex-direction: column;
			height: 100%;
			padding: 1px 5px;
			justify-content: space-between;
			line-height: 1.3;
			.description_text {
				div {
					font-size: 0.85rem;
					line-height: 1.3;
					&:first-of-type {
						font-size: 1rem;
						font-weight: 500;
						padding-bottom: 4px;
					}
				}
				.period {
					padding: 10px 0;
					color: gray;
					font-size: 0.76rem;
				}
			}
		}
		padding: 15px 2px;
	}
	.etc {
		div {
			cursor: pointer;
			font-size: 30px;
			&:first-of-type {
				transition: all 0.3s;
				&:hover {
					color: gray;
				}
			}
			&:last-of-type {
				transition: all 0.3s;
				&:hover {
					color: red;
				}
			}
		}
	}
	@media ${({ theme }) => theme.mobileL} {
		.title {
			padding: 0;
			div {
				width: 50px;
				width: 50px;
				img {
					width: inherit;
					height: inherit;
				}
			}
		}
	}
`;
