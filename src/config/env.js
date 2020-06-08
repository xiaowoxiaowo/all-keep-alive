let BASE = {}
switch (process.env.NODE_ENV) {
  case 'development':
    // 这里是开发环境
    BASE.HTTP_URL = 'http://192.168.1.82:8080'
    break
  case 'production':
    switch (process.env.VUE_APP_MODEL) {
      case 'production':
        // 这里是生产环境
        BASE.HTTP_URL = '这里是生产环境'
        break
      case 'pro':
        // 这里是pro环境
        BASE.HTTP_URL = '这是pro环境'
        break
      case 'test':
        // 这里是test环境
        BASE.HTTP_URL = '这是test环境'
        break
    }
    break
}
export default BASE
