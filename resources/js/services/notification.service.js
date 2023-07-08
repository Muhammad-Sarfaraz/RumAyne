import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

class NotificationService {
  option () {
    const options = {
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
      theme: 'light',
      position: 'bottom-right',
      transition: 'zoom'
    }
    return options
  }

  success (text) {
    toast.success(text, this.option())
  }

  error (text) {
    toast.error(text, this.option())
  }

  info (text) {
    toast.info(text, this.option())
  }

  warning (text) {
    toast.warning(text, this.option())
  }

  default (text) {
    toast.default(text, this.option())
  }
}

export default new NotificationService()
