import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Title, TitleProps } from ".";

export default {
	title: "atoms/Title",
	component: Title,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: "helldo",
};

export const Abcd: Story<TitleProps> = (args) => <Title {...args} />;
Abcd.args = { label: "Hi" };
