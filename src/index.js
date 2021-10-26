import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Container, CustomProvider} from "rsuite";
import Suspend from "./components/Suspend";
import Centered from "./components/Centered";
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';

import 'rsuite/dist/rsuite.min.css';
import methods from "./functions/getData";

ReactDOM.render(
    <React.StrictMode>
        <CustomProvider theme="dark">
            <Suspend Component={App} fn={methods.getUserData}>
                <Container style={{height: "100%"}}>
                    <Centered>
                        <SpinnerIcon fontSize="2.7em" style={{margin: "auto", display: "block"}} pulse/>
                        <br/>
                        <h4>
                            Loading data ...
                        </h4>
                    </Centered>
                </Container>
            </Suspend>
        </CustomProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
