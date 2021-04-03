import axios from 'axios'

export function request(config){
    // 1. build axios instance
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 2.axios interceptors
    // 2.1 the function of request interceptors 
    instance.interceptors.request.use(config =>{
        return config
    }, err => {
        console.log(err)
    })

    // 3.post real internet request
    return instance(config) //return promise
}