import axios from 'axios'
import { $P } from '@/assets/js/prompt'
import { store } from '@/store/index'

// axios.defaults.timeout = 10000;
axios.defaults.baseURL = '/'

axios.interceptors.request.use(
    config => {
        //http request 拦截器
        config.data = JSON.stringify(config.data)
        config.headers = {
            'Content-Type': 'application/json',
        }
        return config
    },
    error => Promise.reject(error)
)

axios.interceptors.response.use(response => {
    //http response 拦截器
    switch (response.data.code) {
        case 200:
        case 10034:
            break
        case 1000:
            $P.warning(response.data.message)
            break
        case 10001:
            store.loginOutA()
            // window.location.href = window.location.origin
            // store.setShowType('login');
            $P.warning(response.data.message)
            break
        default:
            $P.warning(response.data.message)
            break
    }
    return response.data
})

const get = (url, params = {}) => {
    //封装get方法
    return new Promise((resolve, reject) => {
        axios
            .get(url, { params: params })
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const post = (url, data) => {
    //封装post请求
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            response => {
                resolve(response)
            },
            err => reject(err)
        )
    })
}

const http = (fecth, url, param) => {
    //统一接口处理，返回数据
    return new Promise((resolve, reject) => {
        switch (fecth) {
            case 'get':
                get(url, param)
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => reject(error))
                break
            case 'post':
                post(url, param)
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => reject(error))
                break
            default:
                break
        }
    })
}
export default http
