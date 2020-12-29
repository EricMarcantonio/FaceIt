import axios from "axios";

export const AddUser = () => {
    axios.post("http://localhost:8080/user", {
        name: "Eric",
        src: "WHoop",
    });
};

export const GetAllImages = async () => {
    return axios.get("http://localhost:8080/photo")
};