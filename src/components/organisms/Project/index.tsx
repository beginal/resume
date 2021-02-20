import React from "react";
import styled from "styled-components";
import Content from "components/molecules/Content";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
export interface TableListProps {
	title: string;
	desc: string;
	children: React.ReactNode;
}

export const TableList: React.FC<TableListProps> = ({ title, desc, ...props }) => {
	const styleProps = {
		title,
		desc,
		...props,
	};

	const { project } = useSelector((state: RootState) => state.resumeReducer);
	console.log(project);
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
							{project.map(({ title, image, intro, description, stack }) => (
								<tr>
									<th className="title">
										<div>
											<span>{title}</span>
											{image && <img src={image} alt={title} />}
										</div>
									</th>
									<td className="descirption">
										<div>{intro}</div>
										<p>{description}</p>
									</td>
									<td className="etc">더보기</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
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
					line-height: 1.3;
					padding: 15px 2px;
				}
			}
		}
	}
`;
