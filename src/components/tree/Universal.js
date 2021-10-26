import RepoVisual from "./RepoVisual";
import NodeVisual from "./NodeVisual";

const Universal = ({unit, name}) => {
    if (unit === null) return null;

    switch (unit.type) {
        case "REPO":
            return <RepoVisual data={unit} displayName={name}/>;
        case "NODE":
            return <NodeVisual data={unit} name={name}/>;
        default:
            return <div>Unknown type</div>;
    }
}

export default Universal;