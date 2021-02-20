import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "redux/store";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyles";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root"),
);
