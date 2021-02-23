import React from "react";
import styled from "styled-components";
import Content from "components/molecules/Content";
import TableItems from "components/molecules/TableItem";

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
							{item.map((props) => (
								<TableItems {...props} />
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

// style 영역
const TableListWrap = styled.div`
	padding: 1rem;
	background: white;
	border-radius: 3px;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	div {
		table {
			width: 100%;
		}
	}
`;
