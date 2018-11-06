class Adapter {

  genericFetch(url, options) {
    return fetch(url, options).then(res => res.json())
  }

  genericPost(url, body) {
    const options = {
      method: 'POST',
      header: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }
    return this.genericFetch(url, options)
  }

}

export default Adapter
