import React, { useEffect, useState } from "react";
import { AiFillYoutube, AiOutlineGithub } from "react-icons/ai";
import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";

interface Props {
	project: any;
}

const Workprice = ({ project }: Props) => {
	const { description, title, stack, link, period, intro, image, details } = project;
	const [defaultModal, setDefaultModal] = useState(false);
	const [youtubeModal, setYoutubeModal] = useState(false);

	const handleModal = (item?: string) => {
		if (item === "default") {
			setYoutubeModal(false);
			setDefaultModal(true);
		} else if (item === "youtube") {
			setDefaultModal(false);
			setYoutubeModal(true);
		} else {
			setDefaultModal(false);
			setYoutubeModal(false);
		}
	};

	return (
		<>
			<PriceWrap>
				<div className="workImage">
					<img src={image[0]} alt="" />
				</div>
				<div className="description">
					<h3>{title}</h3>
					<p>{description}</p>
					<p>{period}</p>
					<div>
						{stack.map((item: string, i: number) => (
							<span key={i}>{item}</span>
						))}
					</div>
				</div>
				<div className="buttonList">
					<Button size="regular" onClick={() => handleModal("default")}>
						자세히 보기
					</Button>
					<div className="icon">
						{link.github && (
							<a href={link.github}>
								<AiOutlineGithub />
							</a>
						)}
						{link.youtube && (
							<button onClick={() => handleModal("youtube")}>
								<AiFillYoutube color="red" />
							</button>
						)}
					</div>
				</div>
			</PriceWrap>
			{defaultModal && (
				<Modal image={image} title={title} details={details} setVisable={setDefaultModal} />
			)}
			{youtubeModal && <Modal type="youtube" link={link.youtube} setVisable={setYoutubeModal} />}
		</>
	);
};

export default Workprice;

const PriceWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: white;
	padding: 18px;
	margin: 10px;
	width: 285px;
	box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
	border-radius: 4px;
	transition: all 0.6s;
	&:hover {
		transform: translate(0, -4%);
	}
	.workImage {
		width: 100%;
		margin-bottom: 12px;
		img {
			width: inherit;
			height: 150px;
			object-fit: cover;
		}
	}
	.description {
		h3 {
			color: #527ee4;
			font-size: 1rem;
			padding: 5px 0;
		}
		p {
			&:first-of-type {
				margin: 5px 0;
				height: 50px;
				font-size: 0.85rem;
			}
			&:last-of-type {
				font-size: 0.7rem;
				color: #527ee4;
			}
			line-height: 1.2;
		}
		div {
			display: flex;
			width: 100%;
			flex-flow: row wrap;
			padding: 10px 0;
			height: 70px;
			span {
				height: 20px;
				text-transform: uppercase;
				border-radius: 8px;
				margin: 2px 2px 0 2px;
				padding: 0 6px;
				font-weight: 300;
				font-size: 11px;
				line-height: 1.8;
				color: white;
				background: #527ee4;
			}
		}
	}
	.buttonList {
		display: flex;
		align-items: center;
		justify-content: space-between;
		bottom: 0;
		.icon {
			border: none;
			outline: none;
			font-size: 1.5rem;
			background: none;
			cursor: pointer;
			button {
				font-size: 1.5rem;
				border: none;
				background: none;
				outline: none;
			}
			> a,
			button {
				margin: 10px;
				svg {
					&:hover {
						transform: rotate(15deg);
					}
				}
			}
		}
	}
`;
