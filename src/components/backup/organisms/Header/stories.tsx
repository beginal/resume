import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Header, { HeaderProps } from ".";
import { Title } from "components/backup/atoms/Title";

export default {
	title: "organisms/Header",
	component: Header,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const FirstHeader = Template.bind({});
FirstHeader.args = {
	children: <Title color="white" label="개발자 홍길동 입니다" />,
};
