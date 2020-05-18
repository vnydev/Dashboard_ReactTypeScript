import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppComponent } from "./components/App";
import { Provider } from 'react-redux';
import Store from './redux/store';

ReactDOM.render(
    <Provider store={Store}>
        <AppComponent />
    </Provider>,
    document.getElementById("app")
);