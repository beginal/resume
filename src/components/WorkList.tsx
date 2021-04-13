import React from "react";
import Workprice from "./Workprice";
import styled from "styled-components";

interface Props {
	projectList: any[];
}

const WorkList = ({ projectList }: Props) => {
	return (
		<WorkListWrap>
			{projectList.map((project, i) => (
				<Workprice key={i} project={project} />
			))}
		</WorkListWrap>
	);
};

export default WorkList;

const WorkListWrap = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	margin: 100px 0;
`;
