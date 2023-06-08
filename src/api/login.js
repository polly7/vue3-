import request from '@/utils/http'
import { oauthRequest } from '@/utils/http'
import qs from 'qs'

// 单点登录获取用户token
export const getTokenByCode = (code) => {
    return oauthRequest({
        url: '/oauth/wps/oauth2/getOrgUser/' + code,
        method: 'get',
    })
}
// 切换用户登陆
export const tologin = (userName) => {
    const params = { server: 'ones_self', userName: userName }
    return oauthRequest({
        url: '/oauth1.4/wps/oauth2/tologin',
        method: 'post',
        data: qs.stringify(params),
    })
}
