import DataContext from "../contexts/Data.context";

const Home = () => {
    return <div>
        <DataContext.Consumer>
            {(data) => {
                console.log(data);
            }}
        </DataContext.Consumer>
    </div>
}

export default Home;