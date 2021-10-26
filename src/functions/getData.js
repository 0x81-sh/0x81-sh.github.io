import axiosHandler from "./axiosHandler";
const basePath =  "https://api.github.com";
const user = "0x81-sh"

const getUserData = (setter) => {
    axiosHandler.get(basePath + "/orgs/" + user + "/repos").then(setter);
}

const methods = {
    getUserData
}
export default methods;