import { Title } from "components/atoms/Title";
import { Header } from "components/organisms/Header";
import { Nav } from "components/organisms/Nav";
import React from "react";

const resume: React.FC = () => {
	return (
		<>
			<Header>
				<Title size="large" color="white" label="개발자 홍길동 입니다" />
			</Header>
			<Nav firstMenu={["abc", "ccc", "cdf"]} navTitle="Ham Jun Ho" />
		</>
	);
};

export default resume;
