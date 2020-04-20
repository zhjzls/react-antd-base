import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

const env = process.env.NODE_ENV
let baseURL;
if (env == 'development') {
    baseURL = 'https://www.baidu.com';
}
else if (env == 'debug') {
    baseURL = 'https://www.ceshi.com';
}
else if (env == 'production') {
    baseURL = 'https://www.production.com';
}

const Axios = axios.create({
    baseURL,
    timeout: 10000,
    responseType: 'json',
    withCredentials: true, // 是否允许携带token
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
})

// 请求拦截器
Axios.interceptors.request.use(function (config) {
    if (config.method === 'post') {
        // 如果是post请求，将参数序列化
        config.data = qs.stringify(config.data) //
    }

    // 本地存放token
    if (localStorage.token) {
        config.headers.Authorization = localStorage.token;
    }
    return config
}, function (error) {
    message.error(error && error.data.error.message);
})

// 响应拦截器
Axios.interceptors.response.use(function (response) {
    // 正常返回
    if (response.status === 200) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(response)
    }
}, function (error) {
    if (error.response.status) {
        switch (error.response.status) {
            // 401: 未登录
            // 未登录跳转至登录界面，并携带当前页面路径
            // 登录成功后返回当前页
            case 401:
                router.replace({
                    path: '/login',
                    query: {
                        redirect: router.currentRoute.fullPath
                    }
                })
            // 403: token已过期
            // 需要清除本地及store中存储的token，并重新登录
            case 403:
                message.info('登录过期，请重新登录')
                localStorage.set('token', null)
                dispatch({ type: 'LOGTINOUT' })
                setTimeout(function () {
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
                }, 1000)
            case 404:
                message.error("请求地址不存在")
                break
            default:
                message.error(error.response.data.message)
        }
        return Promise.reject(error.response)
    }
})

// get 请求
export function get(url,params) {
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

// post 请求
export function get(url,data) {
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            data
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}