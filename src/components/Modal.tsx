import React, { useEffect } from "react";
import Youtube, { Options } from "react-youtube";
import styled, { css } from "styled-components";
import { CgClose } from "react-icons/cg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
	image?: string[];
	title?: string;
	details?: string[];
	type?: string;
	link?: string;
	setVisable: (arg0: boolean) => void;
}

const Modal = ({ image, title, details, type = "default", link, setVisable }: Props) => {
	const notRunningEvent = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	const opts: Options = {
		height: "390",
		width: "640",
		playerVars: {
			autoplay: 1,
		},
	};

	const sliderSetting = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	useEffect(() => {
		// Modal창 바깥쪽 스크롤 막기
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);
	const styleProps = {
		type,
	};

	return (
		<Background onClick={() => setVisable(false)} {...styleProps}>
			<ModalForm onClick={notRunningEvent} {...styleProps}>
				{type === "default" && (
					<>
						<div className="modalHeader">
							<h2 className="title">{title}</h2>
							<CgClose className="closeBtn" onClick={() => setVisable(false)} />
						</div>
						<div className="modalBody">
							<div className="imageList">
								<Slider className="slick" {...sliderSetting}>
									{image && image.map((v: string, i: number) => <img key={i} src={v} />)}
								</Slider>
								{/* <div>
									{image &&
										image.map((v: string, i: number) => (
											<img key={i} onMouseOver={() => imageReplece(i)} src={v} />
										))}
								</div> */}
							</div>
							<div className="details">
								<ul>
									{details?.map((detail: string, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
						</div>
					</>
				)}
				{type === "youtube" && <Youtube videoId={link && link} opts={opts} />}
			</ModalForm>
		</Background>
	);
};

export default Modal;

type modalStyle = {
	type: string;
};

const Background = styled.div<modalStyle>`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	background: ${({ type }) => (type === "default" ? "rgba(0, 0, 0, 0.4)" : "none")};
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 30;
`;

const ModalForm = styled.div<modalStyle>`
	${({ type }) =>
		type == "dafuelt"
			? css`
					box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
					width: 580px;
			  `
			: css`
					box-shadow: none;
			  `};
	box-shadow: 0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.17);
	.modalHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: white;
		border-bottom: 1px solid #dee2e6;
		border-radius: 5px 5px 0 0;
		width: 100%;
		padding: 15px;
		/* margin-bottom: 10px; */
		.title {
			padding-left: 10px;
			font-size: 1.2rem;
			font-weight: 400;
		}
		.closeBtn {
			color: gray;
			background: white;
			font-size: 20px;
			transition: all 0.3s;
			&:hover {
				cursor: pointer;
				color: black;
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
		width: 500px;
		padding: 10px;
		padding-bottom: 30px;
		border-radius: 0 0 5px 5px;
		.imageList {
			width: 430px;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			margin-bottom: 23px;
			.slick-arrow::before {
				color: #808080;
			}
			img {
				width: 100%;
				height: 240px;
				padding: 5px;
			}
			div {
				width: 100%;
				display: flex;
				justify-content: center;
			}
		}
	}
	.details {
		border-top: 1px solid #dee2e6;
		margin-top: 10px;
		overflow: scroll;
		height: 260px;
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
	z-index: 20;
	@media ${({ theme }) => theme.mobileL} {
		width: 100%;
		height: 100%;

		.modalBody {
			width: 100%;
			padding-bottom: 100px;
			.imageList {
				width: 100%;
				height: auto;
				img {
					height: auto;
				}
			}
			.details {
				height: 300px;
			}
		}
		iframe {
			width: 100%;
		}
	}
`;
