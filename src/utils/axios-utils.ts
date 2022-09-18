import axios from "axios";

const parseBackend = axios.create({
    baseURL: "https://api-parle.herokuapp.com/"
});
export default parseBackend;