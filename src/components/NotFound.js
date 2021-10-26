import {Container} from "rsuite";
import ViewsUnauthorizeIcon from '@rsuite/icons/ViewsUnauthorize';
import Centered from "./Centered";

const NotFound = () => {
    return <Container style={{height : "100%"}}>
        <Centered>
            <ViewsUnauthorizeIcon style={{margin: "auto", display: "block"}} fontSize="2.7em"/>
            <br/>
            <h4>
                Page not found.
            </h4>
        </Centered>
    </Container>
}

export default NotFound;