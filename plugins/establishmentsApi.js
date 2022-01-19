import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://gdp-prd-clube.s3.amazonaws.com/api',
    method: 'get',
})

export function establishmentsApi() {
    return axiosInstance.get('/repository/partners/all.json');
}