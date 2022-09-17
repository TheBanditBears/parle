import axios from "axios";

const parseBackend = axios.create({
    baseURL: "https://parle-backend.herokuapp.com"
});
export default parseBackend;