import Content from "components/molecules/Content";
import React from "react";
import styled from "styled-components";

interface Props {
	title?: string;
}

const IntroCard = ({ title = "CONTACT" }: Props) => {
	return (
		<Wrap>
			<Content title={title} center />
			<div>
				<div>
					<img src="./img/me.jpg" alt="HAMJUNHO" />
				</div>
				<div>
					<span>Phone . 010-9215-9984</span>
					<span>Email . beginal01@gmail.com</span>
					<span>Blog . https://jsbeginner.tistory.com/</span>
					<span>GitHub . https://github.com/beginal</span>
					<span>Hobby . 드라마시청, 게임, 코딩</span>
					<p>우하단 아이콘을 클릭하시면 이동할 수 있습니다.</p>
					<a href="https://www.rocketpunch.com/@beginal01/jobhunt">입사 제안 하러가기</a>
				</div>
			</div>
		</Wrap>
	);
};

export default IntroCard;

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background: white; */
	padding: 10px;
	border-radius: 4px;
	> div {
		display: flex;
		justify-content: space-between;
		div {
			&:first-of-type {
				display: flex;
				justify-content: center;
				border-radius: 5px;
				img {
					width: 250px;
					height: 280px;
				}
			}
			&:last-of-type {
				display: flex;
				flex-direction: column;
				font-size: 0.95rem;
				padding: 0 10px;
				line-height: 2;
			}
		}
	}
`;
