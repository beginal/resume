import { Button } from "components/backup/atoms/Button";
import Content from "components/backup/molecules/Content";
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
				<div className="description">
					<div>
						<span>Phone . 010-9215-9984</span>
						<span>Email . beginal01@gmail.com</span>
						<span>Blog . https://jsbeginner.tistory.com/</span>
						<span>GitHub . https://github.com/beginal</span>
						<span>Hobby . 드라마시청, 게임, 코딩</span>
					</div>
					<div>
						<p>우하단 아이콘을 클릭하시면 노션 이력서를 확인하실 수 있습니다.</p>
						<Button
							link="https://www.rocketpunch.com/@beginal01/jobhunt"
							label="입사 제안 하러가기"
						/>
					</div>
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
			display: flex;
			justify-content: center;
			border-radius: 5px;
			img {
				width: 250px;
				height: 280px;
			}
		}
		.description {
			display: flex;
			flex: 1;
			flex-direction: column;
			font-size: 0.95rem;
			line-height: 2;
			padding: 0 10px;
			justify-content: space-between;
			> div {
				display: flex;
				flex-direction: column;
			}
			p {
				font-size: 0.82rem;
				margin: 5px 0;
				color: gray;
			}
		}
	}
	@media ${({ theme }) => theme.mobileL} {
		div {
			width: 100%;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			&:first-of-type {
				width: fit-content;
			}
		}
	}
`;
