class LoaderService {
  constructor (loading) {
    this.loading = loading
    this.state = null
  }

  show () {
    this.state = this.loading.show()
    return
  }
 
  hide () {
    console.log(1)
    return this.state.hide()
  }
}

export default LoaderService
