const BlogPosts = require('./blog_posts')

class Blog {
  constructor (client) {
    this.client = client
    this.posts = new BlogPosts(client)
  }

  get (options, cb) {
    if (typeof options === 'function') {
      cb = options
      options = {}
    }

    return this.client._request({
      method: 'GET',
      path: '/content/api/v2/blogs',
      qs: options
    }, cb)
  }

  getById (id, cb) {
    return this.client._request({
      method: 'GET',
      path: '/content/api/v2/blogs/' + id
    }, cb)
  }
}

module.exports = Blog
