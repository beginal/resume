import React from "react";
import styled from "styled-components";
import Content from "./backup/molecules/Content";

interface Props {
	title: string;
	desc?: string;
	skillList: any;
}

const SkillSet = (props: Props) => {
	const { skillList, title } = props;
	return (
		<SkillWrap>
			<Content title={title} />
			{skillList.map(({ title, logo, description }: any, i: number) => (
				<div key={i}>
					<img src={logo} alt="" />
					<div>
						<h3>{title}</h3>
						<span>{description}</span>
					</div>
				</div>
			))}
		</SkillWrap>
	);
};

export default SkillSet;

const SkillWrap = styled.div`
	h2 {
		font-size: 2.3rem;
		font-weight: 600;
		padding: 10px 0;
		margin-bottom: 30px;
	}
	> div {
		display: flex;
		margin: 10px 0;
		img {
			width: 40px;
			height: 40px;
			border-radius: 8px;
			box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
		}
		> div {
			padding: 0 10px;
			span {
				font-size: 0.9rem;
				line-height: 1.5;
			}
		}
	}
`;
