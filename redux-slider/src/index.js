import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Slider from "./slider";
import reducer from "./reducer";
import {Provider} from "react-redux";

const store = createStore(reducer);

const update = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Slider/>
        </Provider>,
        document.getElementById('root'));
};

update();
store.subscribe(update)