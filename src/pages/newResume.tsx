import React, { useState, useEffect } from "react";
import PostList from "components/PostList";
import SkillSet from "components/SkillSet";
import Footer from "components/Footer";
import Header from "components/Header";
import styled from "styled-components";
import axios from "axios";
import { getPostsList, getProjectList, getSkillsList } from "redux/reducer/resumeReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import WorkList from "components/WorkList";
import Nav from "components/Nav";
import QnAList from "components/QnAList";

const newResume: React.FC = () => {
	const dispatch = useDispatch();
	const [isQnaTab, setIsQnaTab] = useState(false);

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

	const ToggleQnATab = () => {
		setIsQnaTab((props) => !props);
	};

	const { project, skills, posts } = useSelector((state: RootState) => state.resumeReducer);

	return (
		<ResumeWrap>
			<Header showQnA={ToggleQnATab} />
			<Nav />
			<main>
				<div className="container">
					<QnAList isQnaTab={isQnaTab} />
					<WorkList projectList={project} />
					<SkillSet skillList={skills} title="SKILL" />
					<PostList
						posts={posts}
						title="POST"
						desc="블로그 포스팅 목록입니다. 로딩에 약간의 시간이 걸립니다."
					/>
				</div>
			</main>
			<Footer />
		</ResumeWrap>
	);
};

export default newResume;

const ResumeWrap = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	main {
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			max-width: 940px;
			> div {
				width: 100%;
			}
		}
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
	}
`;
