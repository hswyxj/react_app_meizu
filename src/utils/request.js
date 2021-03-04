
import axios from 'axios'
// import 'babel-polyfill'
import { store } from '@/store';
import { getToken } from '@/utils/auth'
import { getTime } from '@/utils/common'
import { Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

// create an axios instance
console.log(process.env.REACT_APP_BASE_API );
const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API, // api 的 base_url
    withCredentials: false, // 跨域请求时发送 cookies
    timeout: 60000 // request timeout
})

const token = store.getState().token
// request interceptor
service.interceptors.request.use(

    config => {
        // Do something before request is sent
        if (token) {
            // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
            config.headers['Authorization'] = getToken('Authorization')
        }
        if (config.method === 'post') {
            // 公共请求参数
            if (!config.data) {
                config.data = { time: getTime() }
            } else {
                config.data.time = getTime()
            }
            if (!config.data.time) {
                config.data.time = getTime()
            }
            // console.log(config.data)
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    // response => response,
    /**
       * 下面的注释为通过在response里，自定义code来标示请求状态
       * 当code返回如下情况则说明权限有问题，登出并返回到登录页
       * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
       * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
       */
    response => {
        const res = response.data
        if (res.code !== 1) {
            message.error({
                content: res.msg || res.code + 'error',
                duration: 2
            })

            if (res.code === 105 || res.code === 104 || res.code === 103 || res.code === 102) {
                confirm({
                    title: '确定登出',
                    icon: <ExclamationCircleOutlined />,
                    content: '您已被登出，可以取消继续留在该页面，或者重新登录',
                    okText: '重新登录',
                    cancelText: '取消',
                    onOk() {
                        console.log('OK');
                        store.dispatch('user/resetToken').then(() => {
                            window.location.reload() // 为了重新实例化vue-router对象 避免bug
                        })
                    },
                    onCancel() {
                        console.log('Cancel');
                    },
                });
            }
            return Promise.reject(new Error(res.msg || res.code + 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        message.error({
            content: error.message,
            duration: 2
        })
        return Promise.reject(error)
    }
)

export default service
