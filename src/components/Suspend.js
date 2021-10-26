import {useEffect, useState} from "react";

const Suspend = ({Component, children, fn = () => {}, init = undefined}) => {
    const [data, setData] = useState(init);

    useEffect(() => {
        fn(setData);
    }, [fn]);

    if (data === init) {
        return children;
    } else {
        return <Component data={data}/>
    }
}

export default Suspend;