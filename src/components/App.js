import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Root from "./Root";
import DataContext from "../contexts/Data.context";
import Repo from "../classes/repo";

const App = ({data}) => {
    return <DataContext.Provider value={data.data.map(repo => new Repo(repo))}>
        <BrowserRouter>
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
    </DataContext.Provider>
}


export default App;
