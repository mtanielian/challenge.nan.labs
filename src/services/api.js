import axios from 'axios'

//const api = axios.create({}) 
//export default api


class Api {
  constructor () {
    this.http = new axios.create({})
  }

  get(url) {
    return this.http.get(url)
  }

}

export default new Api()