class BlogPosts {
  constructor (client) {
    this.client = client
  }

  get (options, cb) {
    if (typeof options === 'function') {
      cb = options
      options = {}
    }

    return this.client._request({
      method: 'GET',
      path: '/content/api/v2/blog-posts',
      qs: options
    }, cb)
  }

  getById (id, cb) {
    return this.client._request({
      method: 'GET',
      path: '/content/api/v2/blog-posts/' + id
    }, cb)
  }

  create (data, cb) {
    return this.client._request({
      method: 'POST',
      path: '/content/api/v2/blog-posts',
      body: data
    }, cb)
  }

  update (id, data, cb) {
    return this.client._request({
      method: 'PUT',
      path: '/content/api/v2/blog-posts/' + id,
      body: data
    }, cb)
  }

  delete (id, cb) {
    return this.client._request({
      method: 'DELETE',
      path: '/content/api/v2/blog-posts/' + id
    }, cb)
  }

  //   clone (id, cb) {
  //     return this.client._request({
  //       method: 'POST',
  //       path: '/content/api/v2/blog-posts/' + id + '/clone'
  //     }, cb)
  //   }

  publish (id, action, cb) {
    return this.client._request({
      method: 'POST',
      path: '/content/api/v2/blog-posts/' + id + '/' + action
    }, cb)
  }
}

module.exports = BlogPosts
