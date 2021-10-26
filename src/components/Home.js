import DataContext from "../contexts/Data.context";
import createTree from "../functions/createTree";

const Home = () => {
    return <div>
        <DataContext.Consumer>
            {(data) => {
                console.log(createTree(data));
            }}
        </DataContext.Consumer>
    </div>
}

export default Home;