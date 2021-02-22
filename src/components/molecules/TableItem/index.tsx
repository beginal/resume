import React, { useState } from "react";
import Label from "components/atoms/Label";
import styled from "styled-components";
import Modal from "../Modal";

interface Props {
	title: string;
	image: string[];
	intro: string;
	description: string;
	stack: string[];
	link: { github: string; youtube: string };
}

const TableItems = ({ title, image, intro, description, stack, link }: Props) => {
	const [visiable, setVisable] = useState(false);

	const handleModal = () => {
		setVisable((props) => !props);
	};

	return (
		<TableItemWrap>
			<th className="title">
				<div onClick={handleModal}>
					<span>{title}</span>
					{image && <img src={image[0]} alt={title} />}
				</div>
			</th>
			<td className="descirption">
				<div>
					<div className="description_text">
						<div>{intro}</div>
						<div>{description}</div>
					</div>
					<div>
						{stack.map((item: string) => (
							<>
								<Label type="skill" text={item} />
							</>
						))}
					</div>
				</div>
			</td>
			<td className="etc">
				{link.github && (
					<div>
						<a href={link.github} target="_blank">
							Git
						</a>
					</div>
				)}
				{link.youtube && (
					<div>
						<a href={link.youtube} target="_blank">
							youtube
						</a>
					</div>
				)}
			</td>
			{visiable && <Modal image={image} title={title} setVisable={setVisable} />}
		</TableItemWrap>
	);
};

export default TableItems;

const TableItemWrap = styled.tr`
	border-bottom: 1px solid gray;
	height: 100%;
	th {
		padding: 20px 0;
		vertical-align: middle;
	}
	.title,
	.etc {
		vertical-align: middle;
		text-align: center;
	}
	.title {
		div {
			cursor: pointer;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-weight: 700;
			img {
				opacity: 0.9;
				width: 180px;
				height: 180px;
			}
			span {
				z-index: 3;
				background: rgba(255, 255, 255, 0.6);
				box-shadow: rgba(0, 0, 0, 0.15) 4px 4px;
				color: gray;
				position: absolute;
				padding: 5px 0;
			}
		}
	}
	.descirption {
		> div {
			display: flex;
			flex-direction: column;
			padding: 1px 5px;
			justify-content: space-between;
			height: 180px;
			line-height: 1.3;
			.description_text {
				div {
					font-size: 0.9rem;
					&:first-of-type {
						font-size: 1rem;
						font-weight: 500;
						padding-bottom: 4px;
					}
				}
			}
		}
		padding: 15px 2px;
	}
`;
