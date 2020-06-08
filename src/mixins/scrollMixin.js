let scrollMixin
scrollMixin = {
  activated () {
    // 页面加载时还原上次的滚动位置
    if (this.$route.meta.scrollTop !== undefined) {
      const scrollTop = this.$route.meta.scrollTop
      const $content = document.querySelector('#routerBox')
      $content.scrollTop = scrollTop
    }
  }
}
export default scrollMixin
