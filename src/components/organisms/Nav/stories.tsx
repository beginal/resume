import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Nav, NavProps } from ".";

export default {
	title: "organisms/Nav",
	component: Nav,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const FirstNav = Template.bind({});
FirstNav.args = {
	navTitle: "Ham Jun Ho",
	firstMenu: ["abc", "ccc", "cdf"],
};
