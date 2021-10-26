import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Container, CustomProvider, Loader} from "rsuite";
import Suspend from "./components/Suspend";
import Centered from "./components/Centered";
import methods from "./functions/getData";

import 'rsuite/dist/rsuite.min.css';
import "./styles/index.css";

ReactDOM.render(
    <React.StrictMode>
        <CustomProvider theme="dark">
            <Suspend Component={App} fn={methods.getUserData}>
                <Container style={{height: "100%"}}>
                    <Centered>
                        <Loader content="Loading data ..." vertical />
                    </Centered>
                </Container>
            </Suspend>
        </CustomProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

/*
                        <SpinnerIcon fontSize="2.7em" style={{margin: "auto", display: "block"}} pulse/>
                        <br/>
                        <h4>
                            Loading data ...
                        </h4>
 */