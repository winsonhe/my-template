
var _Vue = {}

/**
 * Install Plugin vue-extend-layout
 *
 * @param {Vue} Vue
 * @param {Object} [options={}]
 */
export function VueExtendLayout (Vue, options = {}) {
  _Vue = Vue
  // Register layouts
  if (options.layouts) {
    options.layouts.keys().map(options.layouts).forEach(c => {
      c = c.default || c
      Vue.component(c.name, c)
    })
  }
}

/**
 * Render the layout
 *
 * @param {VueComponent} context Vue instance
 * @param {Object} res Compiled Component
 * @param {Boolean} update To force update component layout
 */
function layoutRender (context, update) {
  const res = _Vue.compile(`<${(context.$route.meta.layout || 'layout-default')} />`)
  context.$options.render = res.render
  context.$options.staticRenderFns = res.staticRenderFns
  if (update) context.$forceUpdate()
}

/**
 * Mixed to Vue root instance
 */
export const layout = {
  beforeCreate () {
    layoutRender(this)
  },
  watch: {
    '$route' () {
      layoutRender(this, true)
    }
  }
}
