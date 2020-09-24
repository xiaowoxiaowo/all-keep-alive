import {
  isDef,
  isAsyncPlaceholder,
  isRegExp,
  remove,
  getFirstComponentChild,
  matches,
  pruneCache,
  pruneCacheEntry
} from './until'

export const allKeepAlive = {
  abstract: true,

  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },

  created () {
    this.cache = Object.create(null)
    this.keys = []
  },

  destroyed () {
    for (const key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys)
    }
  },

  mounted () {
    this.$watch('include', val => {
      pruneCache(this, name => matches(val, name))
    })
    this.$watch('exclude', val => {
      pruneCache(this, name => !matches(val, name))
    })
  },

  render () {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const componentOptions = vnode && vnode.componentOptions
    if (componentOptions) {
      // 把页面的路径作为key值
      const name = this.$route.fullPath

      const { include, exclude } = this
      if (
        // 不包含的key值
        (include && (!name || !matches(include, name))) ||
        // 排除的的key值
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }
      const { cache, keys } = this

      const key = vnode.key == null
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
        : vnode.key
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance
        // 把最新的key值变为最新
        remove(keys, key)
        keys.push(key)
      } else {
        cache[key] = vnode
        keys.push(key)
        // 如果超过max的值，删除最旧的那个key
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode)
        }
      }
      vnode.data.keepAlive = true
    }
    return vnode || (slot && slot[0])
  }
}
