import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

interface Props {
	image: string[];
	title: string;
	details: string[];
	setVisable: (arg0: boolean) => void;
}

const Modal = ({ image, title, details, setVisable }: Props) => {
	const imageRef = useRef(null);
	const [currentImageSrc, setCurrentImageSrc] = useState(0);

	const notRunningEvent = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	const imageReplece = (i: number) => {
		setCurrentImageSrc(i);
	};

	useEffect(() => {
		// Modal창 바깥쪽 스크롤 막기
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	});

	return (
		<Background onClick={() => setVisable(false)}>
			<ModalForm onClick={notRunningEvent}>
				<div className="modalHeader" onClick={() => setVisable(false)}>
					<h2 className="title">{title}</h2>
					<CgClose className="closeBtn" />
				</div>
				<div className="modalBody">
					<div className="imageList">
						<img src={image[currentImageSrc]} ref={imageRef} />
						<div>
							{image &&
								image.map((v: string, i: number) => (
									<img key={i} onMouseOver={() => imageReplece(i)} src={v} />
								))}
						</div>
						<span className="tales">각 이미지에 마우스를 올려보세요.</span>
					</div>
					<div className="details">
						<ul>
							{details.map((detail: string, i) => (
								<li key={i}>{detail}</li>
							))}
						</ul>
					</div>
				</div>
			</ModalForm>
		</Background>
	);
};

export default Modal;

const Background = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	background: rgba(0, 0, 0, 0.7);
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 15;
`;

const ModalForm = styled.div`
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	width: 580px;
	.modalHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: white;
		border-bottom: 1px solid #dee2e6;
		border-radius: 3px 3px 0 0;
		width: 100%;
		padding: 15px;
		/* margin-bottom: 10px; */
		.title {
			padding-left: 10px;
			font-size: 1.4rem;
			font-weight: 500;
		}
		.closeBtn {
			color: gray;
			background: white;
			font-size: 25px;
			transition: all 0.3s;
			&:hover {
				cursor: pointer;
				color: red;
				transform: rotate(-90deg);
			}
		}
	}
	.modalBody {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: white;
		min-height: 400px;
		padding: 10px 30px 20px 30px;
		border-radius: 0 0 3px 3px;
		.imageList {
			width: 430px;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			img {
				width: 100%;
				height: 240px;
				padding: 5px;
			}
			div {
				width: 100%;
				display: flex;
				justify-content: center;
				img {
					opacity: 0.6;
					width: 80px;
					height: 50px;
					&:hover {
						opacity: 1;
					}
				}
			}
		}
		.details {
			border-top: 1px solid #dee2e6;
			margin-top: 10px;
			overflow: scroll;
			height: 260px;
			color: #333333;
			ul {
				padding: 10px;
				box-sizing: border-box;
				font-size: 0.85rem;
				li {
					margin-left: 20px;
					list-style: disc;
					line-height: 1.3rem;
					font-weight: 400;
					padding: 5px 0;
				}
			}
		}
	}
	z-index: 20;
`;
