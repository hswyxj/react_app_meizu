/*
 * @Author: hesw
 * @Date: 2021-03-04 15:51:24
 * @Description: 
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
