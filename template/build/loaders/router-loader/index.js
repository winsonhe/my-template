/**
 * 自定义loader，处理自动化路由
 */
const path = require('path')
const utils = require('../../utils')
const glob = require('glob')
const fs = require('fs')
const _ = require('lodash')
const hash = require('hash-sum')

module.exports = function (source, map) {
  this.cacheable()
  if (/src[/\\]modules[/\\]\w+[/\\]router[/\\]index\.js/.test(this.resourcePath)) {
    const srcDir = this.resourcePath.replace(/[/\\]router[/\\]index.js/, '')

    const files = {}
    glob.sync('pages/**/*.{vue,js}', {
      cwd: srcDir
    }).forEach(f => {
      const key = f.replace(/\.(js|vue)$/, '')
      if (/\.vue$/.test(f) || !files[key]) {
        files[key] = f
      }
    })

    let routes = utils.createRoutes(Object.values(files), srcDir)
    // 读取路由模板
    const routeTemplate = fs.readFileSync(path.join(__dirname, 'router.js'), 'utf-8')
    const template = _.template(routeTemplate + '\n' + source)
    return template({
      'routes': routes,
      'uniqBy': _.uniqBy,
      'hash': hash
    })
  }
  return source
}
