import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import { withConsole } from '@storybook/addon-console';
import {withA11y} from '@storybook/addon-a11y';
import GlobalStyle from '../src/styles/globalStyles';

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
};

const withGlobal = (cb) => (
	<>
		<GlobalStyle />
		{cb()}
	</>
)
addDecorator(withGlobal)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withKnobs)
addDecorator(withA11y)