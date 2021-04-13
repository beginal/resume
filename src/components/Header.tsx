import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ToolTip from "./ToolTip";

interface Props {
	showQnA: () => void;
}

const Header = (props: Props) => {
	const { showQnA } = props;
	return (
		<HeaderWrap>
			<SelfIntroCard>
				<div>
					<span>*</span>
					<div>
						{/* <ToolTip message="클릭하시면 --로 이동합니다." /> */}
						<img src="./img/me.jpg" alt="hamjunho photo" />
					</div>
					<div>
						<Button color="#11cdef">blog</Button>
						<Button color="#cccedf">GITHUB</Button>
						{/* <Button size="regular">REGULAR</Button>
						<Button size="large">LARGE BUTTON</Button> */}
					</div>
				</div>
				<div>
					<h3>Ham Jun Ho</h3>
					<p>Front-end Developer</p>
					<span>매일 조금씩 발전하는 부지런한 개발자</span>
					<ul>
						<li>
							<label htmlFor="phone">Phone</label>
							<span>010-9215-9984</span>
						</li>
						<li>
							<label htmlFor="email">Email</label>
							<span>beginal01@gmail.com</span>
						</li>
						<li>
							<label htmlFor="blog">Blog</label>
							<span>https://jsbeginner.tistory.com/</span>
						</li>
						<li>
							<label htmlFor="github">GitHub</label>
							<span>https://github.com/beginal</span>
						</li>
					</ul>
					<div>
						<p>
							언제나 효율적으로 일하기 위해 매번 <b>고민</b>합니다.
						</p>
						<p>
							끝까지 매달려서 해결해내고 마는 <b>끈기</b>와 <b>열정</b>을 가지고 있습니다.
						</p>
						<p>
							끊임없이 성장을 추구하여 <b>어디에서나 인정받는 개발자</b>로 남고싶습니다.
						</p>
					</div>
					<Button size="regular" onClick={showQnA}>
						제가 더 궁금하신가요?
					</Button>
				</div>
			</SelfIntroCard>
		</HeaderWrap>
	);
};

export default Header;

const HeaderWrap = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	background: linear-gradient(360deg, #7795f8, #579ff2 90%);
	padding-top: 20rem;
	&::before {
		position: absolute;
		bottom: -5%;
		height: 100px;
		width: 150%;
		transform: rotate(-2deg);
		z-index: -1;
		background-color: #7795f8;
		content: "";
	}
`;

const SelfIntroCard = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 4px;
	min-width: 500px;
	max-width: 940px;
	width: 80%;
	padding: 20px;
	z-index: 5;
	box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
	> div {
		&:first-of-type {
			position: relative;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10px 0 25px 0;
			width: 100%;
			> div:first-of-type {
				left: 50%;
				position: absolute;
				transform: translate(-50%, -10%);
				cursor: pointer;
				transition: all 0.3s;
				img {
					object-fit: cover;
					width: 180px;
					height: 180px;
					border-radius: 50%;
					box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
				}
				&:hover {
					transform: translate(-50%, -15%);
				}
			}
		}
		&:last-of-type {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 50px;
			color: #333333;
			h3 {
				font-weight: 500;
				font-size: 1.8rem;
			}
			p {
				font-size: 0.9rem;
				padding: 10px 0;
			}
			span {
				font-size: 0.95rem;
				padding: 10px 0;
				font-weight: 400;
			}
			ul {
				margin-top: 20px;
				li {
					font-size: 0.95rem;
					padding: 4px 0;
					label {
						padding-right: 20px;
					}
					span {
						font-size: 0.9rem;
					}
				}
			}
			div {
				text-align: center;
				padding: 48px 0 32px 0;
				margin-top: 48px;
				width: 100%;
				border-top: 1px solid #e9ecef;
				font-size: 1rem;
				font-weight: 300;
				b {
					color: #738feb;
					font-weight: 400;
				}
				p {
					padding: 5px 0;
				}
			}
		}
	}
`;
