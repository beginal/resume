import React from "react";
import styled from "styled-components";

interface Props {
	isQnaTab: boolean;
}

const QnAList = (props: Props) => {
	const { isQnaTab } = props;
	return (
		<QnaWrap isQnaTab={isQnaTab}>
			{isQnaTab && (
				<ul>
					<li>추가중인 기능입니다. 조금만 기다려주세요.</li>
				</ul>
			)}
		</QnaWrap>
	);
};

export default QnAList;

interface QnaWrapType {
	isQnaTab: boolean;
}

const QnaWrap = styled.div<QnaWrapType>`
	display: flex;
	transition: height 1.2s, visibility 1s;
	margin-top: -5px;
	min-width: 500px;
	max-width: 940px;
	width: 80%;
	border-radius: 0 4px 4px 0;
	background: white;
	z-index: 6;
	box-shadow: 0 5px 15px -4px rgba(0, 50, 93, 0.1);
	/* transform: ${({ isQnaTab }) => (isQnaTab ? "translateY(0)" : "translateY(-80%)")}; */
	visibility: ${({ isQnaTab }) => (isQnaTab ? "visible" : "hidden")};
	height: ${({ isQnaTab }) => (isQnaTab ? "400px" : "0vh")};
	padding: 20px;
`;
