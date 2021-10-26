import Tree from "react-animated-tree";
import DataContext from "../../contexts/Data.context";
import Universal from "./Universal";

const Root = () => {
    return <div>
        <DataContext.Consumer>
            {(data) => {
                return <Universal unit={data} name={"Repositories"}/>
            }}
        </DataContext.Consumer>
    </div>
}

export default Root;