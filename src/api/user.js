import { request } from '@/utils/http'

export function getUserInfo() {
    return request({
        url: '', // 请求地址
        method: 'get'
    })
}
