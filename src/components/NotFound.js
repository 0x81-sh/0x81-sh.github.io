import {Container} from "rsuite";
import ViewsUnauthorizeIcon from '@rsuite/icons/ViewsUnauthorize';

const NotFound = () => {
    return <Container style={{height : "100%"}}>
        <div style={{margin: "auto"}}>
            <ViewsUnauthorizeIcon style={{margin: "auto", display: "block"}} fontSize="2.7em"/>
            <br/>
            <h4>
                Page not found.
            </h4>
        </div>
    </Container>
}

export default NotFound;