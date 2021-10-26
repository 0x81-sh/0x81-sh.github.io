import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Root from "./components/Root";

const App = () => {
    return <BrowserRouter>
        <Switch>
            <Route path="/root">
                <Root/>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/">
                <NotFound/>
            </Route>
        </Switch>
    </BrowserRouter>
}


export default App;
