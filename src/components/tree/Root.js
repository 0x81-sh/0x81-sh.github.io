import DataContext from "../../contexts/Data.context";
import Universal from "./Universal";
import {Breadcrumb} from "rsuite";
import styles from "../../styles/global.module.css";
import {Link} from "react-router-dom";

const Root = () => {
    return <div>
        <Breadcrumb className={styles.breadcrumbBar}>
            <Breadcrumb.Item as={Link} to={"/"}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Root</Breadcrumb.Item>
        </Breadcrumb>

        <DataContext.Consumer>
            {(data) => {
                return <Universal unit={data} name={"Repositories"}/>
            }}
        </DataContext.Consumer>
    </div>
}

export default Root;