import Cookies from 'js-cookie'
import { getTokenByCode, tologin } from '@/api/login'
import { ElMessageBox as MessageBox } from 'element-plus'
const TokenKey = 'ones-eff-authorization'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
// 登陆校验
export function checkOauth() {
    const token = getToken()
    const code = getUrlParam('code')
    if (!token) {
        if (!sessionStorage.myHref) {
            sessionStorage.myHref = location.href
        }

        if (code) {
            getTokenByCode(code).then(res => {

                setToken(res.data.data)
                window.location.href = sessionStorage.myHref
            })
            return false
        } else {
            // 单点登录
            const oauthUrl = process.env.VUE_APP_OAUTH_URL

            window.location.href =
                oauthUrl +
                '/oauth1.4/wps/oauth2/page?appId=AK20210601VBLMAH&redirectUri=' +
                oauthUrl +
                '/oauth1.4/wps/oauth2/callback?redirect_uri=' +
                encodeURI(sessionStorage.myHref)
        }
    } else {
        let loginUser = getUrlParam('2')
        if (!loginUser) {
            loginUser = getUrlParam('tologin')
        }
        if (loginUser) {

            const redirect_uri = process.env.VUE_APP_REDIRECT_URL

            tologin(loginUser).then(res => {
                if (res.status === 200) {
                    window.sessionStorage.clear()
                    res = res.data
                    if (res.result === 0) {
                        setToken(res.data)

                        window.location.href = redirect_uri
                    } else {
                        MessageBox.alert(res.msg || 'Error', {
                            confirmButtonText: '确定',
                            type: 'warning',
                            center: true,
                            showClose: false
                        })
                    }
                }
            })
        }
        return true
    }
}
// 获取url上的参数
export function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg) // 匹配目标参数
    let val
    if (r != null) {
        val = decodeURI(r[2])
    }
    if (val) {
        return val
    } else {
        return getQueryString(name)
    }
}
export function getQueryString(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    if (window.location.hash.indexOf('?') < 0) {
        return null
    }
    const r = window.location.hash.split('?')[1].match(reg)
    if (r != null) return decodeURIComponent(r[2])
    return null
}
