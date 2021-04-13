import React from "react";
import styled from "styled-components";
import Content from "components/backup/molecules/Content";
import { skillsType } from "types";

export interface SkillSetProps {
	title: string;
	desc: string;
	item: skillsType[];
}

const SkillItem = ({ title, logo, description }: skillsType) => {
	return (
		<li>
			<div>
				<img src={logo} alt={title} />
			</div>
			<div>
				<h3>{title}</h3>
				<span>{description}</span>
			</div>
		</li>
	);
};

export const SkillSet: React.FC<SkillSetProps> = ({ title, desc, item, ...props }) => {
	const styleProps = {
		title,
		desc,
		item,
		...props,
	};

	return (
		<>
			<Content title={title} desc={desc} />
			<SkillSetWrap {...styleProps}>
				{item.map(({ title, logo, description }, i) => (
					<SkillItem key={i} title={title} logo={logo} description={description} />
				))}
			</SkillSetWrap>
		</>
	);
};
export default SkillSet;

type SkillSetType = {
	descOver?: boolean;
};

// style 영역
const SkillSetWrap = styled.ul<SkillSetType>`
	display: flex;
	flex-direction: column;
	flex-flow: row wrap;
	li {
		flex-grow: 1;
		display: flex;
		padding: 10px 0;
		width: 600px;
		div {
			&:first-of-type {
				display: flex;
				align-items: center;
				padding: 0 10px;
				img {
					border-radius: 20px;
					width: 50px;
				}
			}
			&:last-of-type {
				display: flex;
				flex-direction: column;
				h3 {
					font-weight: 500;
					padding: 5px 0;
				}
				span {
					font-size: 0.9rem;
					line-height: 1.4;
					font-weight: 300;
				}
			}
		}
	}
`;
