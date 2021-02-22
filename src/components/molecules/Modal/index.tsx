import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

interface Props {
	image: string[];
	title: string;
	setVisable: (arg0: boolean) => void;
}

const Modal = ({ image, title, setVisable }: Props) => {
	const imageRef = useRef(null);
	const [currentImageSrc, setCurrentImageSrc] = useState(0);
	const notRunningEvent = (event: any) => {
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
				<div>{title}</div>
				<div className="imageList">
					<img src={image[currentImageSrc]} ref={imageRef} />
					<div>
						{image &&
							image.map((v: string, i: number) => (
								<img onMouseOver={() => imageReplece(i)} src={v} />
							))}
					</div>
				</div>
				<p>마우스를 올리면 이미지가 바뀝니다.</p>
			</ModalForm>
		</Background>
	);
};

export default Modal;

const Background = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	background: rgba(0, 0, 0, 0.4);
	overflow: hidden;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 15;
`;

const ModalForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: white;
	width: 650px;
	min-height: 400px;
	padding: 20px 10px;
	border-radius: 4px;
	.imageList {
		width: 550px;
		display: flex;
		flex-wrap: wrap;
		img {
			width: 100%;
			height: 300px;
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
	z-index: 20;
`;
