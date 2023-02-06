import { request } from '@/utils/request'

export function getUserInfo() {
    return request({
        url: '', // 请求地址
        method: 'get'
    })
}
