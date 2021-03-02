import { useState, useEffect } from "react";
// import _ from "lodash";

const useScroll = (initialValue: number) => {
	const [scrollY, setScrollY] = useState(initialValue);
	const [scrollPer, setScrollPer] = useState(initialValue);

	const scrollEvent = () => {
		setScrollY(window.pageYOffset);
		setScrollPer((window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollEvent);
		return () => {
			window.removeEventListener("scroll", scrollEvent);
		};
	}, [scrollEvent]);

	return { scrollY, scrollPer, scrollEvent };
};

export const moveEvent = (id?: string) => {
	// 해당 항목으로 스무스한 이동
	window.scrollTo({
		top: id ? document.getElementById(id)?.offsetTop : 0,
		left: 0,
		behavior: "smooth",
	});
};

export default useScroll;
