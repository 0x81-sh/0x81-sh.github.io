import {HashRouter, Route, Switch} from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Root from "./tree/Root";
import DataContext from "../contexts/Data.context";
import Repo from "../classes/repo";
import createTree from "../functions/createTree";

const App = ({data}) => {
    return <DataContext.Provider value={createTree(data.data.map(repo => new Repo(repo)))}>
        <HashRouter>
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
        </HashRouter>
    </DataContext.Provider>
}


export default App;
