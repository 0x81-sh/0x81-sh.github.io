import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Root from "./components/Root";
import DataContext from "./contexts/Data.context";

const App = ({data}) => {
    return <DataContext.Provider value={data}>
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
