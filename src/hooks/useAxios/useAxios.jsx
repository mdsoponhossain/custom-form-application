import axios from "axios";

const axiosInstace = axios.create({baseURL:'http://localhost:5000'})
const useAxios = () => {
    return axiosInstace ;
};

export default useAxios;