import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { text } from "@storybook/addon-knobs";

import Content, { ContentProps } from ".";
import { Title } from "components/atoms/Title";

export default {
	title: "organisms/Content",
	component: Content,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const Template: Story<ContentProps> = (args) => <Content {...args} />;

export const FirstContent = Template.bind({});
FirstContent.args = {};
