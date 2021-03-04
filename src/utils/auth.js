/*
 * @Author: hesw
 * @Date: 2021-03-04 15:58:18
 * @Description: 
 */
import Cookies from 'js-cookie'

// const TokenKey = 'Gs_token'

export function getToken(TokenKey) {
  return Cookies.get(TokenKey)
}

export function setToken(TokenKey, token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken(TokenKey) {
  return Cookies.remove(TokenKey)
}
