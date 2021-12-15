import axios from 'axios'

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
  (error: any) => Promise.reject(error)
)

axios.interceptors.response.use(response => {
  //http response 拦截器
  switch (response.data.code) {
    case 200:
    case 10034:
      break
    case 1000:
      break
    case 10001:
      break
    default:
      break
  }
  return response.data
})

const get = (url: string, params = {}) => {
  //封装get方法
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then((response: unknown) => {
        resolve(response)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}

const post = (url: string, data?: object) => {
  //封装post请求
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response: unknown) => {
        resolve(response)
      },
      (err: any) => reject(err)
    )
  })
}

const http = (fecth: string, url: string, param?: object) => {
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
