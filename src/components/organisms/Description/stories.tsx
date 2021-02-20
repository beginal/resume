import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";
import { text } from "@storybook/addon-knobs";

import Description, { DescriptionProps } from ".";
import { Title } from "components/atoms/Title";

export default {
	title: "organisms/Description",
	component: Description,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const Template: Story<DescriptionProps> = (args) => <Description {...args} />;

export const FirstDescription = Template.bind({});
FirstDescription.args = {};
