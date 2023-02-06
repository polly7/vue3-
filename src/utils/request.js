import axios from 'axios'
import { ElMessage } from 'element-plus'
// import { getToken } from '@/utils/auth'

export const request = (options) => {
    return new Promise((resolve, reject) => {
        const service = axios.create({
            baseURL: '/api', // baseURL: process.env.BASE_API, // api 的 base_ur
            timeout: 8000
        })
        service.interceptors.request.use(
            (config) => {
                let token = '' // 此处换成自己获取回来的token，通常存在在cookie或者store里面
                if (token) {
                    config.headers['X-Token'] = token // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
                    config.headers.Authorization = + token
                }
                return config
            },
            error => {
                console.log(error, '出错啦')
                Promise.reject(error)
            }
        )

        service.interceptors.response.use(
            (response) => {
                return response.data
            },
            error => {
                if (error.response.status == 403) {
                    ElMessage.error('请求失败，状态码403')
                } else {
                    ElMessage.error('服务器请求错误，请稍后再试')
                }
                return Promise.reject(error)
            }
        )
        service(options).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}
export default request