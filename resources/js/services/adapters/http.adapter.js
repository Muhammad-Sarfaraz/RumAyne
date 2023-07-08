import axios from 'axios'
import app from '@/main'
import config from '@/config/app.config'
import NotificationService from '@/services/notification.service'

class HttpAdapter {
  constructor (progressbar) {
    this.progressbar = progressbar
  }
  http () {
    const http = axios.create({
      baseURL: config.api_url || '',
      headers: {
        'Content-type': 'application/json'
      }
    })

    http.interceptors.request.use(
      request => {
        if (
          typeof request.hideLoading === 'undefined' ||
          !request.hideLoading
        ) {
          this.progressbar.start()
        }
        return request
      },
      error => {
        this.progressbar.finish()

        NotificationService.error('Network error. Check your connection')
        return Promise.reject(error)
      }
    )

    http.interceptors.response.use(
      response => {
        this.progressbar.finish()

        return response
      },
      error => {
        this.progressbar.finish()

        // Server down
        if (error.response.status >= 500) {
          NotificationService.error('Server Unavailable.')
          return Promise.reject(error)
        }

        return Promise.reject(error)
      }
    )

    return http
  }
}

export default HttpAdapter
