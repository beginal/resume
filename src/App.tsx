import React from "react";
// import Resume from "pages/resume";
import NewResume from "pages/newResume";
import { Helmet } from "react-helmet";

const App: React.FC = () => {
	return (
		<div>
			<Helmet>
				<link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			{/* <Resume /> */}
			<NewResume />
		</div>
	);
};

export default App;
