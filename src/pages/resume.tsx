import React, { useEffect } from "react";
import { Title } from "components/atoms/Title";
import Description from "components/organisms/Description";
import Header from "components/organisms/Header";
import { Nav } from "components/organisms/Nav";
import TableList from "components/organisms/Project";
import styled from "styled-components";
import axios from "axios";
import { getProjectList } from "redux/reducer/resumeReducer";
import { useDispatch } from "react-redux";

const resume: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		(async function () {
			const res = await axios.get(`./project.json`);
			const data = res.data;
			console.log(data);
			dispatch(getProjectList(data.project));
		})();
	}, []);
	return (
		<Wrap>
			<Header>
				<Title size="large" color="white" label="개발자 홍길동 입니다" />
			</Header>
			<Nav
				firstMenu={["INDEX", "STORY", "PROJECT"]}
				lastMenu={["CONTACT", "ABCDE", "FGIHU"]}
				navTitle="HAM JUN HO"
			/>
			<main>
				<Description title="INDEX">
					<span>
						안녕하세요. Javascript Fullstack개발자 류준열입니다. 저는 올해 22살이며, 상상하는 것을
						만들 수 있다는 것에 매력을 느껴 Hardcore Coding Style에 중독되어 버린 젊은 청춘입니다.
						린 스타트업 (Lean Startup) , 린 사고방식 (Lean Thinking), 애자일 (Agile) 방법론 등,
						개발자를 창조적으로 괴롭히는 혁신적인 방식을 사랑합니다.
					</span>
				</Description>
				<TableList title="PROJECT" desc="프로젝트에 대한 설명설명">
					프로젝트
				</TableList>
			</main>
		</Wrap>
	);
};

const Wrap = styled.div`
	background: #eaeae9;
	main {
		display: flex;
		flex-direction: column;
		margin: 0 85px;
	}
`;

export default resume;
