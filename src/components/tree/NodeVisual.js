import Tree from "react-animated-tree";
import Universal from "./Universal";

const treeStyles = {
    paddingLeft : "3.5%",
    paddingBottom : "3.5%",
    paddingRight : "5%",
    color: 'white',
    fill: 'white'
}

const NodeVisual = ({data, name}) => {
    let style = undefined;
    if (name === "Repositories") style = treeStyles;

    return <Tree content={name} style={style}>
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