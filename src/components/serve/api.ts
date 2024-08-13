import axios, {AxiosInstance} from "axios";

const api: AxiosInstance = axios.create({
    baseURL: 'https://cep.awesomeapi.com.br/'
})

export const getCepData = (cep:string) => {
    return api.get(`/${cep}`)
}

export default api