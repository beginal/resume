import React, { useState } from "react";
import styled from "styled-components";
import Content from "components/molecules/Content";
import { skillsType } from "types";

export interface SkillSetProps {
	title: string;
	desc: string;
	initialDesc: string;
	item: skillsType[];
}

export const SkillSet: React.FC<SkillSetProps> = ({ title, desc, item, initialDesc, ...props }) => {
	const [skillDesc, setSkillDesc] = useState(initialDesc);
	const [descOver, setDescOver] = useState(false);

	const handleDesc = (desc: string) => {
		setSkillDesc(desc);
		setDescOver((props) => !props);
	};

	const styleProps = {
		title,
		desc,
		item,
		descOver,
		...props,
	};

	return (
		<>
			<Content title={title} desc={desc} />
			<SkillSetWrap {...styleProps}>
				<div className="skillDesc">{skillDesc}</div>
				<div className="skillList">
					{item.map(({ title, logo, description }, i) => (
						<div
							key={i}
							onMouseOver={() => handleDesc(description)}
							onMouseOut={() => handleDesc(initialDesc)}
						>
							{logo ? <img src={logo} alt={title} /> : <span>{title}</span>}
						</div>
					))}
				</div>
			</SkillSetWrap>
		</>
	);
};
export default SkillSet;

type SkillSetType = {
	descOver: boolean;
};

// style 영역
const SkillSetWrap = styled.div<SkillSetType>`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #ededed;
	.skillDesc {
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
		background: ${({ descOver }) => (descOver ? "#ffffff" : "#ededed")};
		color: #7c7a7a;
		border-radius: 4px;
		font-size: 0.8rem;
		font-weight: 400;
		line-height: 1.5;
		width: 100%;
		min-height: 100px;
		border-radius: 5px;
		padding: 15px 10px;
		text-align: center;
	}
	.skillList {
		user-select: none;
		display: flex;
		justify-content: center;
		flex-flow: row wrap;
		width: 100%;
		> div {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			background: #ffffff;
			cursor: text;
			margin-top: 0;
			border-radius: 10%;
			font-size: 0.7rem;
			width: 100px;
			height: 100px;
			margin: 10px;
			img {
				border-radius: 10%;
				width: inherit;
				height: inherit;
			}
			span {
				padding: 15px;
			}
			&:hover {
			}
		}
	}
`;
