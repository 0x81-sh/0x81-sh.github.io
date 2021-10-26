import styles from "../styles/global.module.css";
import {IconButton} from "rsuite";
import {Link} from "react-router-dom";
import DashboardIcon from '@rsuite/icons/Dashboard';

const Home = () => {
    return <div className={styles.breadcrumbBar}
                      style={{paddingRight : "3.5%", display: "flex", justifyContent: "space-between"}}>
        <div>
            <h3>
                <a href={"https://github.com/ulrich-barnstedt"}>ulrich-barnstedt</a> &nbsp; / &nbsp; 0x81-sh
            </h3>

            <br/>
            A collection of homeworks and other school related pieces of code.
            <br/>
            <br/>

            <IconButton icon={<DashboardIcon/>} as={Link} to="/root">
                Repositories
            </IconButton>
        </div>

        <div>
            <img alt="Profile" src="79417936.png" style={{maxWidth: "30%", float: "right", paddingTop: "3%"}}/>
        </div>
    </div>
}

export default Home;