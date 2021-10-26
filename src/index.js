import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CustomProvider} from "rsuite";

import 'rsuite/dist/rsuite.min.css';

ReactDOM.render(
    <React.StrictMode>
        <CustomProvider theme="dark">
            <App/>
        </CustomProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

/*

 */