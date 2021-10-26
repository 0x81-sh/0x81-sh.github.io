import axios from "axios";
import {Notification, toaster} from "rsuite";


const wrapper = (fn) => {
    return (...args) => {
        return new Promise((resolve) => {
            fn(...args).then((...a) => resolve(...a)).catch((e) => {
                console.log(JSON.stringify(e));
                toaster.push(
                    <Notification type="error" header="Error getting data">
                        {String(e)}
                    </Notification>,
                    {
                        placement: 'topEnd'
                    }
                )
            })
        })
    }
};

const methods = {
    get : wrapper(axios.get)
}

export default methods;