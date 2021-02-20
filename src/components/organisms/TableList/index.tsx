import React from "react";
import styled from "styled-components";
import Content from "components/molecules/Content";

export interface TableListProps {
	title: string;
	desc: string;
	item: Array<any>;
	tailText?: string;
}

export const TableList: React.FC<TableListProps> = ({ title, desc, item, tailText, ...props }) => {
	const styleProps = {
		title,
		desc,
		item,
		...props,
	};

	return (
		<>
			<Content title={title} desc={desc} />
			<TableListWrap {...styleProps}>
				<div>
					<table>
						<colgroup>
							<col width="20%" />
							<col width="73%" />
							<col width="7%" />
						</colgroup>
						<thead>
							<tr>
								<th>Project</th>
								<th>Description</th>
								<th>Ect</th>
							</tr>
						</thead>
						<tbody>
							{item.map(({ title, image, intro, description, stack }) => (
								<tr>
									<th className="title">
										<div>
											<span>{title}</span>
											{image && <img src={image} alt={title} />}
										</div>
									</th>
									<td className="descirption">
										<div>
											<div>
												<div>{intro}</div>
												<p>{description}</p>
											</div>
											<div>
												{stack.map((item: string) => (
													<span className="skillBox">{item}</span>
												))}
											</div>
										</div>
									</td>
									<td className="etc">더보기</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="tales">{tailText}</div>
			</TableListWrap>
		</>
	);
};
export default TableList;

type TableListType = {};

// style 영역
const TableListWrap = styled.div<TableListType>`
	padding: 1rem;
	background: white;
	border-radius: 4px;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	div {
		table {
			width: 100%;
			tr {
				border-bottom: 1px solid gray;
				height: 100%;
				th {
					padding: 10px 0;
					vertical-align: middle;
				}
				.title,
				.etc {
					vertical-align: middle;
					text-align: center;
				}
				.title {
					div {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						font-weight: 700;
						img {
							width: 160px;
							height: 150px;
						}
						span {
							padding: 5px 0;
						}
					}
				}
				.descirption {
					> div {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						height: 200px;
						line-height: 1.3;
					}
					padding: 15px 2px;
					.skillBox {
						text-transform: uppercase;
						background: #c5c6c4;
						font-weight: 300;
						border-radius: 4px;
						font-size: 0.6rem;
						line-height: 0.8;
						color: white;
						padding: 2px 6px;
						padding-bottom: 4px;
						margin: 2px;
					}
				}
			}
		}
	}
	.tales {
		text-align: center;
		padding-top: 16px;
		font-size: 0.75rem;
		font-weight: 300;
		color: #bbbbbb;
	}
`;
