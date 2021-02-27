const color = {
	white: "#ffffff",
	black: "#000000",
};

const sizes = {
	desktop: 1024,
	tablet: 768,
	mobile: 376,
};

const theme = {
	color,
	desktop: `(max-width: ${sizes.desktop}px)`,
	tablet: `(max-width: ${sizes.tablet}px)`,
	mobile: `(max-width: ${sizes.mobile}px)`,
	modalBackground: `position: fixed; top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.3)`,
};

export default theme;
