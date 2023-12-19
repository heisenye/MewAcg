import axios from 'axios'
import msg from '../constants/msg'
import showMsg from '../utils/showMsg'
import showLoader from '../utils/showLoader'
import { useToken } from '../utils/useToken'

const { removeToken } = useToken()

const BASE_URL = import.meta.env.VITE_BASE_URL

const service = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 20000
})

service.interceptors.request.use(
  async (config) => {
    config.loading = showLoader()
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    if (response.config['loading']) {
      response.config['loading'].remove()
    }

    return response
  },
  (error) => {
    if (error.config.loading) {
      error.config.loading.remove()
    }

    if (!error.response) {
      if (error.code === 'ERR_NETWORK') {
        error.response = {
          data: {
            code: 500,
            msg: msg['NETWORK_ERROR']
          }
        }
      } else {
        error.response = {
          data: {
            code: 500,
            msg: msg['UNKNOWN_ERROR']
          }
        }
      }
    }
    if (error.response.data.code === 401) {
      removeToken()
    }
    showMsg(error.response.data.msg, 'error')
    return Promise.reject(error)
  }
)

export default service
