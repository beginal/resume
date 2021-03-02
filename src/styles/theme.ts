const color = {
	main: "#f2f2f2",
	sub1: "#d9d9d9",
	sub2: "#595959",
	sub3: "#868686",
	font: "#262626",
};

const sizes = {
	desktop: 1024,
	tablet: 768,
	mobileL: 500,
	mobile: 376,
};

const theme = {
	color,
	desktop: `(max-width: ${sizes.desktop}px)`,
	tablet: `(max-width: ${sizes.tablet}px)`,
	mobileL: `(max-width: ${sizes.mobileL}px)`,
	mobile: `(max-width: ${sizes.mobile}px)`,
	modalBackground: `position: fixed; top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.3)`,
};

export default theme;
