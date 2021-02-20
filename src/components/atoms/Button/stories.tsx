import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { text, boolean } from "@storybook/addon-knobs";

import { Button, ButtonProps } from ".";

export default {
	title: "atoms/Button",
	component: Button,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: text("Button", "hello"),
};

Primary.storyName = "Pe";

export const Abcd: Story<ButtonProps> = (args) => <Button {...args} />;
Abcd.args = { label: text("Button", "Hi") };

export const Secondary = Template.bind({});
Secondary.args = {
	label: "Button",
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "Button",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "Button",
};

export const Log: Story<ButtonProps> = (args) => (
	<Button disabled={boolean("Disabled", false)} {...args} />
);
Log.args = {
	label: "Log",
	onClick: () => {
		console.log("Clicked");
	},
};
