import Tree from "react-animated-tree";
import Universal from "./Universal";

const NodeVisual = ({data, name}) => {
    return <Tree content={name}>
        {(() => {
            let arr = [];
            for (let key in data.children) {
                arr.push(<Universal name={key} key={key} unit={data.children[key]}/>);
            }

            return arr;
        })()}
    </Tree>
}

export default NodeVisual;