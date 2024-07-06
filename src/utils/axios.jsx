import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.swiggy.com/dapi/",
})

export default instance;