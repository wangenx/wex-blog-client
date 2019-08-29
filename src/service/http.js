import axios from 'axios'
import Api from './api'
axios.defaults.withCredentials = true
let instance = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 60 * 1000
})

const Http = {} // 包裹请求方法的容器

for (let key in Api) {
  let api = Api[key] // url  method

  // async
  Http[key] = async function (params, isFormData = false, config = {}) {
    let url = api.url
    let newParams = {}

    // content-type 是否为 form-data
    if (params && isFormData) {
      newParams = new FormData()
      for (let i in params) {
        newParams.append(i, params[i])
      }
    } else {
      newParams = params
    }

    // 不同请求的判断
    let response = {} // 请求返回值
    if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
      try {
        response = await instance[api.method](url, newParams, config)
      } catch (err) {
        response = err
      }
    } else if (api.method === 'delete' || api.method === 'get') {
      config.params = newParams
      try {
        response = await instance[api.method](url, config)
      } catch (err) {
        response = err
      }
    }
    return response
  }
}

// 请求拦截器
instance.interceptors.request.use(config => {
  return config
}, () => {
  console.error('err')
})

// 响应拦截器
instance.interceptors.response.use(res => {
  return res.data
}, () => {
  console.log('请求错误')
})
export default Http
