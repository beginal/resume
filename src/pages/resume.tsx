import React, { useState, useEffect } from "react";
import { theme } from "styled-tools";
import { Title } from "components/backup/atoms/Title";
import Description from "components/backup/organisms/Description";
import Header from "components/backup/organisms/Header";
import { Nav } from "components/backup/organisms/Nav";
import { FloatingButton } from "components/backup/atoms/Button";
import TableList from "components/backup/organisms/TableList";
import styled from "styled-components";
import axios from "axios";
import { getPostsList, getProjectList, getSkillsList } from "redux/reducer/resumeReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import SkillSet from "components/backup/organisms/Skillset";
import Footer from "components/backup/organisms/Footer";
import { SiNotion } from "react-icons/si";
import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsBookHalf } from "react-icons/bs";
import { FiChevronUp, FiClipboard } from "react-icons/fi";
import IntroCard from "components/backup/organisms/IntroCard";
import PostList from "components/backup/organisms/PostList";

const resume: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		(async function () {
			const res = await axios.get(`./requests.json`);
			const data = res.data;
			dispatch(getProjectList(data.project));
			dispatch(getSkillsList(data.skills));
		})();
	}, []);

	useEffect(() => {
		(async function () {
			const res = await axios.get("https://tistoryblogcrawling.herokuapp.com/");
			dispatch(getPostsList(res.data));
		})();
	}, []);

	const { project, skills, posts } = useSelector((state: RootState) => state.resumeReducer);

	const navList = [
		{
			icon: <FiChevronUp />,
			text: "TOP",
		},
		{
			icon: <AiOutlineHome />,
			text: "INDEX",
		},
		{
			icon: <FiClipboard />,
			text: "CONTACT",
		},
		{
			icon: <AiOutlineProject />,
			text: "PROJECT",
		},
		{
			icon: <BsBookHalf />,
			text: "SKILL",
		},
	];
	return (
		<Wrap>
			<Header>ㅇㄴ</Header>
			<Nav menu={navList} />
			<main>
				<Description title="INDEX">
					<span>
						직접 웹페이지를 만들어보고 싶다는 생각으로 2019년부터 개발 공부를 시작했습니다. 포기하지
						않고 달려온 지금은 어엿한 React 개발자라고 말하고 싶습니다. 개발에서의 효율을 중요하게
						생각합니다. 코드의 효율을 높이기 위해 리팩토링에 많은 시간을 할애하는 편입니다.
						'이렇게도 할 수 있구나' 라는걸 깨달았을때 기분이 너무 좋습니다. 또한 반복적인 작업을
						자동화 하는 일을 좋아합니다. 자주 쓰는 조합키나 PC 사용 패턴 등을 단축키로 등록해두고
						편하게 사용합니다. 팀으로서 움직이는 개발자인 만큼 협업을 중요하게 생각합니다.
					</span>
				</Description>
				<IntroCard />

				<TableList
					title="PROJECT"
					item={project}
					desc="프로젝트에 대한 설명설명"
					tailText="이미지를 클릭하시면 각 프로젝트에 대한 자세한 설명을 확인하실수 있습니다."
				/>
				<SkillSet title="SKILL" desc="Skillset" item={skills} />
				<PostList posts={posts} title="POST" desc="블로그 포스팅 목록입니다." />
			</main>
			<FloatingButton link="https://www.notion.so/page0blue/Ham-Jun-Ho-73ff9b8c6a9f471392614cc8b8d7a80e">
				<SiNotion />
			</FloatingButton>
			<Footer github="https://github.com/beginal" />
		</Wrap>
	);
};

const Wrap = styled.div`
	background: ${theme("color.main")};
	color: ${theme("color.font")};
	main {
		display: flex;
		flex-direction: column;
		margin: 0 95px;
		padding-bottom: 120px;
	}
	@media ${({ theme }) => theme.mobileL} {
		height: 100%;
		main {
			margin: 0 10px;
			padding-bottom: 0px;
		}
	}
`;

export default resume;
